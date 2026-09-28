import { AvatarCategory, AVATAR_CATALOG } from './catalog';
import { AvatarOptions } from './types';

const DEFAULT_REPO_OWNER = 'alohe';
const DEFAULT_REPO_NAME = 'avatars';
const DEFAULT_BRANCH = 'main';

/**
 * Get the CDN URL for a specific avatar by category and id or filename.
 * @param category Avatar category (e.g., 'vibrent', '3d', 'notion')
 * @param id ID number of the avatar (e.g. 1, 2)
 * @param options Optional provider config (jsdelivr, unpkg, github)
 */
export function getAvatarUrl(
  category: AvatarCategory,
  id: number,
  options?: AvatarOptions
): string {
  const catalogList = AVATAR_CATALOG[category];
  if (!catalogList) {
    throw new Error(`Invalid category "${category}". Valid categories are: ${Object.keys(AVATAR_CATALOG).join(', ')}`);
  }

  const item = catalogList.find((av) => av.id === id);
  if (!item) {
    const maxId = catalogList.length;
    throw new Error(`Avatar ID ${id} not found in category "${category}". Valid IDs for "${category}" are 1 to ${maxId}.`);
  }

  return formatCdnUrl(item.filename, options);
}

/**
 * Get a random avatar CDN URL, optionally restricted to a specific category.
 * @param category Optional category restriction
 * @param options CDN configuration options
 */
export function getRandomAvatarUrl(category?: AvatarCategory, options?: AvatarOptions): string {
  let targetCategory = category;
  if (!targetCategory) {
    const categories = Object.keys(AVATAR_CATALOG) as AvatarCategory[];
    targetCategory = categories[Math.floor(Math.random() * categories.length)];
  }

  const items = AVATAR_CATALOG[targetCategory];
  if (!items || items.length === 0) {
    throw new Error(`No avatars found for category "${targetCategory}"`);
  }

  const randomItem = items[Math.floor(Math.random() * items.length)];
  return formatCdnUrl(randomItem.filename, options);
}

/**
 * Format CDN URL based on provider choice.
 */
export function formatCdnUrl(filename: string, options?: AvatarOptions): string {
  const provider = options?.provider || 'jsdelivr';
  const owner = options?.user || DEFAULT_REPO_OWNER;
  const repo = options?.repo || DEFAULT_REPO_NAME;
  const branch = options?.branch || DEFAULT_BRANCH;

  switch (provider) {
    case 'unpkg':
      return `https://unpkg.com/@geekykalpesh/avatars/png/${filename}`;
    case 'github':
      return `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/png/${filename}`;
    case 'jsdelivr':
    default:
      return `https://cdn.jsdelivr.net/gh/${owner}/${repo}@${branch}/png/${filename}`;
  }
}
