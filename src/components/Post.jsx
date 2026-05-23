import React from "react";
import { Mountain, MapPin, Users, Leaf } from "lucide-react";

function Post() {
  const stats = [
    {
      id: 1,
      icon: <MapPin size={22} className="text-blue-600" />,
      value: "7,096 km²",
      label: "Total Area",
    },
    {
      id: 2,
      icon: <Users size={22} className="text-blue-600" />,
      value: "6,07,688",
      label: "Population (2011)",
    },
    {
      id: 3,
      icon: <Mountain size={22} className="text-blue-600" />,
      value: "8,586 m",
      label: "Kangchenjunga Peak",
    },
    {
      id: 4,
      icon: <Leaf size={22} className="text-blue-600" />,
      value: "35%",
      label: "UNESCO Heritage Area",
    },
  ];

  return (
    <>
      <div className="w-full min-h-screen bg-white flex flex-col md:flex-row ">
        {/* Left — Text Content */}
        <div className="w-full md:w-1/2 flex items-start justify-center px-12 py-16 ">
          <div className="max-w-lg">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-blue-700 text-lg">
                <Mountain size={18} />
              </span>
              <p className="text-xs font-semibold tracking-[0.15em] text-blue-700 uppercase">
                Geography & Heritage
              </p>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              About Sikkim
            </h1>
            <div className="w-10 h-1 bg-yellow-400 mb-5" />
            <p className="text-xl text-gray-600 leading-relaxed overflow-hidden">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis maxime in quia debitis, reprehenderit nihil iusto est
              at sed recusandae quos repudiandae cumque voluptates aspernatur
              inventore praesentium explicabo exercitationem sint et minima. A
              nostrum eius officia quod ullam reprehenderit assumenda voluptas
              corporis modi, eaque consequuntur neque nihil quas. Laborum atque
              in veniam distinctio quidem? Sit impedit deserunt nemo quas! Ea,
              quasi! Reiciendis ut nihil maiores quas quaerat consectetur quasi
              dolores temporibus officiis rerum, sed amet, quidem modi
              voluptates eius
            </p>
            <button className="mt-8 px-6 py-2.5 bg-blue-700 text-white text-sm font-medium rounded hover:bg-blue-800 transition-colors">
              Read More
            </button>
          </div>
        </div>

        {/* Right — Image */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-start px-12 py-16 ">
          <div className=" h-150 w-full rounded-3xl overflow-hidden shadow-xl">
            <img
              src="/Images/buddha.jpg"
              alt="About Sikkim"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-gray-50 w-70 rounded-2xl p-4 flex flex-col gap-2 border border-gray-100"
              >
                <div className="bg-white w-9 h-9  rounded-lg flex items-center justify-center shadow-sm border border-gray-100">
                  {stat.icon}
                </div>
                <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
