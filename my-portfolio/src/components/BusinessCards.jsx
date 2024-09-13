import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import HeroFooter from "./HeroFooter";
import babiebcard from "../assets/heroassets/Barbie/babiebcard.png";
import Photography from "./Photography";
const BusinessCards = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <HeroFooter />
      <div className="flex bg-slate-950/30 flex-col max-w-full mx-auto min-h-screen ">
        <div className="grid grid-cols-2 md:grid-cols-4 mx-auto gap-4 mt-10">
          <img
            src={babiebcard}
            alt=""
            className="w-40 hover:scale-150 duration-300 ease-in-out"
          />
          <img
            src={babiebcard}
            alt=""
            className="w-40 hover:scale-150 duration-300 ease-in-out"
          />
          <img
            src={babiebcard}
            alt=""
            className="w-40 hover:scale-150 duration-300 ease-in-out"
          />
          <img
            src={babiebcard}
            alt=""
            className="w-40 hover:scale-150 duration-300 ease-in-out"
          />
        </div>
      </div>
      <Photography />
    </div>
  );
};

export default BusinessCards;
