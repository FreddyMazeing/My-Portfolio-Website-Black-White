import React from "react";
import img1 from "../assets/photography/img1.webp";
import img4 from "../assets/photography/img4.webp";
import kid from "../assets/photography/kid.webp";
import lion from "../assets/photography/lion.webp";
import lion2 from "../assets/photography/lion2.webp";
import meat from "../assets/photography/meat.webp";
import meat2 from "../assets/photography/meat2.webp";
import meat3 from "../assets/photography/meat3.webp";
import meat4 from "../assets/photography/meat4.webp";
import mz from "../assets/photography/mz.webp";
import mz2 from "../assets/photography/mz2.webp";
import mz3 from "../assets/photography/mz3.webp";
import mz4 from "../assets/photography/mz4.webp";
import nerdy from "../assets/photography/nerdy.webp";
import ng from "../assets/photography/ng.webp";
import wes from "../assets/photography/wes.webp";
import wes2 from "../assets/photography/wes2.webp";
import wes3 from "../assets/photography/wes3.webp";
import wes4 from "../assets/photography/wes4.webp";
import zz3 from "../assets/photography/zz3.webp";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Gallery = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-full min-h-screen pb-10 flex flex-col items-center justify-center bg-gradient-to-b from-slate-950/30 to-blue-600/20 ">
        <div className="relative max-w-full min-h-screen flex flex-col items-center justify-center">
          <div
            className="absolute bottom-0 left-0 opacity-50 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
        bg-[size:100px_100px]"
          ></div>
          <div className="my-10 text-center z-20">
            <h1 className="mt-20 uppercase">Gallery</h1>
            <p className="text-xs lowercase text-slate-500">
              Explore My Photography Journey!
            </p>
          </div>
          <div className="grid grid-cols-2 md:gap-1 mx-2 z-20  md:grid-cols-6 max-w-7xl ">
            <img
              src={ng}
              alt=""
              className="  hover:scale-150 md:hover:scale-125   hover:translate-x-1/2 md:hover:translate-x-0  duration-300 ease-in-out"
            />

            <img
              src={wes3}
              alt=""
              className=" hover:scale-150  md:hover:scale-125 hover:-translate-x-1/2 md:hover:translate-x-0  duration-300 ease-in-out"
            />
            <img
              src={lion}
              alt=""
              className=" hover:scale-150 md:hover:scale-125 duration-300 ease-in-out  hover:translate-x-1/2 md:hover:translate-x-0 "
            />
            <img
              src={wes}
              alt=""
              className="  hover:scale-150  md:hover:scale-125 hover:-translate-x-1/2 md:hover:translate-x-0  duration-300 ease-in-out"
            />
            <img
              src={mz4}
              alt=""
              className="  hover:scale-150 md:hover:scale-125 duration-300 ease-in-out  hover:translate-x-1/2 md:hover:translate-x-0 "
            />
            <img
              src={mz2}
              alt=""
              className="  hover:scale-150  md:hover:scale-125 hover:-translate-x-1/2 md:hover:-translate-x-10  duration-300 ease-in-out"
            />

            <img
              src={nerdy}
              alt=""
              className="  hover:scale-150 md:hover:scale-125 duration-300 ease-in-out rounded-lg hover:translate-x-1/2 md:hover:translate-x-0 "
            />
            <img
              src={kid}
              alt=""
              className="  hover:scale-150  md:hover:scale-125 hover:-translate-x-1/2 md:hover:translate-x-0  duration-300 ease-in-out"
            />
            <img
              src={meat4}
              alt=""
              className=" hover:scale-150 md:hover:scale-125 duration-300 ease-in-out rounded-lg hover:translate-x-1/2 md:hover:translate-x-0 "
            />
            <img
              src={meat2}
              alt=""
              className="  hover:scale-150  md:hover:scale-125 hover:-translate-x-1/2 md:hover:translate-x-0  duration-300 ease-in-out"
            />
            <img
              src={meat3}
              alt=""
              className="  hover:scale-150 md:hover:scale-125 duration-300 ease-in-out  hover:translate-x-1/2 md:hover:translate-x-0 "
            />
            <img
              src={meat4}
              alt=""
              className="   hover:scale-150  md:hover:scale-125 hover:-translate-x-1/2 md:hover:-translate-x-10  duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
