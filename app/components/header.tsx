import { AppConfig } from '@/app.config';
import GuideDialog from '@/app/components/guide-dialog';
import MobileNav from '@/app/components/mobile-nav';
import { Button } from '@/components/ui/button';
import { Pencil, PocketKnife } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Header() {
  return (
    <header className="border-b">
      <div className="px-4 h-16 flex items-center gap-2">
        <div className="lg:hidden">
          <Suspense>
            <MobileNav />
          </Suspense>
        </div>
        <Button asChild variant="ghost" className="font-semibold text-lg gap-2">
          <Link href="/" replace>
            <PocketKnife size={18} />
            {AppConfig.title}
          </Link>
        </Button>
        <span className="flex-1" />
        <GuideDialog />
        <Button asChild size="icon" variant="outline">
          <a href={AppConfig.githubURL} target="_blank">
            <span className="sr-only">GitHub で編集</span>
            <Pencil className="text-muted-foreground" size={20} />
          </a>
        </Button>
      </div>
    </header>
  );
}
