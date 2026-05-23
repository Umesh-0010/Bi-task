import React from 'react'
import {leaders} from '../data'


function LeaderProfile() {
  return (
    <div className="w-full bg-white py-12 flex flex-col items-center">

      {/* Section Title */}
      <p className="text-xs font-semibold tracking-[0.2em] text-blue-500 uppercase mb-10">
        Distinguished Leadership
      </p>

      {/* Cards Row */}
      <div className="flex flex-wrap items-start justify-center gap-24">
        {leaders.map((leader) => (
          <div
            key={leader.id}
            className="flex flex-col items-center text-center w-44 hover:text-amber-400"
          >
            {/* Circular Image */}
            <div className="h-36 w-36 rounded-full overflow-hidden border-4 border-gray-100 shadow-md mb-4">
              <img
                src={leader.img}
                alt={leader.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Name */}
            <h2 className="text-sm font-bold text-gray-900 leading-snug mb-1 whitespace-nowrap ">
              {leader.name}
            </h2>

            {/* Title */}
            <p className="text-1xs text-gray-500">{leader.title}</p>
          </div>
        ))}
      </div>
      <div className="w-full h-[1.5px] bg-linear-to-r from-transparent via-blue-700 to-transparent  mt-8" />

    </div>
  )
}

export default LeaderProfile