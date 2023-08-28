import React from 'react';
import Header from './Header';
import { Inter } from 'next/font/google';

type Props = {
  children: any;
};

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });

const Layout = ({ children }: Props) => {
  return (
    <div
      className={`${inter.variable} h-screen flex flex-col overflow-x-hidden bg-back-color overflow-y-scroll font-sans`}
    >
      <div className='bg-white'>
        <Header />
      </div>

      {children}
    </div>
  );
};

export default Layout;
