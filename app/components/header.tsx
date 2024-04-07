import { AppConfig } from '@/app.config';
import MobileNav from '@/app/components/mobile-nav';
import Search from '@/app/components/search';
import { Button } from '@/components/ui/button';
import { PocketKnife } from 'lucide-react';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Header() {
  return (
    <header className="border-b">
      <div className="container h-16 flex items-center gap-4">
        <div className="lg:hidden">
          <Suspense>
            <MobileNav />
          </Suspense>
        </div>
        <Button asChild variant="ghost" className="font-semibold text-lg gap-2">
          <Link href="/">
            <PocketKnife size={18} />
            {AppConfig.title}
          </Link>
        </Button>
        <span className="flex-1" />
        <Search />
      </div>
    </header>
  );
}
