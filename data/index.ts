import { illusts } from './illust';
import { photos } from './photo';
import { icons } from './icon';

export const allItems = {
  illusts,
  photos,
  icons,
} as const;

export type ItemType = keyof typeof allItems;
