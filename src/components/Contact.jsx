import React, { useState, useRef } from "react";
import BackNav from "../props/BackNav.jsx";

import gsap from 'gsap';
import { animationFedeIn, staggeredFadeIn } from '../utility/animation.js'
import { useGSAP } from '@gsap/react'

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("collab😁");
  const [compose, setCompose] = useState("");

  const handleMailtoLink = () => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(
      `Message: ${compose}\n\nName: ${fullName}\nEmail: ${email}`
    );
    return `mailto:azeemkh528@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
  };

  const handleSubmit = (e) => {
    if (!fullName || !email || !compose) {
      e.preventDefault();
      alert("Please fill in all fields");
    } else {
      alert("Thanks for connecting with us!, we will get back to you soon");
    }
  };

  // _________________________GSAP

  const container = useRef();

  useGSAP(() => {
    animationFedeIn(container.current)
    staggeredFadeIn('.innerbox div')
  })
  
  return (
    <div ref={container} className='innerbox'>
      <BackNav />
      <div className="w-full bg-white text-black flex flex-col justify-between  dark:bg-gray-950 dark:text-white">
        <div className="m-5 pt-2 sm:m-10">
          <h1 className="text-7xl sm:text-7xl lg:text-7xl font-Italiana">Contact us</h1>
        </div>
        <div className="m-5 sm:m-10 flex flex-col lg:flex-row lg:justify-around ">
          <div className="mt-10 lg:mt-20 mb-10 lg:mb-20">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-Poppins">Hello!</h1>
            <div className="w-full lg:w-[40rem] mt-4">
              <h1 className="inline mr-2 text-lg sm:text-xl">Email:</h1>
              <a href="mailto:azeemkh528@gmail.com" className="underline text-lg sm:text-xl">azeemkh528@gmail.com</a>
              <div className="mt-2">
                <span className="text-lg sm:text-xl">On the Internet: </span>
                <div className="inline text-lg sm:text-xl">
                  <a
                    href="https://www.linkedin.com/in/azeem-khan62?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="underline hover:line-through"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/MrAzeeeem23"
                    className="underline hover:line-through ml-2"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col w-full max-w-lg p-4 bg-gray-300 shadow-md rounded-lg  dark:bg-gray-800 dark:text-white"
          >
            <label htmlFor="fullName" className="text-lg sm:text-xl font-Playfair_Display">
              FullName
            </label>
            <input
              type="text"
              value={fullName}
              required
              placeholder="Enter your Full name"
              onChange={(e) => setFullName(e.target.value)}
              className="border-none p-2 rounded-lg mb-4 mt-2 outline-none text-base dark:bg-gray-900"
            />
            <label htmlFor="email" className="text-lg sm:text-xl font-Playfair_Display">
              Email
            </label>
            <input
              type="email"
              value={email}
              required
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              className="border-none p-2 rounded-lg mb-4 mt-2 outline-none text-base dark:bg-gray-900"
            />

            <label htmlFor="message" className="text-lg sm:text-xl font-Playfair_Display">
              Message
            </label>
            <textarea
              name="message"
              cols="20"
              rows="6"
              value={compose}
              required
              onChange={(e) => setCompose(e.target.value)}
              className="border-none p-2 rounded-lg mb-4 mt-2 outline-none text-base dark:bg-gray-900"
            ></textarea>

            <button
              onClick={handleSubmit}
              className="bg-red-800 p-3 rounded-lg hover:bg-red-600 transition-all"
            >
              <a
                href={handleMailtoLink()}
                className="text-lg sm:text-xl text-white font-Playfair_Display"
              >
                Submit
              </a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
