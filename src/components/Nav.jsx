import React from 'react'
import logo from '../images/React_logo.png'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import  { useState } from "react";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav)


  return (
    <nav className="z-10 fixed top-0 left-0 right-0 bg-black backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="max-w-8xl mx-auto px-4 container">
        <div className="flex relative items-center justify-between h-16">
            <div className="py-5">
              <img src={logo}  className="h-[2.5rem]" alt="logo" />
            </div>

            <div className=" hidden md:flex space-x-4 text-white">
              <button className="cursor">Dashboard</button>
              <button className="cursor">About</button>
              <button className="cursor">Projects</button>
              <button className="cursor">Contact</button>

            </div> 
                <div className="md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="  w-5" /> : <XIcon className="text-white w-5 "/>}
          
        </div>          
        </div>
    

        <ul className={!nav ? 'hidden' : 'absolute w-full pr-8 text-zinc-300 '}>
            <li className='border-b border-zinc-300 w-full'>Dashboard</li>
            <li className='border-b border-zinc-300 w-full'>About</li>
            <li className='border-b border-zinc-300 w-full'>Projects</li>
            <li className='border-b border-zinc-300 w-full'>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav;