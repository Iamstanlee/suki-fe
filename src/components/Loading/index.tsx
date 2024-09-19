import React from 'react';
import { twMerge } from 'tailwind-merge';

type LoadingSpinnerProps = {
  className?: string;
};

const LoadingSpinner = ({ className }: LoadingSpinnerProps) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className={twMerge(
          'animate-spin rounded-full h-24 w-24 border-b-2 border-gray-900',
          className,
        )}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
