import React from "react";
import { AiOutlineNotification } from "react-icons/ai";
import { notice } from "../data.jsx";

function Notice() {
  if (!notice) return null;

  return (
    <div className="text-xl tracking-tight text-white w-full h-10 overflow-hidden flex items-center">
      <div className="clip-path h-10 w-24  md:w-40 bg-amber-500 flex items-center justify-center lg:pl-7 sm:justify-start sm:w-32 gap-1 shrink-0 z-10  "> 
        <AiOutlineNotification className="text-xl " />
        <h1 className=" text-2xs  font-semibold font-['Barlow_Condensed'] pr-4">Notice</h1>
      </div>

      <div className="flex-1 ">
        <h1 className="whitespace-nowrap animate-marquee"> {notice}</h1>
      </div>
    </div>
  );
}

export default Notice;
