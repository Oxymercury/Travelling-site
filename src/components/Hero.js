import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 


const Hero = () => {
    useEffect(() => {
        AOS.init({duration:"2000"})
    })

    return (
        <section  className="flex-col content-center justify-center w-full h-full my-[12.5rem] text-white  font-sans " data-aos = "fade-up">
        <div className="flex-col justify-center items-center w-full h-full">
            <p className="md:text-[17px] text-[15px] text-center my-7 hover:scale-150 hover:font-bold ease-in-out duration-500 cursor-pointer">TRAVELX</p>
            <p className="md:text-6xl text-[30px] font-extrabold text-center my-3 ">Let's Embark On Your</p>
            <p className="md:text-6xl text-[30px] font-extrabold text-center my-3 ">Dream Journey</p>
            <p className="md:text-[18px] text-[15px] text-center ">Discover Inspiring Destinations, Create Unforgettable
                Memories, And Travel</p>
            <p className="md:text-[18px] text-[15px] text-center ">With Confidence - Adventure Starts Here</p>
            <div className="flex justify-center items-center text-center my-5 mx-auto">
                <i className="fi-xnluhl-magnifying-glass -mr-[35px] z-10 text-slate-500 font-extrabold"></i>
                <input className="h-[3rem] md:w-[40rem] w-80 rounded-3xl md:px-9 px-4 md:text-xs text-xs  focus:text-black outline-none "
                    type="search" placeholder="Your Journey Begins With A Search..." name="" id="" />
                <button
                    className="md:text-[16px] bg-green-800 -ml-[5.8rem] px-5 py-2 rounded-3xl text-center hover:bg-green-500 hover:text-black transition-all">Search</button>
            </div>
        </div>
    </section>

    );
}


export default Hero;