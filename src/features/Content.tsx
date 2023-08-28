import Categories from '@/components/Categories'
import DashboardHome from '@/components/DashboardHome'
import React from 'react'

type Props = {}

const Content = (props: Props) => {
  return (
    <div className='flex flex-col space-y-7 lg:space-y-0 lg:flex-row lg:space-x-7 my-7'>
      <Categories />
      <DashboardHome />
    </div>
  )
}

export default Content