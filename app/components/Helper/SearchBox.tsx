import React from "react";
import { FaCalendar, FaMap } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div
      className="flex flex-wrap bg-white rounded-lg p-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center
      justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]"
    >
      {/* 1 search Input*/}
      <div className="flex items-center space-x-6">
        <FaMap className="w-6 h-6 text-blue-600" />
        <div>
            <p className="text-lg font-medium mb-[0.2rem]">Location</p>
            <input type="text" placeholder="Where are you going?" className="outline-none border-none placeholder:text-gray-800"/>
        </div>
      </div>
       {/* 2 search Input*/}
       <div className="flex items-center space-x-6 hidden sm:block">
        <FaCalendar  className="w-6 h-6 text-blue-600"/>
        <div>
            <p className="text-lg font-medium mb-[0.2rem]">Start Date</p>
            <input className="outline-none border-none" type="date"/>
        </div>
       </div>
         {/* 3 search Input*/}
         <div className="flex items-center space-x-6 hidden sm:block">
        <FaCalendar  className="w-6 h-6 text-blue-600"/>
        <div>
            <p className="text-lg font-medium mb-[0.2rem]">End Date</p>
            <input className="outline-none border-none" type="date"/>
        </div>
       </div>
         {/* 4 search Input*/}
         <div className="flex items-center space-x-6 hidden sm:block">
        <FaCalendar  className="w-6 h-6 text-blue-600"/>
        <div>
            <p className="text-lg font-medium mb-[0.2rem]">Guest</p>
            <p className="text-base font-normal">1 Guest 1 Room</p>
        </div>
       </div>
    </div>
  );
};

export default SearchBox;
