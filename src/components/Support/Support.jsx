const Support = () => {
    return (
        <div className="flex flex-col justify-center items-center bg-support-pet bg-center bg-cover text-white text-center">
            <h2 className="mt-[15%] mb-[2%] text-7xl font-bold lg:mb-[6%] lg:text-5xl sm:mb-[10%]">Evo Kako Je Vaša Podrška Utjecala U 2023</h2>
            <div className="grid grid-cols-4 mb-[7%] px-[15%] 2xl:grid-cols-3 2xl:gap-y-6 xl:grid-cols-2 md:grid-cols-1 sm:gap-y-10">
                <div>
                    <p className="mb-[15px] text-7xl text-amber-300 font-bold lg:text-5xl">4,019</p>
                    <p className="mb-[25px] text-3xl text-amber-300 font-medium sm:text-2xl">Spašeni životi</p>
                    <button className="text-2xl font-medium">USVOJITE LJUBIMCA</button>
                </div>
                <div>
                    <p className="mb-[15px] text-7xl text-amber-300 font-bold lg:text-5xl">1,347</p>
                    <p className="mb-[25px] text-3xl text-amber-300 font-medium sm:text-2xl">Udomljeni kućni ljubimci</p>
                    <button className="text-2xl font-medium">UDOMI LJUBIMCA</button>
                </div>
                <div>
                    <p className="mb-[15px] text-7xl text-amber-300 font-bold lg:text-5xl">11,348</p>
                    <p className="mb-[25px] text-3xl text-amber-300 font-medium sm:text-2xl">Volonterski sati</p>
                    <button className="text-2xl font-medium">POSTAVI VOLONTER</button>
                </div>
                <div className="2xl:col-span-3 xl:col-span-1">
                    <p className="mb-[15px] text-7xl text-amber-300 font-bold lg:text-5xl">3,583</p>
                    <p className="mb-[25px] text-3xl text-amber-300 font-medium sm:text-2xl">Kućni ljubimci sterilizirani/kastrirani</p>
                    <button className="text-2xl font-medium">DONIRAJTE</button>
                </div>
            </div>
        </div>
    )
}

export default Support;