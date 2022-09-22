import { XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import { memo, useReducer } from 'react';

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

const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

interface NavbarProps {
  className?: string;
}
function Navbar({ className }: NavbarProps) {
  const [isOpen, toggleIsOpen] = useReducer((state) => !state, false);

  return (
    <>
      <header className={`bg-white ${className}`}>
        {/* <Banner /> */}
        <div className="md:hidden p-4 flex flex-nowrap sticky">
          <div className="h-10 w-full relative">
            <Image
              src={logoImage}
              alt="logo"
              layout="fill"
              objectFit="contain"
              priority
              className="object-position-left"
            />
          </div>
          <button onClick={toggleIsOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
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
      <div
        className="fixed inset-0 transition-all bg-gray-300/50 backdrop-blur-md z-50"
        style={{
          opacity: isOpen ? '100%' : 0,
          pointerEvents: isOpen ? 'auto' : 'none',
        }}
        onClick={toggleIsOpen}
      >
        <div
          onClick={stopPropagation}
          className="fixed inset-0 left-1/4 transition-transform bg-gray-700 drop-shadow-md p-12"
          style={{
            transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          }}
        >
          <button onClick={toggleIsOpen} className="absolute top-4 right-4">
            <XIcon className="w-8 h-8 text-white" />
          </button>
          <ul className="flex flex-col gap-8">
            {LINKS.map((link, index) => (
              <li key={link.href}>
                <a className="text-white uppercase font-bold" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default memo(Navbar);
