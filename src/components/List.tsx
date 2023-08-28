import React from 'react'

type Props = {
    active? : boolean;
    text : string;
}

const List = ({active, text}: Props) => {

  return (
    <div className={`${active ? "bg-[#141414] text-white" : ""} flex flex-col justify-center cursor-pointer my-1 py-3  px-4 rounded-sm w-full md:w-[278px] h-[35px]`}>
        <h1 className='text-[3vw] sm:text-sm capitalize'>{text}</h1>
    </div>
  )
}

export default List