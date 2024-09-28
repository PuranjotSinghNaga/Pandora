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
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="white"  
        />
      </div>
      <div className="flex items-center justify-center absolute inset-0">
        <div className="flex flex-col items-center justify-center relative z-10 h-full text-center">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
            <h2 className="tracking-widest my-5 text-4xl font-extrabold text-blue-100">
              INFRA MONITORING TOOL
            </h2>
            <ProdDesc />
            <Meet/>
            <a href="#about" className="mt-8">
              <MagicButton
                title="About our Project"
                icon={<RiArrowDropDownLine />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
