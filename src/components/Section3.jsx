import React from 'react'
import HeroImg from './HeroImg'
import screen1 from '../images/screenshot-img1.jpg'
import screen2 from '../images/screenshot-img2.jpg'
import screen3 from '../images/screenshot-img3.jpg'
import screen4 from '../images/screenshot-img4.jpg'

const Section3 = () => {
  return (
    <div className="container text-white text-center m-auto my-48  ">   
        <h1 className='text-4xl '>Screenshots</h1>
        <hr className='w-[300px] mx-auto py-4' />
        <div className=" flex items-center justify-center flex-col md:flex-row gap-5 " >
            <HeroImg className="object-cover hover:shadow-lg transform transition hover:-translate-y-2 h-[500px] rounded-2xl"  Img = {screen1} />
            <HeroImg className="object-cover hover:shadow-lg transform transition hover:-translate-y-2 h-[500px] rounded-2xl" Img = {screen2} />
            <HeroImg className="object-cover hover:shadow-lg transform transition hover:-translate-y-2 h-[500px] rounded-2xl" Img = {screen4} />
            <HeroImg className="object-cover hover:shadow-lg transform transition hover:-translate-y-2 h-[500px] rounded-2xl" Img = {screen3} />
        </div>
    </div>
  )
}

export default Section3;