import React from 'react'
import { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

const Navigation = () => {


  const [nav,setNav] = useState(false);
  return (
    <div className='h-screen w-full'>
    <div className='w-full h-[7vh] bg-blue-400 flex'> 
        <div className='flex justify-between w-[80%] mx-auto items-center'>
          <h1 className='
          xxs:hidden md:flex'>petfinder</h1>
          <div className='flex justify-center'>
          <AiOutlineMenu className='mr-2 cursor-pointer md:hidden' size={25} onClick={()=> setNav(!nav)}></AiOutlineMenu>
          <h1 className='text-xl
          md:hidden'>petfinder</h1>
          </div>
          <ul className='flex'>
            <li className='border-l-2 border-black mr-6'></li>
            <li>Login</li>
            <li className='ml-6'>Signup</li>
          </ul>
        </div>

      <div className={ nav ? 'bg-black/80 w-full fixed h-screen z-10 top-0 left-0 duration-200' : 'fixed'}>
      <div className={nav ? 'bg-white w-[80%] fixed top-0 left-0 z-10 h-screen duration-200' : 'fixed left-[-100%] w-[-300px] top-0 duration-300'}>
      <AiOutlineClose className='absolute top-4 right-4 cursor-pointer' 
                    onClick={()=> setNav(!nav)}  size={30}></AiOutlineClose> 
      </div>
      </div>


    </div>

    <div className='w-full h-[6vh] bg-red-400 flex justify-center
      xxs:hidden md:flex'> 

      <ul className='flex items-center justify-between bg-red-500 w-[80%]'>
        <li className=''>Psi i lorem</li>
        <li className=''>Macke i macici</li>
        <li className=''>Kunici i glodavci</li>
        <li className=''>Ostale zivotinje</li>
      </ul>
    </div>
    
    </div>
  )
}

export default Navigation