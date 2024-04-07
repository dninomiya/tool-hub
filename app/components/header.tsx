import { AppConfig } from '@/app.config';
import MobileNav from '@/app/components/mobile-nav';
import Search from '@/app/components/search';
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
        <p className="font-bold text-lg">{AppConfig.title}</p>
        <Search />
      </div>
    </header>
  );
}
