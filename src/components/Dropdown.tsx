import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
type Props = {
  text: string;
};

const Dropdown = ({ text }: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => {
        setOpen(!open);
      }}
      className='bg-white w-3/4 lg:w-[274px] lg:h-[94px] cursor-pointer rounded-md p-4 border flex flex-col justify-between'
    >
      <h1 className='text-[4vw] sm:text-sm  text-[#4e4e4e]'>{text}</h1>
      <div className='flex items-center justify-between space-x-2'>
        <h1 className='text-[4vw] sm:text-base font-semibold text-[#4e4e4e]'>Select {text}</h1>
        {!open ? (
          <IoIosArrowDown className='h-5 w-5 text-[#a3a3a3]' />
        ) : (
          <IoIosArrowUp className='h-5 w-5 text-[#a3a3a3]' />
        )}
      </div>
    </div>
  );
};

export default Dropdown;
