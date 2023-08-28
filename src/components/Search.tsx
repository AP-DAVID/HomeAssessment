import React from 'react'
import {FiSearch} from "react-icons/fi"
type Props = {}

const Search = (props: Props) => {
  return (
    <div className='bg-white rounded-md w-3/4 lg:w-[418px] lg:h-[94px] p-4 border flex flex-col space-y-2'>
        <h1 className='text-[4vw] sm:text-sm text-[#4e4e4e]'>Search</h1>
        <div className='flex items-center space-x-2'>
            <FiSearch className="text-[#a3a3a3] h-7 w-7"/>
            <input placeholder='Search anything' className='w-full py-2'/>
        </div>
    </div>
  )
}

export default Search