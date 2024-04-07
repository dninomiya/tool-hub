import { Item } from '@/types/item';

export const allItems: Item[] = [
  {
    id: 'irasutoya',
    href: 'https://www.irasutoya.com',
    title: 'いらすや',
    tags: ['no-license-required', 'illust', 'free'],
  },
  {
    id: 'pixabay',
    href: 'https://pixabay.com',
    title: 'Pixabay',
    tags: ['no-license-required', 'photo', 'illust', 'video', 'free', 'audio'],
  },
  {
    id: 'unsplash',
    href: 'https://unsplash.com/ja',
    title: 'Unsplash',
    tags: ['no-license-required', 'free', 'photo', 'public-domain'],
  },
  {
    id: 'vectorshelf',
    href: 'https://vectorshelf.com',
    title: 'ベクターシェルフ',
    tags: ['free', 'illust'],
  },
  {
    id: 'lucide',
    href: 'https://lucide.dev',
    title: 'Lucide',
    tags: ['free', 'icon'],
  },
] as const;
