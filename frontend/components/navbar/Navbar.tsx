import {
  MailIcon,
  ClockIcon,
  LocationMarkerIcon,
  PhoneIcon,
} from '@heroicons/react/solid';
import Image from 'next/image';

import logoImage from '../../public/images/logo.png';

function Banner() {
  return (
    <div className="hidden lg:flex justify-between text-gray-500 text-xs font-light border-b px-4 [&>div>div]:p-2">
      <div className="flex ">
        <div>
          <a
            className="inline-flex hover:text-gray-600 transition-colors"
            href="tel:+39092423000"
          >
            <PhoneIcon className="h-4 w-4 mr-1" />
            092 42300
          </a>
        </div>
        <div>
          <a
            target="_blank"
            rel="noreferrer"
            className="inline-flex hover:text-gray-600 transition-colors"
            href="https://www.google.com/maps/place/Mirrione+Francesco+Legnami/@37.9686307,12.9155038,17z/data=!4m12!1m6!3m5!1s0x1319873c8c2b1381:0x182561305c44eb6b!2sMirrione+Francesco+Legnami!8m2!3d37.9686307!4d12.9155038!3m4!1s0x1319873c8c2b1381:0x182561305c44eb6b!8m2!3d37.9686307!4d12.9155038"
          >
            <LocationMarkerIcon className="h-4 w-4 mr-1" />
            SS113, 335/700, 91013 Calatafimi TP
          </a>
        </div>
        <div className="md:hidden lg:inline-flex">
          <ClockIcon className="h-4 w-4 mr-1" />
          Lunedì - Venedì 08.30 – 18.00 / Sabato 08.30 - 13.30
        </div>
      </div>
      <div>
        <div>
          <a
            className="inline-flex hover:text-gray-600 transition-colors"
            href="mailto:info@mirrionefrancesco.it"
          >
            <MailIcon className="h-4 w-4 mr-1" />
            info@mirrionefrancesco.it
          </a>
        </div>
      </div>
    </div>
  );
}

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
export function Navbar({ className }: NavbarProps) {
  return (
    <header className={className}>
      <Banner />
      <div className="block md:hidden">Placeholder mobile</div>
      <nav className="hidden md:flex p-4 justify-evenly text-xs">
        <ul className="flex flex-col lg:flex-row items-center justify-evenly divide-y lg:divide-y-0 lg:divide-x uppercase">
          <li className="h-20 w-40 lg:h-20 lg:w-60 mx-4 relative order--1 lg:order-2">
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
              className={`order-${index < 4 ? 1 : 2} px-4 py-4 ${
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
