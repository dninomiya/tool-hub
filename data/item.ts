import { Item } from '@/types/item';

export const allItems: Item[] = [
  {
    imageURL:
      'https://pbs.twimg.com/profile_images/1759180513980698624/gc3G9skp_400x400.jpg',
    href: 'https://www.irasutoya.com',
    title: 'いらすや',
    tags: ['no-license-required', 'illust'],
  },
  {
    imageURL:
      'https://pbs.twimg.com/profile_images/1759180513980698624/gc3G9skp_400x400.jpg',
    href: 'https://www.irasutoya.com',
    title: 'Pixabay',
    tags: ['no-license-required', 'photo', 'illust', 'video'],
  },
  {
    imageURL:
      'https://pbs.twimg.com/profile_images/1759180513980698624/gc3G9skp_400x400.jpg',
    href: 'https://www.irasutoya.com',
    title: 'Unsplash',
    tags: ['no-license-required', 'free', 'photo', 'public-domain'],
  },
] as const;
