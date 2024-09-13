import React from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import HeroFooter from "./components/HeroFooter";
import Photography from "./components/Photography";
import MotionGraphics from "./components/MotionGraphics";

const App = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <HeroFooter />
      <div className=" pt-10 ">
        <Photography />
      </div>
      <MotionGraphics />
    </>
  );
};

export default App;
