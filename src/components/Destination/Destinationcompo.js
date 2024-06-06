import React,{useEffect} from "react";
import Destination1 from "../../images/destinations-1.jpg";
import Destination2 from "../../images/destinations-2.jpg";
import Destination3 from "../../images/destinations-3.jpg";
import Destination4 from "../../images/destinations-4.jpg";
import HomeBackground from "../../images/home-background.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; 



const DestinationCompo = () =>{
    useEffect(() => {
        AOS.init({duration:"2000"})
    })
    return (
        <section className="my-[130px] mb-[20px]  font-sans" data-aos = "fade-up">
        <div className="flex md:flex-row flex-col justify-center items-center mx-8">
            <img className="md:w-[43.75rem] md:h-[25rem] w-[35rem] h-[18.625rem] rounded-3xl p-3 cursor-pointer md:hover:scale-95 transition-all"
                src={Destination1} alt="" />
            <img className="md:w-[31.25rem] md:h-[25rem] w-[35rem] h-[18.625rem] rounded-3xl p-3 cursor-pointer md:hover:scale-95 transition-all"
                src={Destination2} alt="" />
            <img className="md:w-[31.25rem] md:h-[25rem] w-[35rem] h-[18.625rem] rounded-3xl p-3 cursor-pointer md:hover:scale-95 transition-all"
                src={Destination3} alt="" />
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center mx-8">
            <img className="md:h-[25rem] md:w-[56.25rem] w-[35rem] h-[18.625rem] p-3 rounded-3xl cursor-pointer md:hover:scale-95 transition-all"
                src={Destination4} alt="" />
            <img className="md:h-[25rem] md:w-[47.25rem] w-[35rem] h-[18.625rem] p-3 rounded-3xl cursor-pointer md:hover:scale-95 transition-all"
                src={HomeBackground} alt="" />
        </div>
    </section>
    );
}


export default DestinationCompo;