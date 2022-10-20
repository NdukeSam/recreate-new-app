import React from "react";
import HeroImg from "./HeroImg";
import Img from "../images/dark-skin-tone-6.jpg";
import SecondImg from "../images/chestnut-skin-color.jpg";

function Hero() {
  return (
    <div className="w-full bg-black pt-8 text-white">
      <div className="mt-8 mb-4">
        <h1 className="hero--header text-center text-2xl sm:text-5xl">Learning React</h1>
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <p className=" text-red-300 px-5 md:w-[60%] sm:text-lg text-2xl">
            The first name on our list of skin tone names or skin tone colors is
            ivory. An ivory skin tone is usually a little darker than a porcelain
            skin tone. People with this type of skin tone could have a golden,
            peach, pinkish, or even a bluish undertone. 
        
          </p>
        
            <div className="grid gap-[2rem] md:grid-cols-2 w-full pt-7 md:pt-1">
              <HeroImg className="hover:shadow-lg transform transition hover:-translate-y-2 mx-auto rounded-2xl h-[20rem] w-[20rem]" Img={Img} />
              <HeroImg className="hover:shadow-lg transform transition hover:-translate-y-2 mx-auto rounded-2xl h-[20rem] w-[20rem]" Img={SecondImg} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
