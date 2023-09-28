import React from 'react'

const SuggestionCard = () => {
  return (
    <div className='flex justify-between item-center'>
        <div className='flex item-center'>
            <img  className='w-9 h-9 rounded-full' src="https://cdn.pixabay.com/photo/2023/08/27/08/20/hiking-8216486_640.jpg" alt="" />
            <div className='ml-2'>
                <p className='text-sm font-semibold'>username</p>
                <p className='text-sm font-semibold opacity-70'>Follows You</p>
            </div>
        </div>
        <p className='text-blue-700 text-sm font-semibold'>Follow</p>
    </div>
  )
}

export default SuggestionCard