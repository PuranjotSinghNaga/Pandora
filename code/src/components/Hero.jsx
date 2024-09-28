"use client";

import React from "react";
import ProdDesc from "./ProdDesc";
import Meet from "./Meet";

const Hero = () => {
  return (
    <div className="min-h-screen w-full relative bg-black flex flex-col">
      <div className="flex items-center justify-center pt-20 flex-col">
        <h1 className="text-purple-800 text-6xl p-5 m-4 font-semibold text-center">Pandora</h1>
        <h2 className="text-slate-300 text-4xl font-thin text-center mb-8">
          The Efficient Data Log Manager
        </h2>
      </div>
      <ProdDesc />
      <div className="my-10 p-5">
        <p className="text-purple-800 text-center text-5xl font-bold mb-6">Meet Our Teams</p>
        <Meet />
      </div>
    </div>
  );
};

export default Hero;
