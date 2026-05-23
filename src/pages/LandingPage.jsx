import React from "react";
import Notice from "../components/Notice";
import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import Liderprofile from "../components/Liderprofile";
import Post from "../components/Post";
import Posts2 from "../components/Post2";
import FooterComponent from "../components/FooterComponent";

function LandingPage() {
  return (
    <div className="bg-[#0A5F85]">
      <Notice />
      <TopBar />
      <Hero />
      <Liderprofile />
      <Post />
      <Posts2 />
      <FooterComponent />
    </div>
  );
}

export default LandingPage;
