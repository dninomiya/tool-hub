import { Tag } from '@/types/tag';

export const photos: {
  imageURL: string;
  href: string;
  title: string;
  tags: Tag[];
}[] = [
  {
    imageURL:
      'https://pbs.twimg.com/profile_images/1759180513980698624/gc3G9skp_400x400.jpg',
    href: 'https://pixabay.com/ja/',
    title: 'Pixabay',
    tags: [{ id: 'xxxx', label: 'ライセンス表記不要' }],
  },
  {
    imageURL: '/images/unsplash.png',
    href: 'https://unsplash.com/ja',
    title: 'Unsplash',
    tags: [{ id: 'xxx', label: 'ライセンス表記不要' }],
  },
  // {
  //   imageURL:
  //     '',
  //   href: '',
  //   title: '',
  //   tags: [],
  // },
];
