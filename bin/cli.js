#!/usr/bin/env node

const { Command } = require('commander');
const pc = require('picocolors');
const prompts = require('prompts');
const path = require('path');
const fs = require('fs');

// Load compiled library or fallback to source
let avatarsLib;
try {
  avatarsLib = require('../dist/index.js');
} catch (err) {
  // TypeScript compilation fallback before build
  avatarsLib = require('../src/index.ts');
}

const {
  CATEGORIES,
  CATEGORY_COUNTS,
  TOTAL_AVATARS_COUNT,
  getAvatarUrl,
  getRandomAvatarUrl,
  copyCategoryTo,
  copyAllAvatarsTo,
  copyAvatarTo,
  AVATAR_CATALOG,
} = avatarsLib;

const program = new Command();

program
  .name('@geekykalpesh/avatars')
  .description('✨ CLI tool to browse, generate, and copy profile picture avatars into your web projects')
  .version('1.0.0');

// Interactive mode when no subcommand is provided
program
  .action(async () => {
    console.log(`
${pc.bold(pc.cyan('✨ Avatars CLI'))} ${pc.gray(`v1.0.0`)}
${pc.gray(`A collection of ${TOTAL_AVATARS_COUNT} avatar profile images across ${CATEGORIES.length} styles.`)}
`);

    const actionPrompt = await prompts({
      type: 'select',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        { title: '📦 Copy avatar collection to directory', value: 'copy_category' },
        { title: '🚀 Copy ALL 133 avatars to directory', value: 'copy_all' },
        { title: '🎲 Get a random avatar (CDN URL or Download)', value: 'random' },
        { title: '📊 View category list & stats', value: 'list' },
        { title: '❌ Exit', value: 'exit' },
      ],
    });

    if (!actionPrompt.action || actionPrompt.action === 'exit') {
      console.log(pc.gray('Goodbye! 👋'));
      return;
    }

    switch (actionPrompt.action) {
      case 'copy_category':
        await handleCopyCategoryPrompt();
        break;
      case 'copy_all':
        await handleCopyAllPrompt();
        break;
      case 'random':
        await handleRandomPrompt();
        break;
      case 'list':
        handleListCommand();
        break;
    }
  });

program
  .command('list')
  .description('Display list of avatar categories and counts')
  .action(() => {
    handleListCommand();
  });

program
  .command('download')
  .description('Copy avatars of a category into a directory')
  .option('-c, --category <category>', `Avatar category (${CATEGORIES.join(', ')})`)
  .option('-o, --out <directory>', 'Output directory', './public/avatars')
  .action((options) => {
    if (!options.category) {
      console.log(pc.red('Error: Please specify category with --category <name> or -c <name>'));
      console.log(pc.gray(`Valid categories: ${CATEGORIES.join(', ')}`));
      process.exit(1);
    }
    const cat = options.category.toLowerCase();
    if (!CATEGORIES.includes(cat)) {
      console.log(pc.red(`Error: Invalid category "${options.category}".`));
      console.log(pc.gray(`Valid categories: ${CATEGORIES.join(', ')}`));
      process.exit(1);
    }
    const dest = options.out || './public/avatars';
    try {
      const files = copyCategoryTo(cat, dest);
      console.log(pc.green(`✔ Successfully copied ${files.length} "${cat}" avatars to ${pc.bold(dest)}`));
    } catch (err) {
      console.log(pc.red(`❌ Failed to copy: ${err.message}`));
    }
  });

program
  .command('copy-all')
  .description('Copy all 133 avatars to target directory')
  .option('-o, --out <directory>', 'Output directory', './public/avatars')
  .action((options) => {
    const dest = options.out || './public/avatars';
    try {
      const files = copyAllAvatarsTo(dest);
      console.log(pc.green(`✔ Successfully copied all ${files.length} avatars across 8 categories to ${pc.bold(dest)}`));
    } catch (err) {
      console.log(pc.red(`❌ Failed to copy avatars: ${err.message}`));
    }
  });

