import Image from 'next/image';
import React from 'react'

type props ={
    image:string;
    title:string;
}

const WhyCard = ({image,title}:props) => {
  return (
    <div>
      <Image src={image} width={70} height={70} alt='image' className='mx-auto'/>
    </div>
  )
}

export default WhyCard
