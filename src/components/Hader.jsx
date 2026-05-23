import { useState, useEffect } from "react";
import { images } from "../data.jsx";

// Custom hook to detect screen size
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

// Your component
export const Header = () => {
  const isMobile = useIsMobile();

  return (
    <div className="w-full bg-white">
      {isMobile ? (
        // Mobile layout
        <div className="flex items-center justify-around h-16 px-2 ">
          {images.map((logo) => (
            <img
              key={logo.id}
              src={logo.img}
              alt={logo.name}
              className="h-10 w-auto object-contain"
            />
          ))}
         
        </div>
      ) : (
        // Desktop layout
        <div className="h-36 w-full bg-white flex justify-between items-center">
          <div className="h-36 w-[20%]  flex items-center justify-center">
            <div className="h-36 w-1/2 p-5">
              <img
                className="h-full"
                src="/Images/Lion Capital of Ashoka .png"
                alt=""
              />
            </div>
            <div className="h-36 w-1/2 p-4">
              <img
                className="h-full"
                src="/Images/govt-of-sikkim-logo-png_seeklogo-615865.png"
                alt=""
              />
            </div>
          </div>
          <div className="h-36 w-0.5 bg-linear-to-b from-transparent via-blue-800 to-transparent" />

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

          <div className="h-36 w-0.5 bg-linear-to-b from-transparent via-blue-800 to-transparent" />

          <div className="h-full w-[40%]  flex items-center justify-center">
            <div className="h-36 w-1/2 p-4">
              <img
                className="h-full"
                src="/Images/Sunawlo Sikkim.png"
                alt=""
              />
            </div>
            <div className="h-36 w-1/2 p-4">
              <img
                className="h-full"
                src="/Images/Disaster management.png"
                alt=""
              />
            </div>
            <div className="h-36 w-1/2 p-4">
              <img
                className="h-full"
                src="/Images/TRIBAL RESEARCH INSTITUTE AND TRAINING CENTRE, ASSAM LINZEY.png"
                alt=""
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
