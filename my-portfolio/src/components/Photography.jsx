import React from "react";
import { Link } from "react-router-dom";

const Photography = () => {
  return (
    <div className="max-w-full py-10 flex flex-col bg-slate-950/30 ">
      <div className="max-w-full  flex flex-col items-center justify-start ">
        <div className="flex mx-4 flex-col justify-center text-4xl items-center uppercase  font-spacegrotesk text-slate-500">
          <h1 className="font-spacegrotesk text-white uppercase text-sm font-light">
            Photography
          </h1>
          <p className="text-sm lowercase text-center  font-spacegrotesk my-2 mx-2 mt-5  mb-16">
            Capturing life's moments with precision and artistry. <br />{" "}
            Offering professional portrait, fashion, event photography tailored
            to you.
          </p>
        </div>
        <Link
          to="/gallery"
          className="bg-slate-900/40 px-8 py-1 text-center text-slate-300  hover:text-red-600 rounded-lg"
        >
          Explore
        </Link>
      </div>
    </div>
  );
};

export default Photography;
