'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTagParams } from '@/hooks/tag-params';
import { getTagLabel, mainTags } from '@/lib/tag';
import { Menu } from 'lucide-react';
import Link from 'next/link';

export default function MobileNav() {
  const { addTagToSearchParmas } = useTagParams();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col">
          {mainTags.map((tagId) => (
            <Button
              variant="ghost"
              className="justify-start"
              key={tagId}
              asChild
            >
              <Link href={`/?tags=${addTagToSearchParmas(tagId)}`}>
                {getTagLabel(tagId)}
              </Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
