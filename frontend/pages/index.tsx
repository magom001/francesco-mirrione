import type { NextPage } from 'next';
import { Carousel } from '../components/carousel';

import flooringPic from '../public/images/flooring.jpeg';
import deckingPic from '../public/images/decks.jpeg';
import roofsPic from '../public/images/roofs.jpeg';

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Carousel
        items={[
          {
            url: flooringPic as unknown as string,
            title: 'pavimenti in legno',
            description: 'parquet - laminati - decking in legno',
          },
          {
            url: deckingPic as unknown as string,
            title: 'pavimentazioni per esterni',
            description:
              "rivestimenti per piscine - locali all'aperto - terrazze",
          },
          {
            url: roofsPic as unknown as string,
            title: 'pavimentazioni per esterni',
            description: 'verande - tettoie - pergole - grandi strutture',
          },
        ]}
        className="w-full"
      />
      <p className="bg-gray-300 p-4 text-center font-semibold text-xs md:text-sm">
        Francesco Mirrione Legnami è leader nel settore della
        commercializzazione di legnami e nella costruzione di grandi edifici e
        case in legno. La continua innovazione tecnologica e i nostri 70 anni di
        esperienza fanno di noi una delle aziende di riferimento in tutto il sud
        Italia. Affidabilità, precisione e velocità di esecuzione sono oggi tra
        le caratteristiche più apprezzate dai nostri clienti.
      </p>
      <div className="h-screen">Hey</div>
    </div>
  );
};

export default Home;
