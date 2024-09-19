import React from 'react';

import Marquee from 'react-fast-marquee';

export default function MarqueeText({ text, lastChar, className }: {
  text: string,
  className?: string,
  lastChar: string
}) {
  return (
    <Marquee
      autoFill
      className={`!py-[30px] md:!py-[10px] bg-primary-1 !rotate-2 ${className}`}>
      <h2 className="text-[40px] md:text-[14px]  font-[900] uppercase text-white marquee">
        {lastChar + ' ' + text}
      </h2>
    </Marquee>
  );
}
