import React from "react";
import { Link } from "react-router-dom";
import MyImage from "../assets/All Images/P3OLGJ1 copy 1.png";

const Banner = () => {
  return (
    <div>
      <div className="md:flex items-center">
        <div className=" md:pe-10">
          <h1 className="text-6xl font-bold my-4 mt-20 lg:pe-24">
            One Step Closer To Your{" "}
            <span className="text-violet-500 to-fuchsia-500">
              Dream Job
            </span>
          </h1>
          <p className=" mb-5 text-slate-400 font-medium font-Manrope">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <Link className=" text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 p-2 rounded-md font-bold">
            Get Started
          </Link>
        </div>

        <img width={"470px"} src={MyImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
