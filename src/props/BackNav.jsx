import React from 'react'
import { NavLink } from 'react-router-dom'

function BackNav() {
  return (
    <div className='w-full bg-gray-100 text-black p-4 shadow-lg'>
        <NavLink to='/' className='hover:line-through text-xl md:mx-14 mx-2 underline transition-all font-Playfair_Display'>Home</NavLink>
    </div>
  )
}

export default BackNav