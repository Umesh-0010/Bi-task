import { useState } from "react";
import { HiOutlineMenu, HiX, HiChevronDown } from "react-icons/hi";
import { NAV_ITEMS } from "../data";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <>
      {/* Hamburger Button */}
      <div className="w-full px-4 py-1 flex items-center gap-1 flex-nowrap relative bg-[#1D6A9B]">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-md border border-gray-200 lg:hidden"
        >
          <HiOutlineMenu className="w-5 h-5" />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="font-medium text-gray-800">Menu</span>

          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded hover:bg-gray-100"
          >
            <HiX className="w-5 h-5" />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="overflow-y-auto h-[calc(100%-60px)]">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="border-b border-gray-100">
              {/* Main Item */}
              <div
                className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-50"
                onClick={() =>
                  item.dropdown ? toggleDropdown(item.label) : setIsOpen(false)
                }
              >
                <a
                  href={item.href}
                  className="flex items-center gap-3 text-gray-700 text-sm w-full"
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </a>

                {item.dropdown && (
                  <HiChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* Dropdown */}
              {item.dropdown && openDropdown === item.label && (
                <div className="bg-gray-50">
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      className="block pl-11 pr-4 py-2.5 text-sm text-gray-500 hover:text-gray-800 hover:bg-gray-100 border-t border-gray-100"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
