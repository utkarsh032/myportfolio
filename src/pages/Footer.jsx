import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='flex justify-between text-lg text-gray-600 bg-white px-8 m-4 rounded-b-xl'>
      <div><p>Copyright 2023, <Link className='text-gray-900 font-semibold ' to={'/'}>Utkarsh</Link> All right Reserved</p></div>

      <div className=''>
        <ul className='flex gap-6'>
          <li className='hover:text-black hover:font-semibold'><Link to={'/'}>Youtube</Link></li>
          <li className='hover:text-black hover:font-semibold'><Link to={'/'}>Twitter</Link></li>
          <li className='hover:text-black hover:font-semibold'><Link to={'/'}>LinkedIn</Link></li>
          <li className='hover:text-black hover:font-semibold'><Link to={'/'}>Discord</Link></li>
        </ul>
      </div>
    </div>
  )
}
