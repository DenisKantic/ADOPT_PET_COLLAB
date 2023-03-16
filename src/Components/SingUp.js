import image from '../assets/man_with_dog.png'

function SingUp() {

    return (
        <div className="h-screen flex items-center justify-center">
            <div className="bg-slate-300 w-[600px] box-border py-[40px] mt-[100px] flex-column items-center justify-center relative">
                <div className="w-[350px] mx-auto absolute top-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img src={image} className="w-[full]"/>
                </div>
                <form id="signUpForm" className="w-[500px] mx-auto mt-[220px]">
                    <input type="text" placeholder="Name" className="block mb-[20px] w-[500px] p-[5px]"/>
                    <input type="text" placeholder="Email" className="block mb-[20px] w-[500px] p-[5px]"/>
                    <input type="text" placeholder="Phone Number" className="block mb-[20px] w-[500px] p-[5px]"/>
                    <input type="text" placeholder="Password" className="block mb-[20px] w-[500px] p-[5px]"/>
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