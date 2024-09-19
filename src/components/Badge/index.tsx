import React from 'react';
import { twMerge } from 'tailwind-merge';

type BadgeProps = {
  bgColor?: 'lemon' | 'purple' | 'light-purple';
  color?: 'white' | 'black';
  className?: string;
  content: string;
};

const Badge = ({
  className,
  bgColor = 'lemon',
  color = 'black',
  content,
}: BadgeProps) => {
  return (
    <div
      className={twMerge(
        'title text-[33px] leading-[45.24px] md:text-[14px] md:leading-[19px] py-[8px] w-fit text-center',
        className,
        bgColor === 'lemon'
          ? 'bg-primary-7'
          : bgColor === 'purple'
            ? 'bg-primary-6'
            : 'bg-primary-8',
        color === 'white' ? 'text-white' : 'text-black',
      )}
    >
      {content}
    </div>
  );
};

export default Badge;
