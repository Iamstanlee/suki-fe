'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const footerNav = [
  {
    title: 'Resources',
    links: [
      { url: 'https://linktr.ee/suki-ai', title: 'Community' },
      { url: '/privacy-policy', title: 'Privacy Policy' },
      { url: '/terms', title: 'Terms Of Service' },
    ],
  },
  {
    title: 'Suki AI',
    links: [
      { url: 'mailto:support@getsuki.xyz', title: 'Support' },
    ],
  },
];


const Footer = () => {
  const pathname = usePathname();


  return <footer className={`container ${pathname != '/member' && 'border-t border-white !pt-[65px]'}`}>
    <div className="flex md:flex-col justify-between gap-[57px] md:gap-[41px] md:pt-[45px] pb-[70px]">
      <h3 className="text-h3 md:text-h4 max-w-[550px] lg:max-w-[445px]">
        Your knowledge base, Back in one scroll.
      </h3>
      <div className="grid grid-cols-2 gap-y-[32px] gap-x-[105px] max-w-[320px] sm:max-w-[255px]">
        {footerNav.map(nav => (
          <div
            key={nav.title}
            className="space-y-[10px] w-fit text-white text-baseLg sm:text-sm sm:leading-[15.62px]"
          >
            <p className="font-[700]">{nav.title}</p>
            <ul className="space-y-[10px]">
              {nav.links.map(link => (
                <li key={link.title}>
                  <Link href={link.url} className=" hover:text-primary-1">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </footer>;
};

export default Footer;
