import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

type LayoutProps = {
  background?: boolean;
  back?: boolean;
  title?: string;
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
