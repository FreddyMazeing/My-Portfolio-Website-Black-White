import React from "react";
import NavBar from "./NavBar";
import Headphones2 from "../assets/heroassets/Headphones2.webp";
import feelwaves from "../assets/heroassets/feelwaves.jpg";
import normadic6 from "../assets/heroassets/normadic6.webp";
import fashion from "../assets/heroassets/fashion.webp";
import HeroFooter from "./HeroFooter";
import HeroSection from "./HeroSection";
import Photography from "./Photography";

const Posters = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <HeroFooter />

      <div className="flex bg-slate-950/30 flex-col max-w-full mx-auto min-h-screen ">
        {/* <h1 className="text-center  font-spacegrotesk   "> Posters</h1> */}
        {/* <p className="text-slate-400 lowercase font-sora text-xs font-light text-center mx-2 mt-5">
          Posters are large printed sheets used for{" "}
          <span className="text-red-600 font-bold">{""} advertising</span>
          <span className="text-red-600 font-bold">{""} , decoration</span>, or
          <span className="text-red-600 font-bold">{""} information</span>
          . <br /> They combine text and visuals to grab attention and convey a
          message quickly. <br />
          Posters can be found everywhere, from{" "}
          <span className="text-blue-600 font-bold">
            {""} billboards
          </span> to{" "}
          <span className="text-blue-600 font-bold">{""} bedroom walls</span>,
          and
          <br />
          are a versatile tool for promoting anything from{" "}
          <span className="bg-gradient-to-r to-blue-600 from-red-600 bg-clip-text text-transparent font-bold">
            events to products
          </span>
        </p> */}

        <div className="grid md:grid-cols-4 gap-8  mx-auto mt-10">
          <div className="flex flex-col">
            <img
              src={Headphones2}
              alt="Freddy's artwork "
              className="rounded-lg md:mt-4 w-[400px]  md:w-[200px] duration-300 ease-in-out hover:scale-150 shadow-lg shadow-black"
            />
          </div>
          <div className="">
            <img
              src={feelwaves}
              alt="Freddy's artwork "
              className="rounded-lg md:mt-4 w-[400px]  md:w-[200px] duration-300 ease-in-out hover:scale-150 shadow-lg shadow-black"
            />
          </div>
          <div>
            <img
              src={normadic6}
              alt="Freddy's artwork "
              className="rounded-lg md:mt-4 w-[400px]  md:w-[200px] duration-300 ease-in-out hover:scale-150 shadow-lg shadow-black"
            />
          </div>
          <div>
            <img
              src={fashion}
              alt="Freddy's artwork "
              className="rounded-lg md:mt-4 w-[400px]  md:w-[200px] duration-300 ease-in-out hover:scale-150 shadow-lg shadow-black"
            />
          </div>
        </div>
      </div>
      <Photography />
    </div>
  );
};

export default Posters;
