import { Button } from '@/components/ui/button';
import { TAGS } from '@/lib/tag';
import Link from 'next/link';

export default function SideBar() {
  return (
    <div className="hidden lg:block w-64 border-r">
      <div className="flex flex-col p-4">
        {TAGS.map((tag) => (
          <Button
            variant="ghost"
            className="justify-start"
            key={tag.id}
            asChild
          >
            <Link href={`/${tag.id}`}>{tag.label}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
