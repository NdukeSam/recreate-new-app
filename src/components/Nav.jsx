import React from 'react'
import logo from '../images/React_logo.png'

const Nav = () => {
  return (
    <nav className="z-10 fixed top-0 left-0 right-0 bg-black backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="max-w-5xl mx-auto px-4 ">
        <div className="flex items-center justify-between h-16">
            <div className="py-5">
              <img src={logo}  className="h-[2.5rem]" alt="logo" />
            </div>

            <div className=" hidden md:flex space-x-4 text-white">
              <a href="#">Dashboard</a>
              <a href="#">About</a>
              <a href="#">Projects</a>
              <a href="#">Contact</a>

            </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;