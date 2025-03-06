"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { destinationData } from "@/app/data/Data"; // Ensure that destinationData is correctly exported
import Image from "next/image";

// Responsive breakpoints
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const DestinationSlider = () => {
  // Ensure that destinationData is defined and is an array with valid objects
  if (!Array.isArray(destinationData) || destinationData.length === 0) {
    return <div>No destinations available</div>; // Handle case where data might be empty
  }

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000}
      keyBoardControl={true}
    >
      {destinationData.map((data) => {
        return (
          <div key={data.id} className="m-3">
            <div className="relative h-[400px]">
              <div className="absolute inset-0 bg-black opacity-25 rounded-lg"></div>{" "}
              {/* Image */}
              <Image
                src={data.image} 
                alt={data.country}
                width={500} 
                height={500}
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
            {/* Text content */}
            <h1 className="text-lg font-semibold mt-4">{data.country}</h1>
            <p className="text-sm text-gray-600">{data.travelers} Traveler</p>
          </div>
        );
      })}
    </Carousel>
  );
};

export default DestinationSlider;
