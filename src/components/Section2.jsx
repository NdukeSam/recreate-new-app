import React from 'react'
import Buttons from './Buttons';

const Section2 = () => {
  return (
    <div className="container mx-auto max-w-[768px] w-[80%] bg-black text-white my-28 pt-8">
        <p className="text-lg sm:text-2xl ">
            Nicole Kidman and Isla
            Fisher are two famous actresses who are considered to have ivory skin.
            However, some may also find Isla to have a warm autumn skin tone. Like
            an ivory skin tone, an autumn skin tone has a warm undertone (the
            color underneath the skin surface).
        </p>
        <Buttons 
            className="text-white hover:bg-blue-400 hover:shadow-lg transform transition hover:-translate-y-1 focus:ring-2 focus:ring-blue ring-offset-2 outline-none focus:bg-blue-500 bg-red-400 rounded block px-5 py-1 mx-auto mt-5"
            text="Learn more"
        />
    </div>  
  )
}

export default Section2;