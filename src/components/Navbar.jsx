  import { useState, useRef } from "react";
  import {NAV_ITEMS} from "../data.jsx"



  export default function Navbar() {
    const [openIndex, setOpenIndex] = useState(null);
    const [hoverIndex, setHoverIndex] = useState(null);
    const closeTimer = useRef(null);

    const handleMouseEnter = (i) => {
      clearTimeout(closeTimer.current);
      setHoverIndex(i);
      if (NAV_ITEMS[i].dropdown) setOpenIndex(i);
    };

    const handleMouseLeave = () => {
      setHoverIndex(null);
      closeTimer.current = setTimeout(() => setOpenIndex(null), 150);
    };

    return (
      <nav
        className="w-full px-4 py-1 flex items-center gap-1 flex-nowrap relative"
        style={{
          background: "linear-gradient(180deg, #1e6fa3 0%, #1a5f8a 100%)",
          borderBottom: "2px solid #145078",
          boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
          
        }}
      >
        {NAV_ITEMS.map((item, i) => {
          const isHovered = hoverIndex === i;
          return (
            <div
              key={i}
              className="relative"
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.href}
                className="flex items-center gap-1.5 px-3 py-2 rounded whitespace-nowrap no-underline"
                style={{
                  backgroundColor: isHovered ? "#facc15" : "transparent",
                  color: isHovered ? "#713f12" : "rgba(255,255,255,0.9)",
                  fontSize: "15px",
                  fontWeight: 500,
                  transition: "background-color 0.15s, color 0.15s",
                }}
              >
                <span
                  style={{
                    fontSize: "15px",
                    lineHeight: 1,
                    display: "inline-block",
                    transform: isHovered ? "scale(1.15)" : "scale(1)",
                    transition: "transform 0.15s",
                  }}
                >
                  {item.icon}
                </span>
                <span
                className="text-sm"
                  style={{
                    letterSpacing: "0.02em",
                    display: "inline-block",
                    transform: isHovered ? "scale(1.08)" : "scale(1)",
                    transition: "transform 0.15s",
                  }}
                >
                  {item.label}
                </span>
                {item.dropdown && (
                  <svg
                    style={{
                      width: 12,
                      height: 12,
                      marginLeft: 2,
                      transition: "transform 0.2s",
                      transform:
                        openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </a>

              {item.dropdown && (
                <div
                  onMouseEnter={() => clearTimeout(closeTimer.current)}
                  onMouseLeave={handleMouseLeave}
                  className={`absolute top-full left-0 min-w-42.5 rounded-md overflow-hidden shadow-xl z-50 transition-all duration-200 ${
                    openIndex === i
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                  style={{ background: "#1a5f8a" }}
                >
                  {item.dropdown.map((drop, j) => (
                    <a
                      key={j}
                      href={drop.href}
                      className="flex items-center px-4 py-2.5 text-md text-white hover:bg-yellow-400 hover:text-yellow-900 transition-colors duration-150 border-b border-white/10 last:border-0"
                    >
                      {drop.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    );
  }
