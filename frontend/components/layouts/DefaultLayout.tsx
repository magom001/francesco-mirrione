import { FC, PropsWithChildren } from 'react';
import { Footer } from '../footer';
import { Navbar } from '../navbar';

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen lg:max-w-[1280px] mx-auto shadow-lg grid grid-cols-1 md:grid-cols-[auto_1fr] lg:grid-cols-1 grid-rows-[auto_1fr_auto] md:grid-rows-[1fr_auto] lg:grid-rows-[auto_1fr_auto]">
      <Navbar className="shadow-md row-span-1 md:row-span-2 lg:row-span-1 lg:shadow-none" />
      <main className="">{children}</main>
      <Footer className="md:col-start-2 lg:col-start-1" />
    </div>
  );
}
