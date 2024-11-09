import React, { useRef } from "react";
import BackNav from "../props/BackNav.jsx";
import "./design.css";
import img from "../assets/it's ak.jpg";

import gsap from 'gsap';
import { animationFedeIn, staggeredFadeIn } from '../utility/animation.js'
import { useGSAP } from '@gsap/react'

function About() {

  const container = useRef();

  useGSAP(() => {
    animationFedeIn(container.current)
    staggeredFadeIn('.innerbox div',)
  })

  return (
    <div ref={container}  className="innerbox">
      <BackNav />
      <div className="bg-white text-black h-full md:px-40 px-5 py-10 md:flex flex-row dark:bg-gray-950 dark:text-white">
        <div className="mb-10 md:w-[50%] w-full">
          <h1 className="text-8xl mb-10 font-Italiana">About</h1>
          <h2 className="text-2xl heading">
            "I’m Azeem Khan, a passionate developer dedicated to crafting
            dynamic, responsive, and user-centered applications using modern
            technologies."
          </h2>
          <p className="apper mt-10">
            Hello! I’m Pathan Azeemkhan Majidkhan, a passionate full-stack
            developer currently pursuing my Bachelor’s in Computer Applications
            (BCA) at Ajeenkya DY Patil University through Sunstone. With a solid
            foundation in both front-end and back-end technologies from my
            specialization in full-stack development, I am dedicated to building
            seamless, user-focused digital experiences. My journey in software
            development is driven by a curiosity to understand how things work
            and a love for creating solutions that make an impact. I’ve worked
            extensively with the MERN stack and have developed a number of
            projects, including a fully functional e-commerce store with
            integrated payment processing and a robust, scalable back end. I’m
            also exploring data structures and algorithms to sharpen my
            problem-solving skills and deepen my understanding of complex coding
            concepts. Outside of coursework, I’ve taken on leadership roles,
            like managing a team presentation, which has taught me the
            importance of effective communication and teamwork. I’m excited to
            continue growing in this field and contributing to impactful
            projects.
          </p>
        </div>

        <div>
          <img src={img} alt="image" className="w-[17rem] rounded-xl shadow-lg ml-32 sm:block md:block hidden" />
        </div>
        
      </div>
    </div>
  );
}

export default About;
