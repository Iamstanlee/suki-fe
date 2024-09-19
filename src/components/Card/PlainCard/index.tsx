import React, { useEffect, useState } from 'react';
import Icon from '@/components/Icon';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import useScreenSize from '@/hooks/useScreenSize';

type PlainCardProps = {
  title: string;
  description: string;
  features: string[];
  featureIconName?: string;
  cta?: string;
  type?: 'square' | 'rectangle';
  featureTitle?: string;
  communityTag?: boolean;
  className?: string;
  ctaUrl?: string;
};

export default function PlainCard({
                                    title,
                                    description,
                                    features,
                                    cta,
                                    featureTitle = 'FEATURES',
                                    featureIconName,
                                    type = 'square',
                                    className,
                                    ctaUrl,
                                  }: PlainCardProps) {

  const { width } = useScreenSize();
  const [longListCollapsable, setLongListCollapsable] = useState(false);
  const [showViewMore, setShowViewMore] = useState(true);


  useEffect(() => {
    setLongListCollapsable(width <= 768 && features.length > 3);
  }, [width]);

  return (
    <div
      className={twMerge(
        'bg-primary-2 rounded-2 md:rounded-4 py-[50px] px-[54px] lg:py-[40px] lg:px-[35px] md:py-[34px] md:px-[29px]',
        className,
      )}
    >
      <div className="text-baseSm md:text-sm text-white space-y-[22px]">
        <p className="text-h2 md:text-h5 text-primary-1 uppercase">{title}</p>
        <p>{description}</p>
        <div className="flex items-center gap-[4px]">
          <Icon name="star" size={17} />
          <span>{featureTitle}</span>
        </div>
        {type == 'square' && (
          <div className="space-y-[22px]">
            <div className="flex flex-wrap gap-x-[19px] gap-y-[13px]">
              {features.map(feature => (
                <p
                  key={feature}
                  className="w-fit md:w-full md:justify-center py-[15px] px-[22px] border border-primary-5 rounded-3 flex items-center gap-[8px]"
                >
                  {featureIconName && (
                    <Icon
                      name={featureIconName}
                      // className="md:hidden"
                      size={17}
                      type="png"
                    />
                  )}
                  <span>{feature}</span>
                </p>
              ))}
            </div>

            {cta && (
              <>
                <div className="py-4 w-full h-[1px] border-[0.7px] border-dashed border-primary-1"></div>
                <div
                  className="cursor-pointer w-fit md:w-full text-center py-[15px] px-[26px] md:px-[15px] border border-primary-5 rounded-1 text-primary-1 font-[900]">
                  <Link href="/vendor">{cta}</Link>
                </div>
              </>
            )}
          </div>
        )}
        {type == 'rectangle' && (
          <div className="flex gap-x-[19px] gap-y-[13px] justify-between md:flex-col">
            <div className="flex gap-5.5 flex-wrap  md:flex-row">
              {(longListCollapsable && showViewMore
                  ? features.slice(0, 3)
                  : longListCollapsable
                    ? features.slice(0, features.length - 1)
                    : features
              ).map(feature => (
                <p
                  key={feature}
                  className="w-fit md:w-full md:justify-center py-[15px] px-[22px] border border-primary-5 rounded-3 flex items-center gap-[8px]"
                >
                  {featureIconName && (
                    <Icon
                      name={featureIconName}
                      // className="md:hidden"
                      size={17}
                      type="png"
                    />
                  )}
                  <span>{feature}</span>
                </p>
              ))}
              {longListCollapsable && (
                <p
                  onClick={() => setShowViewMore(!showViewMore)}
                  className="w-fit md:w-full md:justify-center py-[15px] px-[22px] border border-primary-5 rounded-3 flex items-center gap-[8px]"
                >
                  <span>{showViewMore ? 'View more' : 'View less'}</span>
                  <Icon
                    name="arrow-down"
                    className={`transform ${showViewMore ? 'rotate-0' : 'rotate-180'}`}
                  />
                </p>
              )}
            </div>
            {cta && (
              <div
                className="cursor-pointer w-fit min-w-fit self-start md:w-full text-center py-[15px] px-[26px] md:px-[15px] border border-primary-5 rounded-1 text-primary-1 font-[900]">
                <Link href={ctaUrl ?? '/vendor'}>{cta}</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
