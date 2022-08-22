import { FC, PropsWithChildren } from 'react';
import { Banner } from '../banner';
import { Footer } from '../footer';
import { Navbar } from '../navbar';

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen lg:max-w-[1280px] mx-auto shadow-lg grid grid-cols-1 md:grid-cols-[auto_1fr] lg:grid-cols-1 grid-rows-[auto_1fr_auto] md:grid-rows-[auto_1fr_auto] lg:grid-rows-[auto_auto_1fr_auto]">
      <Banner className="hidden lg:block" />
      <Navbar className="shadow-md md:sticky md:top-0 z-10 row-span-1 md:row-span-2 lg:row-span-1 lg:shadow-none" />
      <Banner className="hidden md:block lg:hidden" />
      <main className="">{children}</main>
      <Footer className="md:col-start-2 lg:col-start-1" />
    </div>
  );
}
