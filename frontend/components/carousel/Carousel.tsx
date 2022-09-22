import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const DEFAULT_INTERVAL = 10000;

interface CarouselItem {
  url: string;
  title?: string;
  description?: string;
}

interface CarouselProps {
  className?: string;
  items: CarouselItem[];
  interval?: number;
}
export function Carousel({
  items,
  className,
  interval = DEFAULT_INTERVAL,
}: CarouselProps) {
  const currentItem = useRef(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const timer = useRef(0);
  const currentAnimation = useRef<Animation>();
  const [src, setSrc] = useState(items[0].url);

  const slide = useCallback(
    (direction: number = 1) => {
      currentItem.current =
        (currentItem.current + direction + items.length) % items.length;
      window.clearTimeout(timer.current);
      currentAnimation.current?.cancel();
      currentAnimation.current = imageContainerRef.current?.animate(
        [{ opacity: 1 }, { opacity: 0 }],
        { duration: 1000, fill: 'forwards' }
      );

      if (currentAnimation.current) {
        currentAnimation.current.finished
          .then(() => {
            setSrc(items[currentItem.current].url);

            currentAnimation.current = imageContainerRef.current?.animate(
              [{ opacity: 0 }, { opacity: 1 }],
              { duration: 1000, fill: 'forwards' }
            );

            currentAnimation.current?.finished
              .then(() => {
                timer.current = window.setTimeout(() => {
                  slide();
                }, interval);
              })
              .catch(() => {});
          })
          .catch(() => {});
      }
    },
    [items, interval]
  );

  useEffect(() => {
    timer.current = window.setTimeout(() => {
      slide();
    }, interval);

    return () => {
      window.clearTimeout(timer.current);
      currentAnimation.current?.cancel();
    };
  }, [items, slide, interval]);

  return (
    <div className={`${className} relative`}>
      <div
        ref={imageContainerRef}
        className="relative w-full h-full overflow-hidden aspect-[2/1] md:aspect-[4/2] lg:aspect-[4/1]"
      >
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          alt={items[currentItem.current].title}
          priority
        />
        <div className="absolute p-2 flex flex-col items-center justify-center bottom-0 left-0 right-0 bg-black/50 text-white">
          <h2 className="uppercase text-lg md:text-xl lg:text-2xl font-semibold">
            {items[currentItem.current].title}
          </h2>
          <p className="capitalize text-center text-sm md:text-lg lg:text-xl font-thin">
            {items[currentItem.current].description}
          </p>
        </div>
      </div>
      <button
        className="absolute hidden md:block top-1/2 -translate-y-1/2 left-6 p-4 rounded-full bg-black/50 hover:bg-black/75 text-white"
        role="button"
        aria-label="imagina precedente"
        onClick={() => slide(-1)}
      >
        <ChevronLeftIcon
          role="presentation"
          className="w-8 h-8 -translate-x-0.5"
        />
      </button>
      <button
        className="absolute hidden md:block top-1/2 -translate-y-1/2 right-6 p-4 rounded-full bg-black/50 hover:bg-block/75 text-white"
        role="button"
        aria-label="imagina seguente"
        onClick={() => slide()}
      >
        <ChevronRightIcon
          role="presentation"
          className="w-8 h-8 translate-x-0.5"
        />
      </button>
    </div>
  );
}
