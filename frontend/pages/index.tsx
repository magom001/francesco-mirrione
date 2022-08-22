import type { NextPage } from 'next';
import Image from 'next/image';
import { Carousel } from '../components/carousel';

import flooringPic from '../public/images/flooring.jpeg';
import deckingPic from '../public/images/decks.jpeg';
import roofsPic from '../public/images/roofs.jpeg';
import treePic from '../public/images/frassino_fraxinus_excelsior.jpeg';

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
      <div>Something white</div>
      <div className="bg-gray-300 flex flex-col p-4 drop-shadow-md">
        <h2 className="uppercase text-4xl leading-loose">
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
      <div className="h-screen">Hey</div>
    </div>
  );
};

export default Home;
