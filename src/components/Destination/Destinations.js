import React,{useEffect} from "react";
import DestinationCompo from "./Destinationcompo";
import AOS from "aos";
import "aos/dist/aos.css"; 


const Destination = () =>{
    useEffect(() => {
        AOS.init({duration:"2000"})
    })
    return (
        <div>
        <section id="Destination" className="flex md:flex-row flex-col md:justify-between md:items-center  content-start font-sans" data-aos = "fade-right">
        <div className="mx-12 ">
            <p className="uppercase md:text-xl text-[0.75rem]  text-left text-slate-500 md:my-7 md:mb-2 my-2 whitespace-nowrap">DestinationS</p>
            <h1 className="font-extrabold md:text-5xl text-3xl md:py-5 py-[0.125rem] whitespace-nowrap">City Escape And </h1>
            <h1 className="font-extrabold md:text-5xl text-3xl whitespace-nowrap">Nature Retreats</h1>
        </div>
        <div className="mx-12">
            <p className="md:w-[37.5rem] text-slate-500 md:text-[1rem] text-[0.625rem] text-justify py-4">Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Sed aliquam quis, reprehenderit ducimus beatae aperiam ea adipisci
                atque mollitia iure libero dolor facere nesciunt cum, natus eveniet ad perspiciatis soluta ut
                voluptates, tempore totam quam? Fuga reprehenderit adipisci </p>
            <p className="font-bold text-green-400 cursor-pointer md:text-xl text-[0.75rem] h">Explore More <span className="font-bold text-xl px-2 cursor-pointer  ">&rarr;</span></p>
        </div>
    </section>
    <DestinationCompo />
    </div>
    );
}


export default Destination;