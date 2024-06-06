import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 


const Footer = () =>{
    useEffect(() => {
        AOS.init({duration:"2000"})
    })
    return (
        <footer id="footer" className="m-[50px] mx-[20px] flex md:flex-row flex-col md:justify-around md:items-center content-start bg-blue-950 rounded-3xl md:p-8 px-4 text-white  font-sans" data-aos = "fade-up">
        <div className="md:w-[500px]">
            <p className="font-semibold my-7 text-xl ">TravelX</p>
            <p className="text-slate-600 my-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia asperiores qui ducimus aspernatur reprehenderit iste voluptate nobis ea soluta laboriosam reiciendis temporibus accusantium natus optio tempora dolore in, laborum dignissimos tempore incidunt a aut.</p>
            <p className="my-0">Get in Touch</p>
            <p className="text-slate-600  mb-0">Example@Mail.Com</p>
            <div className="bg-blue-400 w-[145px] h-[2px] rounded-xl mb-3"></div>
            <div className="flex justify-start items-center">
                <i className="fi-snsuxl-facebook m-1 cursor-pointer"></i>
                <i className="fi-snsuxl-twitter-solid m-1 cursor-pointer"></i>
                <i className="fi-snsuxl-linkedin m-1 cursor-pointer"></i>
            </div>
        </div>
        <div >
            <ul>
                <li className="m-3 font-semibold">About Us</li>
                <li className="m-3 cursor-pointer hover:text-slate-500" >About Us</li>
                <li className="m-3 cursor-pointer hover:text-slate-500" >Our Term</li>
                <li className="m-3 cursor-pointer hover:text-slate-500" >Careers</li>
                <li className="m-3 cursor-pointer hover:text-slate-500" >Mission And Values</li>
                <li className="m-3 cursor-pointer hover:text-slate-500" >Partnerships</li>
            </ul>
        </div>
        <div>
            <ul>
                <li className="m-3 font-semibold">Help</li>
                <li className="m-3 cursor-pointer hover:text-slate-500" >FAQ</li>
                <li className="m-3 cursor-pointer hover:text-slate-500" >Booking Guide</li>
                <li className="m-3 cursor-pointer hover:text-slate-500" >Cancellation Policy</li>
                <li className="m-3 cursor-pointer hover:text-slate-500" >Site Map</li>
            </ul>
        </div>
        <div>
            <ul>
                <li className="m-3 font-semibold">Resources</li>
                <li className="m-3 cursor-pointer hover:text-slate-500" >Newsletter</li>
                <li className="m-3 cursor-pointer hover:text-slate-500" >Blog</li>
                <li className="m-3 cursor-pointer hover:text-slate-500" >Gallery</li>
                <li className="m-3 cursor-pointer hover:text-slate-500" >Offers</li>
            </ul>
        </div>
    </footer>

    );
}

export default Footer;