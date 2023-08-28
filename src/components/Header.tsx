import Image from 'next/image';
import React from 'react';
import { FiUploadCloud } from 'react-icons/fi';
type Props = {};

const Header = (props: Props) => {
  return (
    <div className='flex justify-between max-w-[1500px] items-center mx-auto w-full px-2 py-3'>
      <h1 className='text-black font-bold text-[7vw] sm:text-lg lg:text-2xl'>
        VAULT
      </h1>

      {/* the right bar */}
      <div className='flex space-x-3 items-center'>
        {/* the mail */}
        <div className='border border-[#dbdfe5] hidden sm:inline-flex cursor-pointer px-2 py-2 rounded-lg'>
          <Image
            src='/home/Mail.svg'
            width={300}
            height={300}
            alt='mail'
            className='w-5 h-5'
          />
        </div>
        {/* the cloud */}
        <div className='border border-[#dbdfe5] hidden sm:inline-flex cursor-pointer px-2 py-2 rounded-lg'>
          <FiUploadCloud className='w-5 h-5' />
        </div>

        {/* the profile pic */}
        <Image
          src='/home/Profile.jpg'
          width={100}
          height={100}
          alt='profile pic'
          className='h-8 w-8 rounded-full object-cover cursor-pointer'
        />
      </div>
    </div>
  );
};

export default Header;
