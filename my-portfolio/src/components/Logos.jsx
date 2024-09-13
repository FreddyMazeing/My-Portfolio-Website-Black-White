import React from "react";
import NavBar from "./NavBar";
import barbielogo from "../assets/heroassets/Barbie/barbielogo.png";
import HeroSection from "./HeroSection";
import HeroFooter from "./HeroFooter";
import Photography from "./Photography";

const Logos = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <HeroFooter />

      <div className="flex bg-slate-950/30 flex-col max-w-full mx-auto min-h-screen ">
        <div className="flex justify-center flex-col items-center">
          <div className=" grid gap-4 grid-cols-2 md:grid-cols-4  mt-10">
            <img
              src={barbielogo}
              alt=""
              className="w-40 hover:scale-150 duration-300 ease-in-out"
            />
            <img
              src={barbielogo}
              alt=""
              className="w-40 hover:scale-150 duration-300 ease-in-out"
            />
            <img
              src={barbielogo}
              alt=""
              className="w-40 hover:scale-150 duration-300 ease-in-out"
            />
            <img
              src={barbielogo}
              alt=""
              className="w-40 hover:scale-150 duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
      <Photography />
    </div>
  );
};

export default Logos;
