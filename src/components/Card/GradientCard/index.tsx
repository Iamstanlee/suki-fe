import React from 'react';
import Icon from '@/components/Icon';
import Link from 'next/link';


export default function GradientCard() {
  return (
    <div
      className="bg-gradient1 bg-cover rounded-2 border-4 border-white py-[37px] px-[52px] md:py-[43px] md:px-[29px]">
      <div className="text-baseSm md:text-sm text-white space-y-[22px] md:space-y-[15px]">
        <Icon name="people" size={46} className="md:w-[35px]" />
        <p className="text-h2 md:text-h5 uppercase">
          Unlock the <br /> Community
        </p>
        <p className="max-w-[754px]">
          <span className="font-[700]">FeastPass</span> understands that for many small to medium-sized businesses,
          building their business while simultaneously engaging with their
          community can be difficult. Not anymore... We are here to make it
          easier by taking it off your table. Get a taste of what’s possible
          with <span className="font-[700]">FeastPass</span> right here.
        </p>

        <div
          className="flex md:flex-col md:items-center justify-between md:justify-center md:text-center gap-[9px] border border-white bg-primary-3 rounded-xl md:rounded-2 text-white py-[15px] md:py-[12px] px-[23px] md:px-[20px]">
          <h3 className="title text-[29px] md:text-baseSm">
            Join the beta. Unlock your Community
          </h3>
          <Link href="/join-beta">
            <p className="font-[700] flex items-center cursor-pointer">TRY THE BETA <Icon name="open-external" /></p>
          </Link>
        </div>
      </div>
    </div>
  );
}
