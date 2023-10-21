import React from 'react'

export default function TopFooter() {
  return (
    <div className=' w-full bg-lightblue'>
        <div className='py-10 flex flex-col justify-center gap-4 items-center'>
            <p className='font-medium'>We will love to hear what you think!</p>
            <button className='w-36 h9 border-[1px] border-black bg-white rounded-full hover:border-[2px] transition-all duration-200 '>Give Feedback</button>
        </div>
    </div>
  )
}
