import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import { hotelsData } from "@/app/data/Data";
import HotelCard from "./HotelCard";

const Hotel = () => {
  return (
    <div id="hotels" className="pt-10 pb-20">
      <SectionHeading heading="Recommended Hotels"  para="Discover a selection of recommended hotels that provide exceptional comfort, outstanding service, and a memorable stay. From luxurious resorts to cozy boutique hotels, each offers a unique experience to suit every traveler's needs. Make your trip even more special by choosing one of these top-rated accommodations."/>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-center mt-16">
        {/* Hotel card */}
        {hotelsData.map((data , i) => {
          return (
            <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay={`${i * 100}`}  key={data.id}>
              <HotelCard hotel={data} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hotel;
