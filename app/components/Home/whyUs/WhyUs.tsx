import React from 'react'
import SectionHeading from '../../Helper/SectionHeading';
import WhyCard from './WhyCard';

const WhyUs = () => {
  return (
    <div className='pt-10 pb-24'>
      {/* Section Heading */}
      <SectionHeading heading='Why Choose Us ?'/>
      <div className='grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20'>
           {/* Why choose us card */}
        <div>
            <WhyCard image='/images/c1.svg' title="Best Price Guarantee" />
            <WhyCard image='/images/c2.svg' title="Easy and Quick Booking" />
            <WhyCard image='/images/c3.svg' title="Customer Care 24 x 7" />
        </div>
      </div>
    </div>
  )
}

export default WhyUs;
