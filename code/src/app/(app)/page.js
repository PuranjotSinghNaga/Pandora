import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import MagicButton from "@/components/ui/MagicButton";

const Page = () => {
  return (
    <div className="h-screen w-full relative bg-black">
      {/* Background Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="black"  // Set background spotlight to black
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="white"  // Set fill color to white for the spotlight
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="white"  // Set fill color to white for the spotlight
        />
      </div>
      <div className="flex items-center justify-center absolute inset-0">
        <div className="flex items-center justify-center">
          {/* Mask or background overlay */}
          <div className="absolute inset-0 bg-black opacity-40" />
        </div>
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            {/* Edit as you like */}
            <h2 className="uppercase tracking-widest text-s text-center text-blue-100 mb-2">
              Hi, Welcome to Pandoras 
            </h2>
            <h2 className="tracking-widest my-5 text-4xl font-extrabold text-center text-blue-100">
              We are working on a project
            </h2>
            <h2 className="tracking-widest my-5 text-4xl font-extrabold text-center text-blue-100">
              INFRA MONITORING
            </h2>

            <a href="#about" className="mt-8">
              <MagicButton
                title="Learn More"
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

export default Page;
