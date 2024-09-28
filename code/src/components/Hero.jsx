"use client";

import React from "react";
import ProdDesc from "./ProdDesc";
import Meet from "./Meet";

const Hero = () => {
  return (
    <div className="min-h-screen w-full relative bg-black">
      <div className="flex items-center justify-center pt-20 flex-col">
        <h1 className="text-purple-800 text-6xl p-5 m-4 font-semibold">Pandora</h1>
        <h2 className="text-slate-300 text-4xl font-thin -mt-4 mb-4">
          The Efficient Data Log Manager
        </h2>
      </div>
      <ProdDesc />
      <div className="m-15 p-5">
        <p className="text-purple-800 text-center text-5xl text-bold">Meet Our Teams</p>
      </div>
    </div>
  );
};

export default Hero;
