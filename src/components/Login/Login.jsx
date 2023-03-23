import React from 'react'
import image from '../../assets/man_with_dog.png';

const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center">
            <div className="bg-slate-300 w-[600px] mx-auto box-border py-[40px] flex items-center justify-center">
              <div className="w-[350px] mx-auto absolute top-[220px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img src={image} alt="man_with_dog" className="w-[full]"/>
                </div>
                <form id="loginForm" class="form mt-[180px]">
                    <input type="text" placeholder="Email" className="block mb-[20px] w-[500px] p-[5px]"/>
                    <input type="text" placeholder="Password" className="block mb-[20px] w-[500px] p-[5px]"/>
                    <div className="flex my-[40px] items-center justify-center">
                        <button type="submit" className="bg-orange-700 text-white w-[100px] h-[40px] mx-[30px]">Sign Up</button>
                    </div>
                    <div className="flex items-center justify-center">
                        <span className="mr-[15px]">Nemaš profil?</span>
                        <span className="underline">Kreiraj ga ovdje!</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <span className="mr-[15px]">Zaboravio si šifru?</span>
                        <span className="underline">Resetuj je ovdje!</span>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default Login