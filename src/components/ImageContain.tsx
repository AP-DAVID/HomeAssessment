import Image from 'next/image'
import React from 'react'

type Props = {
    dimension : string;
    Imagee : string;
}

const ImageContain = ({dimension, Imagee}: Props) => {
  return (
    <div className='relative'>
        <Image src={Imagee} className={`object-cover ${dimension}`} width={1000} height={1000} alt='Home image' />
       <h1 className='text-white absolute bottom-3 left-4 tracking-wide text-[4vw] sm:text-base'>Select Studio</h1>
    </div>
  )
}

export default ImageContain