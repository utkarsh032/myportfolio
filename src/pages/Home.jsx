import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { GoDotFill } from 'react-icons/go'
import { FiGithub } from 'react-icons/fi'
import { FiFigma } from 'react-icons/fi'
import { SlSocialLinkedin } from 'react-icons/sl'



import myProfile from '../assets/profile.jpg'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div className='max-w-md mx-4 bg-white overflow-hidden grid
    grid-cols-2 md:max-w-full px-8 py-28 gap-10 '>

      <div className='w-full space-y-4'>
        <span className='bg-gray-300 px-3 py-2 rounded-t-lg rounded-br-lg cursor-pointer hover:text-white hover:bg-gray-500 '>Hello I'm</span>
        <div>
          <h1 className='font-bold text-6xl text-gray-800 '>Utkarsh Raj</h1>
          <span className='font-semibold text-2xl '>Web Developer</span>
        </div>
        <div className='space-y-4'>
          <p className=''>Hello! I’m Utkarsh Raj a web developer from UttarPradesh
            Bidhuna. and I enjoy creating amazing websites and web
            applications. I'm a web developer specialized in creating
            interactive experiences and functional interfaces using various
            web technologies.
            I enjoy taking complex problems and turning them into simple
            and beautiful websites. As a web developer, I’m likely a
            professional who specializes in creating websites and web
            applications</p>
          <div className=''>
            <Link className='flex items-center underline' to="https://maps.app.goo.gl/BLzxGR4AxihKE12v5"><IoLocationOutline className="animate-bounce " /> Bidhuna, India</Link>
            <p className='flex items-center '><GoDotFill className='text-green-600 animate-pulse ' />Available for new projects</p>
          </div>
        </div>
        <div className=''>
          <ul className='flex gap-4 text-lg px-2'>
            <li className='hover:scale-125'> <Link><FiGithub /></Link> </li>
            <li className='hover:scale-125'> <Link><FiFigma /></Link> </li>
            <li className='hover:scale-125'> <Link><SlSocialLinkedin /></Link> </li>
          </ul>
        </div>
      </div>

      <div className='m-auto'>
        <img src={myProfile} alt='profile' className='h-48 w-auto md:h-auto md:w-72 border-b-10 border-r-10 border-gray-300 shadow-md m-1 p-1' />
      </div>
    </div>
  )
}
