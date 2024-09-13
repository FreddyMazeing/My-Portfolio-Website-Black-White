import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import HeroFooter from "./HeroFooter";
import Photography from "./Photography";

const Banners = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <HeroFooter />
      <div className="flex flex-col max-w-full mx-auto min-h-screen ">
        <div className="flex justify-center">Banners</div>
      </div>
      <Photography />
    </div>
  );
};

export default Banners;
