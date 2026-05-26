import React from "react";
import { Analytics } from "@vercel/analytics/next"
import Notice from "./components/Notice";
import TopBar from "./components/TopBar";
import FooterComponent from "./components/FooterComponent";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className=" bg-[#0A5F85]">
      <Notice />
      <TopBar />
      <LandingPage />
      <FooterComponent />
    </div>
  );
}

export default App;
