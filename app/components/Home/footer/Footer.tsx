import React from "react";


const Footer = () => {
  return (
    <div id="contact"  className="pt-16 pb-16 ">
      <div className="w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 1 part */}
        <div className="space-y-5 ">
          <h1 className="text-large font-bold">Company</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-960">
            About Us
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-960">
            Careers
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-960">
            Blogs
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-960">
            Gift Cards
          </p>
        </div>
        {/* 2 part */}
        <div className="space-y-5 ">
          <h1 className="text-large font-bold">Support</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-960">
            Contact Us
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-960">
            Legal Notice
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-960">
            Privacy Policy
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-960">
            Terms & Conditions
          </p>
        </div>
        {/* 3 part */}
        <div className="space-y-5 ">
          <h1 className="text-large font-bold">Other Services</h1>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-960">
            Car Hire
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-960">
            Activites Finder
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-960">
            Tour List
          </p>
          <p className="text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-960">
            Flight Finder
          </p>
        </div>
        {/* 4 part */}
        <div>
          <h1 className="text-large font-bold">Contact Us </h1>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600">Our Mobile number</h1>
            <h1 className="text-base font-bold text-blue-950 mt-1">
              8908745677
            </h1>
          </div>
          <div className="mt-6">
            <h1 className="text-sm text-gray-600">Our Email</h1>
            <h1 className="text-base font-bold text-blue-950 mt-1">
              example@gmail.com
            </h1>
          </div>
        </div>
      </div>
      {/* Bottom section*/}
      <div
        className="mt-8 w-[80%] mx-auto border-t pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 
       text-sm "
      >
        <p className="text-center md:text-left"> copyright @ 2025 </p>
      </div>
    </div>
  );
};

export default Footer;
