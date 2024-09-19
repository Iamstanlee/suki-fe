import Link from 'next/link';
import Image from '@/components/Image';

type LogoProps = {
  className?: string;
};

const Logo = ({ className }: LogoProps) => {
  return (
    <Link className={`flex ${className}`} href="/">
      <Image
        src="/images/logo.png"
        width={24}
        height={24}
        alt="Logo"
        priority
      />
    </Link>
  );
};

export default Logo;
