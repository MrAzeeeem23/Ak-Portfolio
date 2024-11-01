import React from 'react'
import { NavLink } from 'react-router-dom'
import DarkModeToggle from '../utility/DarkButton.jsx'

function BackNav() {
  return (
    <div className='w-full flex justify-between bg-gray-100 text-black p-4 shadow-lg dark:bg-gray-900 dark:text-white'>
        <NavLink to='/' className='hover:line-through text-xl md:mx-14 mx-2 underline transition-all font-Playfair_Display'>Home</NavLink>
        <div className='md:mx-14 mx-2'>
        <DarkModeToggle />
        </div>
    </div>
  )
}

export default BackNav