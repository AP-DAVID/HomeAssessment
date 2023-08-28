import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import ImageContain from './ImageContain';
type Props = {};

const DashboardHome = (props: Props) => {
  return (
    <div className='w-full'>
      <div className='flex flex-col space-y-1 sm:flex-row sm:space-y-0 justify-between  items-center'>
        {/* /left div */}
        <div className='flex space-x-2 items-baseline'>
          <h1 className='text-[#1e293b] text-[5vw] sm:text-xl'>Home</h1>
          <h1 className='text-xs text-slate-500'>12 results</h1>
        </div>

        {/* sort by */}
        <div className='border bg-white cursor-pointer rounded-md space-x-2 py-1 px-2 flex justify-between'>
          <h1 className='text-[3vw] sm:text-xs text-slate-500'>Sort by</h1>
          <h1 className='text-[3vw] sm:text-xs text-black font-semibold'>Date Added</h1>
          <IoIosArrowDown className='text-slate-500' />
        </div>
      </div>

      {/* the image section */}
      <div className='mt-7'>
        {/* upper image */}
        <div className='flex space-x-4'>
          {/* the right image */}
          <div className='w-3/5 flex flex-col'>
            <ImageContain Imagee='/home/Dash1.jpg' dimension='w-full h-[200px]' />

            <div className='flex mt-5 h-[424px] space-x-2 '>
              <div className='flex flex-col justify-between space-y-2 w-1/2'>
                <ImageContain Imagee='/home/Inspiration.jpg' dimension='w-[300px] h-[200px]' />
                <ImageContain Imagee='/home/Dash1.jpg' dimension='w-[300px] h-[200px]' />
              </div>

              <div className='w-1/2'>
                <ImageContain Imagee='/home/background.jpg' dimension='w-full h-[424px]' />
              </div>
            </div>
          </div>

          {/* left image */}
          <div className='w-2/5 flex flex-col justify-between'>
            <ImageContain Imagee='/home/Inspiration.jpg' dimension=' h-[448px]' />
            <ImageContain Imagee='/home/Podcast.jpg' dimension='h-[176px]' />
          </div>
        </div>

        {/* the lower image */}
        <div className='flex justify-between space-x-3 mt-4'>
          <div className=''>
            {' '}
            <ImageContain Imagee='/home/Dash1.jpg' dimension=' h-[100px] w-[300px]' />
          </div>
          <div className=''>
            {' '}
            <ImageContain Imagee='/home/Inspiration.jpg' dimension='h-[100px] w-[795px]' />
          </div>
        </div>
      </div>

      <div className='flex justify-center cursor-pointer my-4 mb-20'>
        <h1 className='bg-white border border-slate-400 px-3 py-2 rounded-md text-xs'>
          Load More
        </h1>
      </div>
    </div>
  );
};

export default DashboardHome;
