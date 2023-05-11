import image from '../../assets/man_with_dog.png';

function SingUp() {

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-slate-300 w-[30%] mx-auto box-border p-[2%] flex items-center justify-center relative 2xl:w-[40%] lg:w-[50%] md:w-[70%] md:p-[4%]">
                <div className="w-[65%] mx-auto absolute top-[10px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img src={image} alt="man_with_dog" className="w-[full]"/>
                </div>
                <form id="signUpForm" className="mt-[40%] w-[100%]">
                    <input type="text" placeholder="Name" className="block mb-[20px] w-[100%] p-[5px]"/>
                    <input type="text" placeholder="Email" className="block mb-[20px] w-[100%] p-[5px]"/>
                    <input type="text" placeholder="Phone Number" className="block mb-[20px] w-[100%] p-[5px]"/>
                    <input type="text" placeholder="Password" className="block mb-[20px] w-[100%] p-[5px]"/>
                    <div className="flex my-[40px] items-center justify-center">
                        <button type="submit" className="bg-orange-700 text-white w-[100px] h-[40px] mx-[30px]">Sign Up</button>
                        <span className="mx-[30px] text-red-500">Cancel</span>
                    </div>
                    <div className="flex items-center justify-center">
                        <span className="mr-[15px]">Imaš već profil?</span>
                        <span className="underline">Uloguj se ovdje!</span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SingUp;