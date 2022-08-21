import { FC, PropsWithChildren } from 'react';
import { Footer } from '../footer';
import { Navbar } from '../navbar';

export function DefaultLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col lg:max-w-[1280px] mx-auto shadow-lg">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
