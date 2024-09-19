import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/templates/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '4xl': { max: '1719px' },
      // => @media (max-width: 1719px) { ... }
      '2xl': { max: '1619px' },
      // => @media (max-width: 1419px) { ... }
      xl: { max: '1259px' },
      // => @media (max-width: 1259px) { ... }
      xls: { max: '1179px' },
      // => @media (max-width: 1179px) { ... }
      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }
      lgs: { max: '992px' },
      md: { max: '768px' },
      // => @media (max-width: 767px) { ... }
      sm: { max: '480px' },
      // => @media (max-width: 480px) { ... }
    },
    extend: {
      colors: {
        primary: {
          1: '#536DFE', // primary text color
          2: '#C7C4EF', // primary background color
          3: '#49109B', // primary dart text color
          5: '#B9AAFF', // card border color
          6: '#BE74E0', //badge purple border
          7: '#E8FBAA', //badge lemon border
          8: '#F1D1FC', //badge light-purple border
        },

        secondary: {
          1: '#000000', // secondary bg color
        },
        white: '#FFFFFF',
        transparent: 'transparent',
      },
    },
    zIndex: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
    },
    spacing: {
      0.25: '0.0625rem',
      0.75: '0.1875rem',
      4.5: '1.125rem',
      5.5: '1.375rem',
      6.5: '1.75rem',
      7.5: '1.875rem',
      8.5: '2.125rem',
      9.5: '2.375rem',
      13: '3.25rem',
      15: '3.75rem',
      17: '4.25rem',
      18: '4.5rem',
      19: '4.75rem',
      21: '5.25rem',
      22: '5.5rem',
      26: '6.5rem',
      30: '7.5rem',
      34: '8.5rem',
      38: '9.5rem',
      42: '10.5rem',
      58: '14.5rem',
    },
    transitionDuration: {
      DEFAULT: '200ms',
    },
    transitionTimingFunction: {
      DEFAULT: 'linear',
    },
    keyframes: {
      loaderDots: {
        '0%': { opacity: '1' },
        '50%,100%': { opacity: '0.15' },
      },
    },
    opacity: {
      85: '.85',
      95: '.95',
    },
    borderRadius: {
      1: '11px',
      2: '15px',
      3: '26px',
      4: '31px',
      full: '33px',
      xl: '53px',
      '2xl': '60px',
    },
    fontSize: {
      0: ['0px', '0px'],
      sm: ['12px', '17px'],
      baseSm: ['15px', '22px'],
      base: ['16px', '20.83px'],
      baseLg: ['17px', '22.13px'],
      lg: [
        '19px',
        {
          lineHeight: '29px',
          fontWeight: '400',
        },
      ],
      xl7: [
        '88px',
        {
          lineHeight: '87px',
          fontWeight: '400',
        },
      ],
      h1: [
        '60px',
        {
          lineHeight: '63px',
          fontWeight: '400',
        },
      ],
      h2: [
        '47px',
        {
          lineHeight: '42px',
          fontWeight: '400',
        },
      ],
      h3: [
        '45px',
        {
          lineHeight: '54px',
          fontWeight: '400',
        },
      ],
      h4: [
        '30px',
        {
          lineHeight: '32px',
          fontWeight: '400',
        },
      ],
      h5: [
        '20px',
        {
          lineHeight: '24px',
          fontWeight: '400',
        },
      ],
      // h6: [
      //   '1.125rem',
      //   {
      //     lineHeight: '1.5rem',
      //     fontWeight: '800',
      //   },
      // ],
    },
    backgroundImage: {
      gradient1: 'url(/images/background/1.png)',
      gradient2: 'url(/images/background/2.png)',
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
  },
};
export default config;
