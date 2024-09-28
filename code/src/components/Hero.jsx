import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Spotlight } from "@/components/ui/Spotlight";
import MagicButton from "@/components/ui/MagicButton";
import ProdDesc from "./ProdDesc";
import Meet from "./Meet";

const Hero = () => {
  return (
    <div className="min-h-screen w-full relative bg-black">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="black"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="white"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="white" />
      </div>
      <div className="flex items-center justify-center pt-20 flex-col">
        <h1 className="text-white text-[5rem] font-semibold ">Pandora</h1>
        <h2 className="text-slate-300 text-[3rem] font-thin mt-[-2rem]">
          The Efficient Data Log Manager
        </h2>
      </div>
      <ProdDesc />
      <Meet />
      {/* <a href="#about" className="mt-8">
              <MagicButton
                title="About our Project"
                icon={<RiArrowDropDownLine />}
                position="right"
              />
            </a> */}
    </div>
  );
};

export default Hero;
