import React from "react";
import { Hospital } from "lucide-react";

function Posts2() {
  const items = [
    {
      id: "01",
      title: "Research & Documentation",
      description:
        "Preservation of Tribal Community knowledge, oral traditions, and cultural practices through systematic documentation.",
    },
    {
      id: "02",
      title: "Training & Capacity Building",
      description:
        "Empowering tribal communities through training on laws, constitutional provisions, and socio-economic programs.",
    },
    {
      id: "03",
      title: "Grants & Financial Support",
      description:
        "Facilitating Grants-in-Aid under the Ministry of Tribal Affairs' 'Research and Mass Information' scheme.",
    },
  ];

  return (
    <>
      <div className="w-full h-[1.5px] bg-linear-to-r from-transparent via-blue-700 to-transparent" />
    
    <div className="w-full min-h-screen bg-white flex flex-col md:flex-row ">
      <div className="w-full md:w-1/2 flex flex-col items-start justify-start px-12 py-16 ">
        <div className="flex flex-col gap-4 p-6 bg-gray-50 min-h-screen">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 p-5 rounded-2xl border bg-white shadow-sm transition-all 
                  border-gray-200"
            >
              {/* Number Badge */}
              <div className="min-w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-500">
                {item.id}
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* right content */}
      <div className="w-full md:w-1/2 flex items-start justify-center px-12 py-16 ">
        <div className="max-w-lg">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-blue-700 text-lg">
              <Hospital size={18} />
            </span>
            <p className="text-xs font-semibold tracking-[0.15em] text-blue-700 uppercase">
              Our Institution
            </p>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            About Tribal Research Institute & Training Centre
          </h1>
          <div className="w-10 h-1 bg-yellow-400 mb-5" />
          <p className="text-xl text-gray-600 leading-relaxed overflow-hidden">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis maxime in quia debitis, reprehenderit nihil iusto est at
            sed recusandae quos repudiandae cumque voluptates aspernatur
            inventore praesentium explicabo exercitationem sint et minima. A
            nostrum eius officia quod ullam reprehenderit assumenda voluptas
            corporis modi, eaque consequuntur neque nihil quas. Laborum atque in
            veniam distinctio quidem? Sit impedit deserunt nemo quas! Ea, quasi!
            Reiciendis ut nihil maiores quas quaerat consectetur quasi dolores
            temporibus officiis rerum, sed amet, quidem modi voluptates eius
          </p>
          <button className="mt-8 px-6 py-2.5 bg-blue-700 text-white text-sm font-medium rounded hover:bg-blue-800 transition-colors">
            Read More
          </button>
        </div>
      </div>
    </div>
    </>
    
  );
}

export default Posts2;
