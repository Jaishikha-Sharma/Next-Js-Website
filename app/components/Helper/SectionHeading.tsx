import React from 'react'


type  props ={
    heading : string;
    para:string;
}

const SectionHeading = ({heading , para}:props) => {
  return (
    <div className='w-[80%] mx-auto'>
      <h1 className='text-xl sm:text-3xl text-blue-950 font-bold'>{heading}</h1>
      <p className='mt-2 text-gray-700 sm:text-base text-sm font-medium'>{para}</p>
    </div>
  )
}

export default SectionHeading;
