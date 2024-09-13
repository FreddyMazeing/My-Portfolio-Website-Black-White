import React from "react";
import { Link } from "react-router-dom";

const HivePage = () => {
  return (
    <div className=" flex flex-col max-w-full  ">
      {/* Graphics Component */}
      <div className=" flex flex-col max-w-7xl mx-auto  pb-10">
        <div className="flex mx-4 flex-col justify-center text-4xl items-center uppercase  font-spacegrotesk text-slate-500">
          <h1 className="font-spacegrotesk text-white text-sm font-light">
            Graphics Designs
          </h1>
          <p className="text-sm lowercase text-center font-spacegrotesk my-2 mx-2 mt-5  mb-16">
            I create impactful visuals that connect with your audience. <br />
            From logos to websites and print , we bring your ideas to life.
          </p>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 mx-4 text-slate-400 font-spacegrotesk md:text-sm  text-xl text-center items-center justify-center">
          <Link
            to="/poster"
            className="bg-slate-950 rounded-xl py-2 mx-5 hover:text-red-600 duration-200 ease-in-out   mt-4"
          >
            Posters
          </Link>
          <Link
            to="/logos"
            className="bg-slate-950 rounded-xl py-2 mx-5  hover:text-red-600 duration-200 ease-in-out mt-4"
          >
            Logos
          </Link>
          <Link
            to="/packaging"
            className="bg-slate-950 rounded-xl py-2 mx-5 hover:text-red-600 duration-200 ease-in-out mt-4"
          >
            Packaging
          </Link>

          <Link
            to="/businesscards"
            className="bg-slate-950 px-4 rounded-xl py-2 mx-5 hover:text-red-600 duration-200 ease-in-out mt-4"
          >
            B-Cards
          </Link>
        </ul>

        {/* Poster */}
      </div>
    </div>
  );
};

export default HivePage;
