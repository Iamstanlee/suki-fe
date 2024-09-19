import React from 'react';
import cn from 'classnames';
import Layout from '@/components/Layout';
import { workSans } from '@/styles/font';
import '@/styles/global.css';


export const metadata = {
  metadataBase: new URL('https://www.getsuki.xyz'),
  title: 'Suki AI - Your knowledge base, Back in one scroll.',
  description: 'You don’t have to read everything, just the important bits, Get the latest insights from your goto sources in one place, Curated and summarized for you with AI.',
  openGraph: {
    title: 'Suki AI - Your knowledge base, Back in one scroll.',
    description: 'You don’t have to read everything, just the important bits, Get the latest insights from your goto sources in one place, Curated and summarized for you with AI.',
    images: '/opengraph-image.png',
  },
  twitter: {
    title: 'Suki AI - Your knowledge base, Back in one scroll.',
    description: 'You don’t have to read everything, just the important bits, Get the latest insights from your goto sources in one place, Curated and summarized for you with AI.',
    images: '/twitter-image.png',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
    <body className={cn(workSans.variable)}>
    <main className="overflow-x-hidden">
      <Layout>{children}</Layout>
    </main>
    </body>
    </html>
  );
}
