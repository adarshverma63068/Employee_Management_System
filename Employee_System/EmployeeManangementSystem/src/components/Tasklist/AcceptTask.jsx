import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='bg-purple-300 rounded-xl flex-shrink-0 h-full w-[300px] p-5'>
      <div className=''>
        <h3>{data.category}</h3>
        <h4>{data.taskDate}</h4>
      </div>
      <h2>{data.taskTitle}</h2>
      <p className=''>
      {data.taskDescription}
      </p>
      <div className='flex justify-between mt-4'>
        <button className='bg-green-500 py-1 px-2 text-sm'>Mark as completed
        </button>
        <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
      </div>
      </div>
      
  )
}

export default AcceptTask