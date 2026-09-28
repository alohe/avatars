// Export catalog constants and types
export {
  AvatarCategory,
  AvatarItem,
  CATEGORIES,
  CATEGORY_COUNTS,
  AVATAR_CATALOG,
  TOTAL_AVATARS_COUNT,
} from './catalog';

// Export type definitions
export { CDNProvider, AvatarOptions, AvatarMeta } from './types';

// Export CDN URL helper functions
export {
  getAvatarUrl,
  getRandomAvatarUrl,
  formatCdnUrl,
} from './cdn';

// Export Local File & Buffer helper functions
export {
  getAvatarPath,
  getAvatarBuffer,
  getAvatarBase64,
  getAvatarMeta,
  copyAvatarTo,
  copyCategoryTo,
  copyAllAvatarsTo,
} from './local';
