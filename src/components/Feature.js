import React,{useEffect} from "react";
import Trust from '../images/trust.png';
import Map from '../images/map.png';
import Planning from '../images/planning.png';
import AOS from "aos";
import "aos/dist/aos.css"; 

const Feature = () =>{
    useEffect(() => {
        AOS.init({duration:"2000"})
    })
    return (
        <section id="Feature" className="flex flex-col md:flex-row justify-center   md:mt-[16.75rem]  mt-[25rem] font-sans" data-aos = "fade-up">
        <div className="md:mt-[6.25rem] p-10">
            <img className="h-[20vh] mx-auto my-auto p-4 md:hover:scale-110 transition-all duration-[3000] cursor-pointer " src={Trust} alt="" />
            <p className="text-center font-bold py-3">Seamless Travel Planning</p>
            <p className="text-[0.875rem] text-center text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Ipsum, magnam. Nihil magnam error similique, harum consequatur, obcaecati ea facere quis porro delectus
                ullam magni voluptates corrupti rerum iusto at fuga.</p>
        </div>
        <div className="md:mt-[6.25rem] p-10">
            <img className="h-[20vh] mx-auto my-auto p-4 md:hover:scale-110 transition-all duration-[3000] cursor-pointer " src={Map} alt="" />
            <p className="text-center font-bold py-3">Tailored Experiences</p>
            <p className="text-[0.875rem] text-center text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Itaque, autem? Reiciendis ab fuga eveniet itaque corrupti provident vero, error nisi laboriosam.
                Cupiditate velit consequatur ipsa, est dicta nisi doloremque modi?</p>
        </div>
        <div className="md:mt-[6.25rem] p-10">
            <img className="h-[18vh] mx-auto my-auto p-4 md:hover:scale-110 transition-all duration-[3000] cursor-pointer " src={Planning} alt="" />
            <p className="text-center font-bold py-3">Reliable And Trustworthy</p>
            <p className="text-[0.875rem] text-center text-slate-600">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati molestiae eveniet natus vero fugiat laboriosam aspernatur delectus amet iste fuga. Minima
                praesentium soluta at fugiat nisi nulla doloribus totam? Delectus.</p>
        </div>
    </section>

    );
}

export default Feature;