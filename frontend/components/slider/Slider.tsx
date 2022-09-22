import React, { PropsWithChildren } from 'react';

interface CardProps {
  className?: string;
}
function Card({ className, children }: PropsWithChildren<CardProps>) {
  return (
    <div
      className={`${className} flex snap-center shrink-0 snap-always grow aspect-square w-full p-[2%] md:p-4 max-w-[80%] md:w-auto`}
    >
      <div className="flex w-full items-center justify-center">{children}</div>
    </div>
  );
}

function Slider({ children }: React.PropsWithChildren) {
  return (
    <div className="flex w-full flex-nowrap md:grid md:grid-cols-3 md:grid-flow-col overflow-x-scroll snap-x snap-mandatory">
      {/* // <div className="flex w-full flex-nowrap md:grid md:grid-cols-3  overflow-x-scroll snap-x snap-mandatory"> */}
      {React.Children.map(children, (child) => {
        return (
          <Card className="first:ml-[10%] last:mr-[10%] first:md:ml-0 last:md:mr-0 md:min-w-full">
            {child}
          </Card>
        );
      })}
    </div>
  );
}

export default React.memo(Slider);
