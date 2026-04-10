import React from 'react'

const CompleteTask = ({data}) => {
  return (
     <div className='bg-green-400 rounded-xl flex-shrink-0 h-full w-[300px] p-5'>
      <div className=''>
        <h3>{data.category}</h3>
        <h4>{data.taskDate}</h4>
      </div>
      <h2>{data.taskTitle}</h2>
      <p className=''>
      {data.taskDescription}
      </p>
      <div className='mt-2'>
        <button className='w-full bg-gray-500'>Complete</button>
      </div>
      </div>
  )
}

export default CompleteTask