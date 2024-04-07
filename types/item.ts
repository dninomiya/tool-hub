import { TagId } from '@/data/tag';

export type Item = {
  id: string;
  href: string;
  title: string;
  tags: TagId[];
};
