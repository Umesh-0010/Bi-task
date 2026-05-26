import React from "react";
import { TfiWorld } from "react-icons/tfi";
import { BiAccessibility } from "react-icons/bi";
import Navbar from "./Navbar";
import { Header } from "./Hader.jsx";
import MobileNav from "./MobileNav.jsx";

function TopBar() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="h-8 w-full bg-[#1077A6] ">
          <div className="flex items-center md:justify-end justify-center gap-4 bg-sky-600 text-white px-4 py-2 text-sm  ">
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

        <Header />
        <div className="hidden lg:block">
          <Navbar />
        </div>

        <div className="block lg:hidden">
          <MobileNav />
        </div>
      </div>
    </>
  );
}

export default TopBar;
