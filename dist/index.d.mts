interface AvatarItem {
    id: number;
    filename: string;
    category: AvatarCategory;
    cdnUrl: string;
}
type AvatarCategory = '3d' | 'bluey' | 'memo' | 'notion' | 'teams' | 'toon' | 'upstream' | 'vibrent';
declare const CATEGORIES: AvatarCategory[];
declare const CATEGORY_COUNTS: Record<AvatarCategory, number>;
declare const AVATAR_CATALOG: Record<AvatarCategory, Array<{
    id: number;
    filename: string;
    category: AvatarCategory;
}>>;
declare const TOTAL_AVATARS_COUNT = 133;

type CDNProvider = 'jsdelivr' | 'unpkg' | 'github';
interface AvatarOptions {
    provider?: CDNProvider;
    branch?: string;
    user?: string;
    repo?: string;
}
interface AvatarMeta {
    id: number;
    category: AvatarCategory;
    filename: string;
    cdnUrl: string;
    localPath: string;
}

/**
 * Get the CDN URL for a specific avatar by category and id or filename.
 * @param category Avatar category (e.g., 'vibrent', '3d', 'notion')
 * @param id ID number of the avatar (e.g. 1, 2)
 * @param options Optional provider config (jsdelivr, unpkg, github)
 */
declare function getAvatarUrl(category: AvatarCategory, id: number, options?: AvatarOptions): string;
/**
 * Get a random avatar CDN URL, optionally restricted to a specific category.
 * @param category Optional category restriction
 * @param options CDN configuration options
 */
declare function getRandomAvatarUrl(category?: AvatarCategory, options?: AvatarOptions): string;
/**
 * Format CDN URL based on provider choice.
 */
declare function formatCdnUrl(filename: string, options?: AvatarOptions): string;

/**
 * Get absolute path to the local PNG file inside package node_modules.
 */
declare function getAvatarPath(category: AvatarCategory, id: number): string;
/**
 * Read avatar PNG as Node.js Buffer.
 */
declare function getAvatarBuffer(category: AvatarCategory, id: number): Buffer;
/**
 * Read avatar PNG as Base64 Data URI string (`data:image/png;base64,...`).
 */
declare function getAvatarBase64(category: AvatarCategory, id: number): string;
/**
 * Get comprehensive metadata for an avatar (category, id, filename, cdnUrl, localPath).
 */
declare function getAvatarMeta(category: AvatarCategory, id: number): AvatarMeta;
/**
 * Copy a specific avatar to a destination path on disk.
 */
declare function copyAvatarTo(category: AvatarCategory, id: number, destPath: string): string;
/**
 * Copy all avatars of a specific category into a target directory.
 */
declare function copyCategoryTo(category: AvatarCategory, targetDir: string): string[];
/**
 * Copy all 133 avatars to a target directory.
 */
declare function copyAllAvatarsTo(targetDir: string): string[];

export { AVATAR_CATALOG, type AvatarCategory, type AvatarItem, type AvatarMeta, type AvatarOptions, CATEGORIES, CATEGORY_COUNTS, type CDNProvider, TOTAL_AVATARS_COUNT, copyAllAvatarsTo, copyAvatarTo, copyCategoryTo, formatCdnUrl, getAvatarBase64, getAvatarBuffer, getAvatarMeta, getAvatarPath, getAvatarUrl, getRandomAvatarUrl };
