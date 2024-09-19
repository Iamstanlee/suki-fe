'use client';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Link from 'next/link';
import Icon from '@/components/Icon';
import { usePathname } from 'next/navigation';
import Logo from '@/components/Logo';

const navItems = [
  { text: 'Privacy Policy', link: '/privacy-policy' },
];

const Header = () => {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <header
      className={twMerge(
        'container bg-secondary-1 md:pb-[40px]',
        showNav ? 'block w-full h-fit' : 'h-auto md:h-[143px]',
      )}
    >
      <div className="flex items-center justify-between w-full pt-[25px] md:pt-[48px] pb-[55px]">
        <nav className="flex gap-[26px]">
          <Link href="/">
            <Logo />
          </Link>
          <ul className="flex md:hidden gap-[29px] items-end">
            {navItems.map(item => (
              <li key={item.text} className="md:w-full text-center transition">
                <Link
                  href={item.link}
                  className={`${pathname == item.link ? 'text-primary-1' : 'text-white'} text-base hover:text-primary-1`}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-[13px]">
          <div className="hidden md:block">
            <button
              className="btn-transparent-dark btn-square btn-medium relative md:w-6 md:h-6"
              onClick={() => setShowNav(!showNav)}
            >
              {!showNav ? (
                <Icon name="menu" size={14} />
              ) : (
                <Icon name="close" size={15} />
              )}
            </button>
          </div>
        </div>
      </div>
      <ul
        className={`flex gap-[29px] md:gap-[43px] items-end ${
          showNav
            ? 'flex flex-col py-6 px-4 m-[10px] rounded-lg'
            : 'hidden h-auto'
        }`}
        onClick={() => setShowNav(false)}
      >
        {navItems.map(item => (
          <li
            key={item.text}
            className="md:w-full text-center md:text-left transition"
          >
            <Link
              href={item.link}
              className={`${pathname == item.link ? 'text-primary-1' : 'text-white'} text-base hover:text-primary-1`}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
