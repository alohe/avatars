const fs = require('fs');
const path = require('path');

const pngDir = path.join(__dirname, '..', 'png');
const files = fs.readdirSync(pngDir).filter(f => f.endsWith('.png'));

const catalog = {};
const categoriesMap = {};

files.forEach(filename => {
  // filename format: <category>_<number>.png e.g. 3d_1.png, vibrent_27.png
  const match = filename.match(/^([a-zA-Z0-9]+)_(\d+)\.png$/);
  if (match) {
    const category = match[1];
    const id = parseInt(match[2], 10);
    
    if (!catalog[category]) {
      catalog[category] = [];
    }
    catalog[category].push({
      id,
      filename,
      category
    });
  }
});

// Sort each category by id
Object.keys(catalog).forEach(cat => {
  catalog[cat].sort((a, b) => a.id - b.id);
  categoriesMap[cat] = catalog[cat].length;
});

const tsContent = `// Auto-generated file. Do not edit directly.
export interface AvatarItem {
  id: number;
  filename: string;
  category: AvatarCategory;
  cdnUrl: string;
}

export type AvatarCategory = ${Object.keys(categoriesMap).map(c => `'${c}'`).join(' | ')};

export const CATEGORIES: AvatarCategory[] = [
  ${Object.keys(categoriesMap).map(c => `'${c}'`).join(',\n  ')}
];

export const CATEGORY_COUNTS: Record<AvatarCategory, number> = ${JSON.stringify(categoriesMap, null, 2)};

export const AVATAR_CATALOG: Record<AvatarCategory, Array<{ id: number; filename: string; category: AvatarCategory }>> = ${JSON.stringify(catalog, null, 2)};

export const TOTAL_AVATARS_COUNT = ${files.length};
`;

const srcDir = path.join(__dirname, '..', 'src');
if (!fs.existsSync(srcDir)) {
  fs.mkdirSync(srcDir, { recursive: true });
}

fs.writeFileSync(path.join(srcDir, 'catalog.ts'), tsContent);
console.log(`Successfully generated catalog.ts with ${files.length} avatars across ${Object.keys(categoriesMap).length} categories.`);
