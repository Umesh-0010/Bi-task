import React from "react";
import { TfiWorld } from "react-icons/tfi";
import { BiAccessibility } from "react-icons/bi";
import { images } from "../data.jsx";
import Navbar from "./Navbar";

function TopBar() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="h-8 w- bg-[#1077A6] ">
          <div className="flex items-center justify-end gap-4 bg-sky-600 text-white px-4 py-2 text-sm">
            <div className="flex items-center gap-2">
              <TfiWorld className="text-sm" />
              <button className="bg-yellow-400 text-black px-2  rounded">
                EN
              </button>
            </div>

            <div className="flex items-center gap-1">
              <button className="hover:underline hover:text-yellow-400">
                हिंदी
              </button>
            </div>

            <div className="flex items-center gap-1">
              <BiAccessibility className="text-sm" />
              <button className="hover:underline">Screen Reader Access</button>
            </div>
          </div>
        </div>

        <div className="h-36 w-full bg-white flex justify-between items-center">
          <div className="h-36 w-[20%]  flex items-center justify-center">
            <div className="h-36 w-1/2 p-5">
              <img
                className="h-[100%]"
                src="/Images/Lion Capital of Ashoka .png"
                alt=""
              />
            </div>
            <div className="h-36 w-1/2 p-4">
              <img
                className="h-[100%]"
                src="/Images/govt-of-sikkim-logo-png_seeklogo-615865.png"
                alt=""
              />
            </div>
          </div>
          <div className="h-36 w-0.5 bg-gradient-to-b from-transparent via-blue-800 to-transparent" />

          <div className="h-36 w-[40%]  p-4 bg-white">
            
            <h1 className="text-xl font-bold text-[#322880] leading-snug mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <div className="w-8 h-0.5 bg-gray-300 mb-3.5 " />
            <p className="text-sm text-gray-500 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              perspiciatis porro! Laborum asperiores corporis inventore
              cupiditate voluptates quis repellendus veniam.
            </p>
          </div>

          <div className="h-36 w-0.5 bg-gradient-to-b from-transparent via-blue-800 to-transparent" />


          <div className="h-full w-[40%]  flex items-center justify-center">
            <div className="h-36 w-1/2 p-4">
              <img
                className="h-[100%]"
                src="/Images/Sunawlo Sikkim.png"
                alt=""
              />
            </div>
            <div className="h-36 w-1/2 p-4">
              <img
                className="h-[100%]"
                src="/Images/Disaster management.png"
                alt=""
              />
            </div>
            <div className="h-36 w-1/2 p-4">
              <img
                className="h-[100%]"
                src="/Images/TRIBAL RESEARCH INSTITUTE AND TRAINING CENTRE, ASSAM LINZEY.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div><Navbar /></div>
      </div>
    </>
  );
}

export default TopBar;
