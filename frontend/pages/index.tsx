import type { NextPage } from 'next';
import Image from 'next/image';
import { Carousel } from '../components/carousel';
import { Slider } from '../components/slider';

import flooringPic from '../public/images/flooring.jpeg';
import deckingPic from '../public/images/decks.jpeg';
import roofsPic from '../public/images/roofs.jpeg';
import treePic from '../public/images/frassino_fraxinus_excelsior.jpeg';
import caseInLegnoPic from '../public/images/case-in-legno.jpg';

import caseInLegno1 from '../public/images/case-in-legno-1.jpg';
import caseInLegno2 from '../public/images/case-in-legno-2.jpg';
import caseInLegno3 from '../public/images/case-in-legno-3.jpg';

import rennerImage from '../public/images/renner.jpeg';
import soltechImage from '../public/images/soltech.jpeg';
import rothoblaasImage from '../public/images/rothoblaas.jpeg';
import mmholzImage from '../public/images/mmholz.jpeg';

const partners = [
  { src: rennerImage, alt: 'Renner logo' },
  { src: soltechImage, alt: 'Soltech Logo' },
  { src: rothoblaasImage, alt: 'Rothoblaas Logo' },
  { src: mmholzImage, alt: 'M&M Holz Logo' },
] as const;

interface CardProps {
  title: string;
}
function Card({ title }: CardProps) {
  return (
    <div
      tabIndex={0}
      role="button"
      className="w-full h-full relative overflow-hidden group flex flex-col pt-[30%]"
    >
      <Image
        className="-z-50 group-hover:scale-125 brightness-100 md:brightness-50 group-hover:brightness-100 transition-all duration-200 ease-in-out"
        src={caseInLegnoPic}
        alt="tree"
        layout="fill"
        objectFit="cover"
      />
      <div className="flex flex-col md:opacity-50 md:group-hover:opacity-100 text-white justify-start items-center mb-2 md:translate-y-4 group-hover:translate-y-0 transition-all">
        <ul className="flex mb-4 w-full justify-center pr-[10%]">
          {[caseInLegno1, caseInLegno2, caseInLegno3].map((pic, index) => (
            <li
              key={index}
              className="relative rounded-full -mr-[10%] w-[25%] aspect-square overflow-hidden border-white border-2"
            >
              <Image
                src={pic}
                alt="case in legno"
                layout="fill"
                objectFit="cover"
              />
            </li>
          ))}
        </ul>
        <h4 className="text-3xl text-center md:text-xl lg:text-3xl font-bold uppercase drop-shadow-md">
          {title}
        </h4>
        <span className="leading-loose md:opacity-0 group-hover:opacity-100 transition-opacity">
          Vedere album
        </span>
      </div>
    </div>
  );
}

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
      <p className="bg-gray-300 p-4 text-center font-semibold text-xs md:text-sm drop-shadow-md">
        Francesco Mirrione Legnami è leader nel settore della
        commercializzazione di legnami e nella costruzione di grandi edifici e
        case in legno. La continua innovazione tecnologica e i nostri 70 anni di
        esperienza fanno di noi una delle aziende di riferimento in tutto il sud
        Italia. Affidabilità, precisione e velocità di esecuzione sono oggi tra
        le caratteristiche più apprezzate dai nostri clienti.
      </p>
      <Slider>
        <Card title="case in legno" />
        <Card title="grandi strutture" />
        <Card title="tetti, verande e tettoie" />
      </Slider>
      <div className="bg-gray-300 flex flex-col p-4 drop-shadow-md">
        <h2 className="uppercase text-4xl leading-10">
          ABBIAMO A CUORE L’AMBIENTE
        </h2>
        <div className="flex items-center">
          <p>
            Su questo principio di base, si è sviluppata la MIRRIONE FRANCESCO
            LEGNAMI proiettata sempre verso l’innovazione e la crescita, ma nel
            più puro ed assoluto rispetto della natura e dell’ambiente che ci
            circonda. Sono necessari decenni e diverse generazioni, affinché un
            albero divenga adulto e possa essere trasformato in un prezioso
            oggetto in legno a servizio dell’uomo, che per ulteriori decenni, ne
            apprezzerà la fattura, la funzionalità ed il pregio. Affinché tutto
            ciò sia pienamente realizzabile, occorre non solo conoscere il
            legno, ma anche amarlo, apprezzarlo e sopratutto proteggerlo. Per
            quanto detto MIRRIONE FRANCESCO LEGNAMI s.r.l., monitora
            costantemente la qualità del legno importato. Inoltre pone
            particolare attenzione anche alla provenienza, intesa nel senso più
            pieno della protezione ambientale e della rinnovabilità della
            materia prima.
          </p>
          <div className="hidden md:block relative ml-12 aspect-square w-60 h-60 rounded-full shrink-0 overflow-hidden shadow-md">
            <Image
              src={treePic}
              alt="frassino fraxinus excelsior"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div className="p-6 flex flex-nowrap justify-evenly w-full gap-2">
        {partners.map((partner) => (
          <div
            key={partner.alt}
            className="h-10 md:h-12 lg:h-20 flex-grow relative"
          >
            <Image
              src={partner.src}
              alt={partner.alt}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
