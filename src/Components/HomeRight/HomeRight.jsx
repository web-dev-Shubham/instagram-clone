import React from 'react'
import SuggestionCard from './SuggestionCard'

export const HomeRight = () => {
  return (
    <div>
      <div>
        <div className='flex justify-between item-center'>
          <div className='flex item-center'>
            <div>
              <img className='w-12 h-12 rounded-full' src="https://cdn.pixabay.com/photo/2023/08/23/12/57/young-8208513_640.jpg" alt="" />
            </div>
            <div className='ml-3'>
              <p >FullName</p>
              <p className='opacity-70'>username</p>
            </div>
          </div>

          <div>
            <p className='text-blue-700 font-semibold'>switch</p>
          </div>
          </div>
          <div className='space-y-5 mt-10'>
            {[1,1,1,1,1,1].map((item)=><SuggestionCard></SuggestionCard>)}
          </div>
        
      </div>

    </div>
  )
}
