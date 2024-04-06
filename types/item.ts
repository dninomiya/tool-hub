import { TagId } from '@/data/tag';

export type Item = {
  imageURL: string;
  href: string;
  title: string;
  tags: TagId[];
};
