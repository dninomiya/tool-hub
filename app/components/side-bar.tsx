'use client';

import Filter from '@/app/components/filter';
import { Button } from '@/components/ui/button';
import { useTagParams } from '@/hooks/tag-params';
import { getTagLabel, mainTags } from '@/lib/tag';
import Link from 'next/link';

export default function SideBar() {
  const { addTagToSearchParmas } = useTagParams();

  return (
    <div className="hidden lg:block w-64 border-r space-y-6 p-4">
      <div className="flex flex-col">
        {mainTags.map((tagId) => (
          <Button variant="ghost" className="justify-start" key={tagId} asChild>
            <Link href={`/?tags=${addTagToSearchParmas(tagId)}`}>
              {getTagLabel(tagId)}
            </Link>
          </Button>
        ))}
      </div>

      <Filter />
    </div>
  );
}
