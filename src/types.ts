import { AvatarCategory } from './catalog';

export type CDNProvider = 'jsdelivr' | 'unpkg' | 'github';

export interface AvatarOptions {
  provider?: CDNProvider;
  branch?: string;
  user?: string;
  repo?: string;
}

export interface AvatarMeta {
  id: number;
  category: AvatarCategory;
  filename: string;
  cdnUrl: string;
  localPath: string;
}
