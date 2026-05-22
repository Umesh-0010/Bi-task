import React from "react";
import { TfiWorld } from "react-icons/tfi";
import { BiAccessibility } from "react-icons/bi";
import { images } from "../data.jsx";
import Navbar from "./Navbar";

function TopBar() {
  return (
    <>
    <div className="sticky top-0 z-50">
       <div className="h-10 w-full bg-[#1077A6] ">
        <div className="flex items-center justify-end gap-4 bg-sky-600 text-white px-4 py-2 text-sm">
          <div className="flex items-center gap-1">
            <TfiWorld className="text-xl" />
            <button className="bg-yellow-400 text-black px-2 py-1 rounded">
              EN
            </button>
          </div>

          <div className="flex items-center gap-1">
            <button className="hover:underline hover:text-yellow-400">
              हिंदी
            </button>
          </div>

          <div className="flex items-center gap-1">
            <BiAccessibility className="text-xl" />
            <button className="hover:underline">Screen Reader Access</button>
          </div>
        </div>
      </div>

      <div className="h-48 w-full bg-white flex p-8 justify-between items-center">
        {images.map((item) => (
          <div key={item.id} className=" h-40 w-1/7">
            <img className="h-[100%] w-[100%] shrink-0" src={item.img} alt={item.name} />
          </div>
        ))}
      </div>

      <div>
        <Navbar />
      </div>
    </div>
     
    </>
  );
}

export default TopBar;
