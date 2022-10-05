import React from 'react'
import { useDispatch } from 'react-redux'
import { useGetVideoDetailsQuery } from '../redux/features/videoApiCore'
import LargeVC from '../components/videoCard/LargeVC'

const Home = () => {
  const { data, isFetching, error } = useGetVideoDetailsQuery();

  return (
    <div className='pt-20 px-4 w-full bg-green-800'>
      <div className='w-full flex justify-start items-start gap-4 bg-green-300'>
        {Array(10).map((item, index) => {
          <LargeVC key={index}>this is card number {item}</LargeVC>
        })}

      </div>
    </div>
  )
}

export default Home