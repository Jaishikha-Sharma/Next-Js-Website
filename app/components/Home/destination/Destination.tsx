import React from 'react'
import SectionHeading from '../../Helper/SectionHeading'
import DestinationSlider from './DestinationSlider'

const Destination = () => {
  return (
    <div id="destination" className='pt-20 pb-20'>
        {/* section heading */}
      <SectionHeading heading='Exploring popular destination' para="Explore breathtaking destinations that offer a perfect blend of adventure, relaxation, and culture. Whether you're seeking pristine beaches, vibrant cityscapes, or serene mountain escapes, there's a place for everyone. Let these stunning locations inspire your next journey and create unforgettable memories."/>
       {/* section Content */}
       <div className='mx-auto mt-14 w-[80%]'>
         {/* slider */}
         <DestinationSlider/>
        </div>
    </div>
  )
}

export default Destination
