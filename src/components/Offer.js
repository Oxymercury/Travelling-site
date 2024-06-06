import React,{useEffect} from "react";
import Plane from '../images/plane.png';
import Featured1 from '../images/featured-1.jpg';
import Featured2 from '../images/featured-2.jpg';
import Featured3 from '../images/featured-3.jpg';
import AOS from "aos";
import "aos/dist/aos.css"; 


const Offer = () =>{
    useEffect(() => {
        AOS.init({duration:"2000"})
    })
    return (
        <section id="Offer" className=" font-sans" data-aos = "fade-up">
        <div className="flex md:flex-row flex-col md:justify-between md:items-center  mx-8 text-justify ">
            <div className="border-[1px] rounded-3xl p-6 md:w-[62.5rem] ">
                <p className="uppercase text-slate-500 md:text-[12px] text-[8px] mb-7">featured offers</p>
                <p className="font-bold  text-1xl md:text-3xl mb-4">Unlock Exclusive Travel Deals</p>
                <p className="text-slate-500 text-[12px]">Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                    Accusantium Esse Labore,</p>
                <div className="flex md:flex-row flex-col justify-between md:items-center">
                    <button className="bg-green-950 text-white md-text-xl text-[12px] w-[6.25rem] md:mx-0 mx-auto md:px-4 md:py-1 px-2 py-0 my-4  rounded-2xl hover:bg-green-700 transition-all">Show
                        More</button>
                    <img className="md:w-[31.25rem] md:h-[12.5rem]  h-[9.375rem]" src={Plane} alt="" />
                </div>
            </div>
            <img className="md:w-[37.25rem] md:h-[22.5rem] md:mx-7  h-[18.75rem] my-4 object-cover rounded-3xl cursor-pointer hover:scale-95 transition-all" src={Featured1} alt="" />
        </div>
        <div className="flex md:flex-row flex-col justify-between md:items-center  mx-8">
            <img className="md:w-[52.875rem] md:h-[25rem] h-[18.75rem] rounded-3xl mb-3 md:mr-4  cursor-pointer md:hover:scale-95 transition-all" src={Featured2} alt="" />
            <img className="md:w-[52.875rem] md:h-[25rem] h-[18.75rem] rounded-3xl my-4 md:mx-4 cursor-pointer md:hover:scale-95 transition-all" src={Featured3} alt="" />
        </div>
    </section>
    );
}


export default Offer;