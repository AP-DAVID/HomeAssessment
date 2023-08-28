import Dropdown from '@/components/Dropdown';
import Search from '@/components/Search';
import React from 'react';

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col items-center space-y-3 lg:flex-row my-7 lg:space-y-0 lg:space-x-3 justify-between'>
        <Search />
        <Dropdown text='Studio' />
        <Dropdown text='Sector' />
        <Dropdown text='Image Type' />
      </div>
      {/* button */}
      
      <div className='flex flex-row justify-center lg:justify-start'>
        <h1 className='text-[#fcfcfc] text-[5vw] sm:text-base lg:text-base font-medium cursor-pointer bg-generate lg:w-[222px] lg:h-[55px] rounded-md flex flex-col justify-center items-center  px-10 py-2'>
        Generate
      </h1>
      </div>
      
    </div>
  );
};

export default Hero;
