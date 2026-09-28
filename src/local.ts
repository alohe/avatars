import path from 'path';
import fs from 'fs';
import { AvatarCategory, AVATAR_CATALOG } from './catalog';
import { getAvatarUrl } from './cdn';
import { AvatarMeta } from './types';

/**
 * Get absolute path to the local PNG file inside package node_modules.
 */
export function getAvatarPath(category: AvatarCategory, id: number): string {
  const item = getAvatarItemOrThrow(category, id);
  return getPngPath(item.filename);
}

/**
 * Read avatar PNG as Node.js Buffer.
 */
export function getAvatarBuffer(category: AvatarCategory, id: number): Buffer {
  const filePath = getAvatarPath(category, id);
  return fs.readFileSync(filePath);
}

/**
 * Read avatar PNG as Base64 Data URI string (`data:image/png;base64,...`).
 */
export function getAvatarBase64(category: AvatarCategory, id: number): string {
  const buffer = getAvatarBuffer(category, id);
  return `data:image/png;base64,${buffer.toString('base64')}`;
}

/**
 * Get comprehensive metadata for an avatar (category, id, filename, cdnUrl, localPath).
 */
export function getAvatarMeta(category: AvatarCategory, id: number): AvatarMeta {
  const item = getAvatarItemOrThrow(category, id);
  const localPath = getPngPath(item.filename);
  const cdnUrl = getAvatarUrl(category, id);

  return {
    id,
    category,
    filename: item.filename,
    cdnUrl,
    localPath,
  };
}

/**
 * Copy a specific avatar to a destination path on disk.
 */
export function copyAvatarTo(category: AvatarCategory, id: number, destPath: string): string {
  const sourcePath = getAvatarPath(category, id);
  const absoluteDest = path.resolve(destPath);
  
  const destDir = path.dirname(absoluteDest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  fs.copyFileSync(sourcePath, absoluteDest);
  return absoluteDest;
}

/**
 * Copy all avatars of a specific category into a target directory.
 */
export function copyCategoryTo(category: AvatarCategory, targetDir: string): string[] {
  const items = AVATAR_CATALOG[category];
  if (!items) {
    throw new Error(`Category "${category}" does not exist.`);
  }

  const absoluteDir = path.resolve(targetDir);
  if (!fs.existsSync(absoluteDir)) {
    fs.mkdirSync(absoluteDir, { recursive: true });
  }

  const copiedPaths: string[] = [];
  for (const item of items) {
    const srcPath = getPngPath(item.filename);
    const destPath = path.join(absoluteDir, item.filename);
    fs.copyFileSync(srcPath, destPath);
    copiedPaths.push(destPath);
  }

  return copiedPaths;
}

/**
 * Copy all 133 avatars to a target directory.
 */
export function copyAllAvatarsTo(targetDir: string): string[] {
  const absoluteDir = path.resolve(targetDir);
  if (!fs.existsSync(absoluteDir)) {
    fs.mkdirSync(absoluteDir, { recursive: true });
  }

  const copiedPaths: string[] = [];
  for (const category of Object.keys(AVATAR_CATALOG) as AvatarCategory[]) {
    const paths = copyCategoryTo(category, absoluteDir);
    copiedPaths.push(...paths);
  }

  return copiedPaths;
}

function getAvatarItemOrThrow(category: AvatarCategory, id: number) {
  const catalogList = AVATAR_CATALOG[category];
  if (!catalogList) {
    throw new Error(`Invalid category "${category}".`);
  }
  const item = catalogList.find((av) => av.id === id);
  if (!item) {
    throw new Error(`Avatar ID ${id} not found in category "${category}".`);
  }
  return item;
}

function getPngPath(filename: string): string {
  // Determine root directory of package
  const rootDir = path.resolve(__dirname, '..');
  const pngPath = path.join(rootDir, 'png', filename);
  if (!fs.existsSync(pngPath)) {
    // If running from dist/
    const altPath = path.join(rootDir, '..', 'png', filename);
    if (fs.existsSync(altPath)) {
      return altPath;
    }
  }
  return pngPath;
}
