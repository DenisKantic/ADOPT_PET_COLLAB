import React from 'react'

const Navigation = () => {
  return (
    <div className='h-screen w-full'>
    <div className='w-full h-[7vh] bg-blue-400 flex'>
        <div className='flex justify-between w-[80%] mx-auto items-center'>
          <h1>petfinder</h1>
          <ul className='flex'>
            <li className='border-l-2 border-black mr-6'></li>
            <li>Login</li>
            <li className='ml-6'>Signup</li>
          </ul>
        </div>

    </div>


    <div className='w-full h-[5vh] bg-red-400 flex justify-center'>
      <ul className='flex items-center justify-between w-[80%]'>
        <li className=''>Psi i kucici</li>
        <li className=''>Macke i macici</li>
        <li className=''>Ostale zivotinje</li>
        <li className=''>Ostale zivotinje</li>
      </ul>
    </div>
    
    </div>
  )
}

export default Navigation