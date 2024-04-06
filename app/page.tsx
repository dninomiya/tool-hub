'use client';

import ItemCard from '@/components/item-card';
import { allItems } from '@/data/item';
import { TagId } from '@/data/tag';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();
  const tags = (searchParams.get('tags') as string)?.split(',');

  const currentItems = allItems.filter((item) => {
    if (!tags) {
      return true;
    }

    return tags.every((tag) => item.tags.includes(tag as TagId));
  });

  if (currentItems.length === 0) {
    return (
      <p className="text-sm text-muted-foreground my-10 text-center">
        このページは存在しません
      </p>
    );
  }

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
      {currentItems.map((item) => (
        <ItemCard
          key={item.title}
          imageURL={item.imageURL}
          href={item.href}
          title={item.title}
          tags={item.tags}
        />
      ))}
    </div>
  );
}
