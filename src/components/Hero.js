import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="text-7xl font-bold py-2">Less Risks.</h1>
        <h1 className="text-7xl font-bold">
          More <span className="text-[#4E989F]">Growth.</span>
        </h1>
        <p className="text-lg font-normal py-2">
          Adopt an all-in-one proactive approach to address and mitigate
          Psychological
          {/* Health risk and calculate Overall organization
          Well-being. */}
        </p>
        <button
          className="bg-[#4E989F] px-4 py-2 text-white
        rounded-md font-medium mt-2"
        >
          Contact Me
        </button>
      </div>
      <StaticImage src="../images/Group 43156.svg" alt="" className="w-auto" />
    </div>
  );
};