program
  .command('random')
  .description('Get CDN URL or save a random avatar image')
  .option('-c, --category <category>', 'Optional category filter')
  .option('-o, --out <filepath>', 'Optional output file path to save PNG locally')
  .action((options) => {
    const cat = options.category ? options.category.toLowerCase() : undefined;
    if (cat && !CATEGORIES.includes(cat)) {
      console.log(pc.red(`Error: Invalid category "${options.category}".`));
      process.exit(1);
    }
    const url = getRandomAvatarUrl(cat);
    console.log(`\n${pc.bold('Random Avatar CDN URL:')}\n${pc.cyan(url)}\n`);

    if (options.out) {
      // Find matching random item to copy locally
      const items = AVATAR_CATALOG[cat || CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)]];
      const randomItem = items[Math.floor(Math.random() * items.length)];
      try {
        const dest = copyAvatarTo(randomItem.category, randomItem.id, options.out);
        console.log(pc.green(`✔ Saved avatar to ${pc.bold(dest)}`));
      } catch (err) {
        console.log(pc.red(`❌ Failed to save avatar: ${err.message}`));
      }
    }
  });

program
  .command('cdn')
  .description('Get CDN URL for specific avatar')
  .requiredOption('-c, --category <category>', 'Category name')
  .requiredOption('-i, --id <number>', 'Avatar ID number', parseInt)
  .action((options) => {
    try {
      const url = getAvatarUrl(options.category.toLowerCase(), options.id);
      console.log(`\n${pc.bold('Avatar CDN URL:')}\n${pc.cyan(url)}\n`);
    } catch (err) {
      console.log(pc.red(`Error: ${err.message}`));
    }
  });

async function handleCopyCategoryPrompt() {
  const catPrompt = await prompts({
    type: 'select',
    name: 'category',
    message: 'Select an avatar category:',
    choices: CATEGORIES.map((cat) => ({
      title: `${cat} (${CATEGORY_COUNTS[cat]} avatars)`,
      value: cat,
    })),
  });

  if (!catPrompt.category) return;

  const dirPrompt = await prompts({
    type: 'text',
    name: 'destDir',
    message: 'Target destination directory:',
    initial: './public/avatars',
  });

  if (!dirPrompt.destDir) return;

  try {
    const files = copyCategoryTo(catPrompt.category, dirPrompt.destDir);
    console.log(pc.green(`\n✔ Successfully copied ${files.length} "${catPrompt.category}" avatars into ${pc.bold(dirPrompt.destDir)}\n`));
  } catch (err) {
    console.log(pc.red(`\n❌ Error: ${err.message}\n`));
  }
}

async function handleCopyAllPrompt() {
  const dirPrompt = await prompts({
    type: 'text',
    name: 'destDir',
    message: 'Target destination directory for all 133 avatars:',
    initial: './public/avatars',
  });

  if (!dirPrompt.destDir) return;

  try {
    const files = copyAllAvatarsTo(dirPrompt.destDir);
    console.log(pc.green(`\n✔ Successfully copied all ${files.length} avatars into ${pc.bold(dirPrompt.destDir)}\n`));
  } catch (err) {
    console.log(pc.red(`\n❌ Error: ${err.message}\n`));
  }
}

async function handleRandomPrompt() {
  const catPrompt = await prompts({
    type: 'select',
    name: 'category',
    message: 'Select category (or Any):',
    choices: [
      { title: '🎲 Any Category', value: 'any' },
      ...CATEGORIES.map((c) => ({ title: c, value: c })),
    ],
  });

  const cat = catPrompt.category === 'any' ? undefined : catPrompt.category;
  const url = getRandomAvatarUrl(cat);

  console.log(`\n${pc.bold('Random Avatar CDN URL:')}`);
  console.log(`${pc.cyan(pc.underline(url))}\n`);
}

function handleListCommand() {
  console.log(`\n${pc.bold('✨ Available Avatar Categories')}\n`);
  console.log(`${pc.gray('CATEGORY')}    ${pc.gray('COUNT')}   ${pc.gray('EXAMPLE ID RANGE')}`);
  console.log('─'.repeat(40));

  CATEGORIES.forEach((cat) => {
    const count = CATEGORY_COUNTS[cat];
    const catFormatted = cat.padEnd(12, ' ');
    const countFormatted = String(count).padEnd(8, ' ');
    console.log(`${pc.cyan(catFormatted)} ${pc.yellow(countFormatted)} 1 to ${count}`);
  });

  console.log('─'.repeat(40));
  console.log(`${pc.bold('TOTAL:')}       ${pc.green(TOTAL_AVATARS_COUNT + ' avatars')}\n`);
}

program.parse(process.argv);
