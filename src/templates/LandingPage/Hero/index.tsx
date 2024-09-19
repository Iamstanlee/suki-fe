import Link from 'next/link';

import MarqueeText from '@/components/Marquee';

export default function Hero() {
  return (
    <div className="pb-[100px] md:pb-[50px]">
      <div className="relative pb-13 flex flex-col items-center justify-center md:justify-start mx-auto">
        <div className="py-[55px] px-[14px] space-y-[26px] md:space-y-[14px] text-center">
          <h1 className="title">
            Your knowledge base,<br/> Back in one scroll.
          </h1>
          <div className="text-lg md:text-sm max-w-[797px] mx-auto md:px-[16.5px]">
            Suki AI is the mobile app that brings together your newsletters, research papers, podcasts, and more, in one place.
            With Suki AI, You don’t have to read everything just the important bits, Get the latest insights from your goto sources, Curated and summarized for you with AI.
          </div>
          <Link href="https://apps.apple.com/app/suki-ai/id6695746322" className="block">
            <button className="btn">DOWNLOAD APP</button>
          </Link>
        </div>
      </div>
      <MarqueeText
        className="!mt-[-55px]"
        text="· Your knowledge base, Back in one scroll · Podcasts · Newsletter"
        lastChar="s" />
    </div>
  );
};