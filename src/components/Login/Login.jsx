import React from 'react'
import image from '../../assets/man_with_dog.png';

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center">
            <div className="bg-slate-300 w-[30%] mx-auto box-border p-[2%] flex items-center justify-center relative 2xl:w-[40%] lg:w-[50%] md:w-[70%] md:p-[4%]">
              <div className="w-[65%] mx-auto absolute top-[10px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img src={image} alt="man_with_dog" className="w-[full]"/>
                </div>
                <form id="loginForm" className="mt-[40%] w-[100%]">
                    <input type="text" placeholder="Email" className="block mb-[20px] w-[100%] p-[5px]"/>
                    <input type="text" placeholder="Password" className="block mb-[20px] w-[100%] p-[5px]"/>
                    <div className="flex my-[40px] items-center justify-center">
                        <button type="submit" className="bg-orange-700 text-white w-[100px] h-[40px] mx-[30px]">Sign Up</button>
                    </div>
                    <div className="flex justify-center">
                        <div className="grid grid-cols-2 sm:grid-cols-1">
                            <span className="mr-[15px]">Nemaš profil?</span>
                            <span className="underline sm:grid-row sm:mb-4">Kreiraj ga ovdje!</span>
                        
                        
                            <span className="mr-[15px]">Zaboravio si šifru?</span>
                            <span className="underline">Resetuj je ovdje!</span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Login