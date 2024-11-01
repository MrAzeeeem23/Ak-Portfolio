import React from 'react';
import './design.css';
import { NavLink } from 'react-router-dom';
import img from "../assets/it's ak.jpg"

function Home() {
  return (
    <div className="h-screen w-full">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 h-full">
        <div className="bg-white-300 col-span-1 md:col-span-1 md:row-span-full flex items-center justify-center p-3">
          <div className="w-full md:-rotate-90 h-0 text-center flex justify-between items-center">
            <img src={img} alt="logo" className='w-12 rounded-full'/>
              <div className='[&>*]:px-2 text-2xl flex'>
                <a href="https://www.linkedin.com/in/azeem-khan62?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="bi bi-github"></i></a>
                <a href="https://github.com/MrAzeeeem23"><i class="bi bi-linkedin"></i></a>
              </div>
          </div>
        </div>

        <div className="bg-white text-black col-span-1 md:col-span-4 flex items-center p-5">
          <div className='mt-10 md:mt-20'>
            <h1 className='text-4xl mb-2'>AzeemKhan</h1>
            <h1 className='text-xl text-gray-700'>Software Developer</h1><br />
            <p className='text-gray-400'>"I’m Azeem Khan, a passionate developer dedicated to crafting dynamic, responsive, and user-centered applications using modern technologies."</p>
          </div>
        </div>

        <div className="bg-white text-black col-span-1 md:col-span-7 flex flex-col justify-center gap-4 p-5">
          <NavLink to="/about" className="linktext LinkStyle">About</NavLink>
          <NavLink to="/projects" className="linktext LinkStyle">Project</NavLink>
          <NavLink to="/contact" className="linktext LinkStyle">Contact</NavLink>
          <NavLink to="/contact" className="linktext LinkStyle">GitHub</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
