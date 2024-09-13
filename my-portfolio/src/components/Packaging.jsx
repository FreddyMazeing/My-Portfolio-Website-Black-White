import React from "react";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import HeroFooter from "./HeroFooter";
import spicypotato from "../assets/heroassets/Packaging/spicypotato.png";
import Photography from "./Photography";

const Packaging = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <HeroFooter />
      <div className="flex bg-slate-950/30 flex-col max-w-full mx-auto min-h-screen ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-10">
          <img
            src={spicypotato}
            alt=""
            className="w-32 hover:scale-150 duration-300 ease-in-out"
          />
          <img
            src={spicypotato}
            alt=""
            className="w-32 hover:scale-150 duration-300 ease-in-out"
          />
          <img
            src={spicypotato}
            alt=""
            className="w-32 hover:scale-150 duration-300 ease-in-out"
          />
          <img
            src={spicypotato}
            alt=""
            className="w-32 hover:scale-150 duration-300 ease-in-out"
          />
        </div>
      </div>
      <Photography />
    </div>
  );
};

export default Packaging;
