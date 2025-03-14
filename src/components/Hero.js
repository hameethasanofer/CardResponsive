import React from "react";
import { FaStar } from "react-icons/fa";
import { FaGalacticRepublic } from "react-icons/fa";
import image1 from './../components/image1.png';
import { HiOutlineDocumentReport } from "react-icons/hi";
import { HiOutlineArrowCircleUp } from "react-icons/hi";
import { HiMiniChartBar } from "react-icons/hi2";
import { PiStarHalfFill } from "react-icons/pi";
import { TiThList } from "react-icons/ti";
import { PiDeviceTabletLight } from "react-icons/pi";

const Hero = () => {
  return (
    <section className="text-center p-6 bg-gray-100">
      <h1 className="text-4xl font-bold">
        The Future of Manufacturing <br />with <span className="text-[#1a3a46]">Latest Technology</span>
      </h1>
      <p className="mt-2 text-gray-600">
        Expert tech to elevate your manufacturing. Let's take your business further.
      </p>

      <div className="mt-6">
        <button className="bg-[#1a3a46] text-white px-3 py-1 rounded-xl mr-2 hover:bg-[#1a3a46]">
          Get started
        </button>
        <button className="border border-blue-600 text-[#1a3a46] px-3 py-1 rounded-xl mr-2 hover:bg-blue-100">
          Try Demo
        </button>
      </div>
      <div className="flex justify-center items-center mt-4 text-yellow-500">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} className="text-3xl" />
        ))}
        <span className="text-gray-700 ml-2">5.0</span>
      </div>
      <span className="text-gray-700 ml-2">from 80+ reviews</span>

      {/* Icon Section */}
      <div className="flex justify-center items-center space-x-6 mt-6 mb-6">
        <div className="p-4">
          <HiOutlineDocumentReport size={30} className="text-gray-600" />
        </div>
        <div className="p-4">
          <HiOutlineArrowCircleUp size={30} className="text-gray-600" />
        </div>
        <div className="p-4">
          <HiMiniChartBar size={30} className="text-gray-600" />
        </div>
        <div className="p-4">
          <PiStarHalfFill size={30} className="text-gray-600" />
        </div>
        <div className="p-4">
          <TiThList size={30} className="text-gray-600" />
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-5 gap-x-8 gap-y-10 mt-6 max-w-screen-xl mx-auto px-4">
      
        <div className="relative w-full min-h-[150px] flex-grow-0 flex-shrink-0 rounded-lg shadow-md flex flex-col items-center">
          <img
            src={image1}
            alt="Description"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        
        <div className="bg-[#1a3a46] text-white p-6 rounded-lg pt-44  relative mt-20 ">
          <h3 className="text-2xl font-bold mt-2 text-center">100+</h3>
          <p className="text-m">Our Esteemed <br/>Clients and <br/>Partners</p>
        </div>

      
        <div className="bg-white p-6 rounded-lg shadow-md pt-44 relative mt-40 grid-cols-4">
          <PiDeviceTabletLight size={35} className="text-green-700" />
          <p className="text-sm text-gray-600 text-left">Total Projects</p>
          <h3 className="text-2xl font-bold text-left">1951+</h3>
          <span className="text-green-600 text-left">Increased +128 this month</span>
        </div>

    
        <div className="bg-green-600 text-black p-6 rounded-lg pt-44 relative mt-20">
          <h3 className="text-3xl font-bold mt-2">6+</h3>
          <p className="text-sm">Years of<br/> decided <br/>services</p>
        </div>

        
        <div className="bg-gray-800 text-white p-6 rounded-lg pt-44">
          <FaGalacticRepublic size={40} />
          <h3 className="text-lg font-bold mt-2">Achieve Optimal Efficiency Boost productivity and performance</h3>
        </div>
      </div>
    </section>
  );
};

export default Hero;
