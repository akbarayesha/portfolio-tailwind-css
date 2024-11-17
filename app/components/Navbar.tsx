import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='container pt-8'>
      <div className='flex justify-between items-center'>
        <div className='text-xl font-medium text-pink-600'>Ayesha</div>
        <ul className='gap-10 lg:gap-16 hidden md:flex '>
          <li className='menuLink hover:text-pink-600'><a href='/'>Home</a></li>
          <li className='menuLink hover:text-pink-600' ><a href='#about'>About</a></li>
          <li className='menuLink hover:text-pink-600'><a href='#projects'>Projects</a></li>
          <li className='menuLink hover:text-pink-600'><a href='#skills'>Skills</a></li>
          <li className='menuLink hover:text-pink-600'><a href='#contact'>Contact</a></li>
      </ul>
      
      <AiOutlineMenu  className='md:hidden' size={30}/>
   </div>
    </div>
  )
}

export default Navbar;
