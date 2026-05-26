import React from "react";

import Hero from "../components/Hero";
import Liderprofile from "../components/Liderprofile";
import Post from "../components/Post";
import Posts2 from "../components/Post2";

function LandingPage() {
  return (
    <div className="bg-[#0A5F85]">
      
       <Hero />
      <Liderprofile />
      <Post />
      <Posts2 />
    </div>
  );
}

export default LandingPage;
