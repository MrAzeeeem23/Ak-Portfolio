import React, { useRef } from "react";
import BackNav from '../props/BackNav.jsx'
import ProjectCard from '../props/ProjectCard.jsx'
import './design.css'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { animationFedeIn, staggeredFadeIn } from '../utility/animation.js'

// Project fields: name, img, description, github, liveDemo
const projects = [{
  name: "SP-Project-E-Commerce",
  img: 'https://images.pexels.com/photos/4816921/pexels-photo-4816921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  description: "This project is a full-stack e-commerce website built using the MERN stack (MongoDB, Express, React, Node.js) and various other technologies. The application provides a platform for users to browse, search, and purchase products.",
  github: "https://github.com/MrAzeeeem23/SP-Project-E-Commerce-",
  liveDemo: "link"
},
]

function Projects() {

  const container = useRef();

  useGSAP(() => {
    animationFedeIn(container.current)
    staggeredFadeIn('.innerbox .apper')
  })

  return (
    <div ref={container} className='innerbox'>
      <BackNav />
      <div className='apper bg-white text-black w-full h-auto p-2 md:p-8 lg:px-20  dark:bg-gray-800 dark:text-white'>
        <div className='apper m-4 md:m-10'>
          <h1 className='text-7xl md:text-7xl lg:text-8xl font-Italiana'>Projects.</h1>
          <h1 className="capitalize text-lg my-2 font-Playfair_Display">My recent projects </h1>
        </div>
        <div className="apper grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
          {
            projects.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects
