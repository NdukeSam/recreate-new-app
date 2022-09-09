import React from "react";
import HeroImg from "./HeroImg";
import Img from "../images/dark-skin-tone-6.jpg";
import SecondImg from "../images/espresso-brown-skin-tone.jpg";

function Hero() {
  return (
    <div className="Hero py-8">
      <div className="mt-8 mb-4">
        <h1 className="hero--header text-2xl sm:text-4xl">Learning React</h1>
      </div>

      <div className="hero--details flex">
        <p className="hero--text flex-1 text-red-300">
          The first name on our list of skin tone names or skin tone colors is
          ivory. An ivory skin tone is usually a little darker than a porcelain
          skin tone. People with this type of skin tone could have a golden,
          peach, pinkish, or even a bluish undertone. Nicole Kidman and Isla
          Fisher are two famous actresses who are considered to have ivory skin.
          However, some may also find Isla to have a warm autumn skin tone. Like
          an ivory skin tone, an autumn skin tone has a warm undertone (the
          color underneath the skin surface). A person with this type of skin
          tone may have a golden, bluish, or pinkish tint.
        </p>

        <div className="hero--photos flex-2 h-[5rem]">
          <div className="flex h-[13rem]">
            <HeroImg Img={Img} />
            <HeroImg Img={SecondImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
