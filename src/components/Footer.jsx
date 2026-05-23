import { Users, Clock, Eye } from "lucide-react";

export default function FooterInfo() {
  return (
    <div className="] p-6 flex flex-col md:flex-row gap-4">
      
      {/* Left Card — Logo & Title */}
      <div className="flex-1 bg-[#2B7DB8] rounded-2xl p-6 flex items-center gap-5 border-1 border-sky-100">
        {/* Logo */}
        <div className="w-[90px] h-[90px] rounded-full overflow-hidden border-2 border-white/30">
          <img
            src="../../public/Images/Sunawlo Sikkim.png"
            alt="Institute Logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-white text-lg font-bold leading-snug">
            Tribal Research Institute <br /> & Training Centre
          </h2>
          <p className="text-blue-200 text-sm mt-2">Social Welfare Department</p>
          <p className="text-blue-300 text-xs mt-0.5">Government of Sikkim</p>
        </div>
      </div>

      {/* Right Card — Website Info */}
      <div className="flex-1 bg-[#2B7DB8] rounded-2xl p-6 border-1 border-sky-100">
        <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-4">
          Website Info
        </p>

        <div className="flex flex-col gap-4">
          {/* Visitors */}
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-lg bg-[#2b7db8] flex items-center justify-center">
              <Users size={16} className="text-yellow-400" />
            </div>
            <div>
              <p className="text-blue-200 text-[10px] font-semibold tracking-widest uppercase">
                Number of Visitors
              </p>
              <p className="text-white text-sm font-bold">384</p>
            </div>
          </div>

          {/* Last Updated */}
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-lg bg-[#2b7db8] flex items-center justify-center">
              <Clock size={16} className="text-yellow-400" />
            </div>
            <div>
              <p className="text-blue-200 text-[10px] font-semibold tracking-widest uppercase">
                Last Updated
              </p>
              <p className="text-white text-sm font-bold">22 May 2026</p>
            </div>
          </div>

          {/* Accessibility */}
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-lg bg-[#2B7DB8] flex items-center justify-center">
              <Eye size={16} className="text-yellow-400" />
            </div>
            <div>
              <p className="text-blue-200 text-[10px] font-semibold tracking-widest uppercase">
                Accessibility
              </p>
              <p className="text-white text-sm font-bold">Screen Reader Access</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}