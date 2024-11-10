import React from 'react'
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='container pt-10'>
        <div className='flex justify-between'>
            <div className='text-2xl '>Portfolio-Ahmed</div>
            <ul className='gap-2 lg:gap-16 hidden md:flex'>
            <li className='manuLink text-2xl'><a href='#hero'>Home</a></li>
            <li className='manuLink text-2xl'><a href='#about'>About us</a></li>
            <li className='manuLink text-2xl'><a href='#projects'>Projects</a></li>
            <li className='manuLink text-2xl '><a href='#contact'>Contact</a></li>
            </ul>
            <FiMenu size={35} color='#ffffff'/>  
        </div>
    </div>
  )
}

export default Navbar