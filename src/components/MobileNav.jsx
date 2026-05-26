import { useState } from "react";
import { Link } from "react-router-dom";
import {  HiOutlineMenu, HiX, HiChevronDown } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { AiOutlineClose } from 'react-icons/ai';   
import { NAV_ITEMS } from "../data";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <div className="w-full bg-[#1077A6]  text-white">
      {/* Top bar */}
      <div className="h-10 flex items-center justify-between px-10 text-xl">
        <h1>Navbar</h1>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="p-2 rounded-md border border-gray-200 lg:hidden"
        >
          {isOpen ? (
            <MdClose  className="w-5 h-5" />
          ) : (
            <HiOutlineMenu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="w-full flex flex-col gap-1 m-1 lg:hidden">
          {NAV_ITEMS.map((item) => (
            <div key={item.label}>
              <div
                onClick={() => item.dropdown && toggleDropdown(item.label)}
                className="h-10 px-4 bg-blue-700 text-white flex items-center justify-between  cursor-pointer hover:bg-blue-600 transition-colors"
              >
                
                <Link to={item.href} className="flex items-center gap-2 w-full">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>

                {item.dropdown && (
                  <HiChevronDown
                    className={`transition-transform duration-300 ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              
              {item.dropdown && openDropdown === item.label && (
                <div className=" mx-2 m-1 flex flex-col gap-1 justify-evenly">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.label}
                      to={sub.href}
                      className="px-3 py-2  bg-blue-700 rounded-md text-sm  hover:bg-blue-500 text-white transition-all duration-300"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

