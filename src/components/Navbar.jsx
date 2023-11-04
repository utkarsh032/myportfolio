import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { BiSun } from "react-icons/bi";
import { LuMoonStar } from "react-icons/lu";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };

  }, []);

  return (
    <div className={` flex items-center justify-between bg-white shadow-md px-8 py-4 rounded-t-xl m-4  ${isSticky ? "sticky top-3 left-0 right-0 " : ""}`}>
      <Link to={'/'} className='font-bold uppercase text-3xl text-gray-600 hover:text-gray-700 '>Utkarsh</Link>
      <ul className="md:flex hidden text-lg font-semibold text-gray-600 gap-10 items-center  duration-300">

        <li className=' hover:text-black'><Link to='/about'>About</Link></li>
        <li className=' hover:text-black'><Link to='/skills'>Skills</Link></li>
        <li className=' hover:text-black'><Link to='/projects'>Projects</Link></li>
        <li className=' hover:text-black'><Link to='/contact'>Contact</Link></li>

        <div className=' flex gap-4 items-center text-lg'>
          <li className=' hover:text-black'><Link to='/'><BiSun /></Link></li>
          <li className=' hover:text-black'><Link to='/'><LuMoonStar /></Link></li>

          <button className='bg-gray-200 text-xl font-medium rounded-xl px-3  py-2 shadow-sm  hover:text-white hover:bg-gray-500'>Download CV</button>

        </div>
      </ul>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-black focus:outline-none"
        >
          {isMenuOpen ? (
            <FaXmark />
          ) : (
            <FaBarsStaggered className="h-5 w-5 text-black" />
          )}
        </button>
      </div>


      <ul className={`space-y-4 px-8 mt-20 py-4  ${isMenuOpen ? "block fixed top-0 right-0 left-0 bg-white rounded-l-xl mx-4" : "hidden"
        }`}>

        <li className=' hover:text-black'><Link to='/about'>About</Link></li>
        <li className=' hover:text-black'><Link to='/skills'>Skills</Link></li>
        <li className=' hover:text-black'><Link to='/projects'>Projects</Link></li>
        <li className=' hover:text-black'><Link to='/contact'>Contact</Link></li>


        <button className='bg-gray-200 text-xl font-medium rounded-xl px-3 py-2 shadow-sm  hover:text-white hover:bg-gray-500'>Download CV</button>

      </ul>

    </div>
  )
}
