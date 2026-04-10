import React from 'react'

const FailedTask = ({data}) => {
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
      
      
      </div>
  )
}

export default FailedTask