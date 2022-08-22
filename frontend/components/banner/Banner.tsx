import {
  ClockIcon,
  LocationMarkerIcon,
  MailIcon,
  PhoneIcon,
} from '@heroicons/react/solid';
import React from 'react';

interface BannerProps {
  className?: string;
}
function Banner({ className }: BannerProps) {
  return (
    <div className={className}>
      <div className="flex flex-nowrap justify-between text-gray-500 text-xs font-light border-b px-4 [&>div>div]:p-2">
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
    </div>
  );
}

export default React.memo(Banner);
