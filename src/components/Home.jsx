import React, { useRef } from "react";
import "./design.css";
import { NavLink } from "react-router-dom";
import img from "../assets/it's ak.jpg";
import DarkModeToggle from "../utility/DarkButton.jsx";

import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import { animationFedeIn, staggeredFadeIn } from '../utility/animation.js'

function Home() {
  const container = useRef();

  useGSAP(() => {
    animationFedeIn(container.current)
    staggeredFadeIn('.innerbox div')
  })

  return (
    <div ref={container} className="h-screen w-full">
      <div className="innerbox grid grid-cols-1 md:grid-cols-12 gap-0 h-full">
        <div className="bg-white-300 col-span-1 md:col-span-1 md:row-span-full flex items-center justify-center p-3">
          <div className="w-full md:-rotate- md:h-full text-center flex md:flex-col-reverse justify-between items-center">
            <img
              src={img}
              alt="logo"
              className="w-12 rounded-full md:-rotate-90"
            />
            <hr className="w-40 md:-rotate-90 text-white"/>
            <div className="[&>*]:px-2 text-2xl flex md:-rotate-90 md:mt-12">
              <a href="https://www.linkedin.com/in/azeem-khan62?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target={"_blank"}>
                <i class="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/MrAzeeeem23" target={"_blank"}>
                <i class="bi bi-github"></i>
              </a>
              <DarkModeToggle />
            </div>
          </div>
        </div>

        <div className="bg-white text-black col-span-1 md:col-span-4 flex items-center p-5 dark:bg-gray-950 dark:text-white">
          <div className="mt-10 md:mt-20">
            <h1 className="text-4xl mb-2">AzeemKhan</h1>
            <h1 className="text-xl text-red-700 ">Software Developer</h1>
            <br />
            <p className="text-gray-400">
              "I’m Azeem Khan, a passionate developer dedicated to crafting
              dynamic, responsive, and user-centered applications using modern
              technologies."
            </p>
          </div>
        </div>

        <div className="bg-white text-black col-span-1 md:col-span-7 flex flex-col justify-center gap-4 p-5  dark:bg-gray-950 dark:text-white">
          <NavLink to="/about" className="linktext LinkStyle">
            About
          </NavLink>
          <NavLink to="/projects" className="linktext LinkStyle">
            Project
          </NavLink>
          <NavLink to="/contact" className="linktext LinkStyle">
            Contact
          </NavLink>
          <NavLink to="/contact" className="linktext LinkStyle">
            GitHub
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
