import Image from 'next/image';
import { memo } from 'react';

import logoImage from '../../public/images/logo.png';

const LINKS = [
  {
    href: '/azienda',
    label: 'azienda',
  },
  {
    href: '/prodotti',
    label: 'i prodotti',
  },
  {
    href: '/case-in-legno',
    label: 'case in legno',
  },
  {
    href: '/grandi-strutture',
    label: 'grandi strutture',
  },
  {
    href: '/lidi-e-ristoranti',
    label: 'lidi e ristoranti',
  },
  {
    href: '/ecologia',
    label: 'ecologia',
  },
  {
    href: '/gallery',
    label: 'gallery',
  },
  {
    href: '/contatti',
    label: 'contatti',
  },
];

interface NavbarProps {
  className?: string;
}
function Navbar({ className }: NavbarProps) {
  return (
    <header className={className}>
      {/* <Banner /> */}
      <div className="block md:hidden">Placeholder mobile</div>
      <nav className="hidden md:flex md:sticky top-0 bg-white justify-evenly text-xs">
        <ul className="flex flex-col lg:flex-row items-center justify-evenly divide-y lg:divide-y-0 lg:divide-x uppercase order-3">
          <li className="h-20 w-40 lg:h-20 lg:w-60 mx-3 relative -order-1 lg:order-2">
            <Image
              src={logoImage}
              alt="logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </li>
          {LINKS.map((link, index) => (
            <li
              key={link.href}
              className={`order-${index < 4 ? 1 : 3} p-2 ${
                index == 0 ? '!border-t-0' : ''
              } ${index == 0 || index == 4 ? '!border-l-0' : ''}`}
            >
              <a href={link.href} className="hover:scale-110">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default memo(Navbar);
