import React from 'react'
import List from './List'

type Props = {}

const Categories = (props: Props) => {
  return (
    <div className='p-[20px] rounded-md flex flex-col items-center lg:items-start bg-white border'>
        <h1 className='font-semibold mb-5 text-[5vw] sm:text-xl text-[#303030]'>Categories</h1>

        {/* the categories Lists */}
        <List text='Home' active/>
        <List text='Projects'/>
        <List text='People'/>
        <List text='Branding'/>
        <List text='Favorites'/>
    </div>
  )
}

export default Categories