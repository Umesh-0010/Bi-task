import React from 'react'

function Hero1() {
  return (
    <div
      className="relative h-172.5 w-366.75  flex items-end justify-start"
      style={{
        backgroundImage: "url('/Images/360_F_565592958_rrmjo67l5Mly1c4flagknasa6LpDpRl3.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Blue overlay */}
      {/* Gradient overlay — transparent top, blue bottom */}
<div
  className="absolute inset-0"
  style={{
  background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(0, 78, 216, 0.6) 65%, rgba(29, 78, 216, 1) 100%)',
}}
/>

      {/* Text content */}
      <div className="relative z-10 px-10 max-w-2xl">
        <h1 className="text-white text-3xl font-bold leading-snug">
          Tribal Research Institute & Training Centre
        </h1>

        {/* Yellow underline accent */}
        <div className="w-10 h-1 bg-yellow-400 mt-2 mb-4" />

        <p className="text-white text-sm leading-relaxed opacity-90">
          The Tribal Research Institute, Sikkim stands as a center of excellence
          dedicated to research, documentation, and capacity building—preserving
          heritage while shaping a progressive and inclusive future for tribal
          communities.
        </p>
      </div>
    </div>
  )
}

export default Hero1