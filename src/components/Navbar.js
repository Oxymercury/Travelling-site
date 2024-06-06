import React, { useState,useEffect } from "react";
import homeBackground from "../images/home-background.jpg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import AOS from "aos";
import ReactDOM from "react-dom";
import "aos/dist/aos.css"; 



const Navbar = () => {
  let [Nav, ChangeNav] = useState(false);
  useEffect(() => {
    AOS.init({duration:"2000"})
})

  const Menuchange = () => {
    ChangeNav(!Nav);
    ChangeSign(false);
    Changelogin(false);
  };
  
  let [login,Changelogin] = useState(false);
  const Logincome = () =>{
      Changelogin(!login);
      ChangeSign(false);
      ChangeNav(false);
  };

  const ForceClose = () =>{
      Changelogin(false);
      ChangeSign(false);
  };

  let [Sign,ChangeSign] = useState(false);
  const SignPage = () =>{
    ChangeSign(!Sign);
    Changelogin(false);
    ChangeNav(false);
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };




  return (
    <div >
      <div className="absolute w-full h-[900px]   rounded-lg -z-10 overflow-hidden">
        <img
          className=" w-full h-full object-cover"
          src={homeBackground}
          alt="Home Background"
        />
      </div>
      <nav className="flex md:justify-between justify-between font-sans  items-center h-[60px] bg-slate-400/25 my-3 rounded-xl text-white ">
        <div className="ml-8 text-[18px] font-bold flex justify-center items-center">
          <div onClick={Menuchange} className="md:hidden cursor-pointer">
            {Nav ? (
              <AiOutlineClose className="hover:scale-150 ease-in-out duration-300" />
            ) : (
              <AiOutlineMenu className="hover:scale-150 ease-in-out duration-300" />
            )}
          </div>
          <p className="ml-5 hover:scale-150  ease-in-out duration-500 hover:font-semibold cursor-pointer">
            TravelX
          </p>
        </div>
        <ul className=" md:justify-center md:items-center md:flex hidden">
          <li className="px-5 text-[15px] cursor-pointer hover:text-slate-600 transition-all" onClick={() => scrollToSection('/')}>
            Home
          </li>
          <li className="px-5 text-[15px] cursor-pointer hover:text-slate-600 transition-all" onClick={() => scrollToSection('footer')} >
            About
          </li>
          <li className="px-5 text-[15px] cursor-pointer hover:text-slate-600 transition-all whitespace-nowrap" onClick={() => scrollToSection('Offer')}>
            Travel Packages
          </li>
          <li className="px-5 text-[15px] cursor-pointer hover:text-slate-600 transition-all" onClick={() => scrollToSection('Destination')}>
            Destination
          </li>
          <li className="px-5 text-[15px] cursor-pointer hover:text-slate-600 transition-all" onClick={() => scrollToSection('Experience')}>
            Careers
          </li>
        </ul>
        <div className="flex justify-center items-center mr-8">
          <button className="md:mr-4 ml-7 md:text-[15px] text-[13px] bg-none transition-all hover:bg-slate-500/75 px-4 py-1 rounded-2xl whitespace-nowrap md:hover:scale-150  duration-[3000]" onClick={SignPage}>
            Sign Up
          </button>

          <button className="ml-6 text-[15px] bg-green-800 rounded-2xl px-4 py-[2px] md:hover:scale-150 hover:bg-green-600 hover:text-black transition-all duration-[3000]  " onClick={Logincome}>
            Login
          </button>
        </div>

        <div
          className={
            Nav
              ? "absolute left-0 top-[4.8125rem] opacity-90 rounded-2xl h-[25rem] bg-black z-20 w-[12.5rem] ml-4 ease-in-out duration-700 md:hidden"
              : "absolute left-[-100%] opacity-90 top-[4.8125rem] rounded-2xl h-[25rem] bg-black z-20 w-[12.5rem] ml-4 ease-in-out duration-700"
          }
        >
          <ul className="mt-14">
            <li className="p-3 cursor-pointer text-xl hover:text-blue-400 transition-all" onClick={() => scrollToSection('/')}>
              Home
            </li>
            <li className="p-3 cursor-pointer text-xl hover:text-blue-400 transition-all" onClick={() => scrollToSection('footer')}>
              About
            </li>
            <li className="p-3 cursor-pointer text-xl hover:text-blue-400 transition-all" onClick={() => scrollToSection('Offer')}>
              Travel Packages
            </li>
            <li className="p-3 cursor-pointer text-xl hover:text-blue-400 transition-all" onClick={() => scrollToSection('Destination')}>
              Destination
            </li>
            <li className="p-3 cursor-pointer text-xl hover:text-blue-400 transition-all" onClick={() => scrollToSection('Experience')}>
              Careers
            </li>
          </ul>
        </div>


        <div className={login ? "absolute flex flex-col items-center justify-start md:top-[300px] md:left-[450px] w-[350px] h-[350px] left-[20px] top-[250px]  md:w-[800px] md:h-[500px] bg-slate-200 rounded-3xl md:p-[100px] z-40 ease-in-out duration-700 p-[50px]" : "absolute md:left-[-100%] ease-in-out duration-700 w-[350px] left-[-100%] h-[350px]  bg-slate-200 flex flex-col items-center md:w-[800px] md:h-[500px] justify-start md:top-[300px] top-[250px] rounded-3xl md:p-[100px] z-40 p-[50px]" }  >
          <div >
          <AiOutlineClose className="absolute md:top-[40px] md:right-[90px] top-4 right-8 cursor-pointer " size={30} onClick={ForceClose}/>
          <p className="font-bold md:text-2xl text-xl  text-blue-800">Login</p>
          <p className="md:text-[15px] text-[13px] text-slate-600 md:mb-7 mb-3 whitespace-nowrap ">Doesn't have an account yet ? <span className="text-blue-400 decoration-2 hover:font-semibold underline cursor-pointer hover:text-blue-700 ease-in-out duration-200 whitespace-nowrap" onClick={SignPage}>Sign Up</span></p>

          <label  className="text-slate-700 font-semibold md:text-[15px] text-[13px]">Email Address</label><br/>
          <input type="text" className="md:w-[350px] md:mr-7 md:h-11 md:text-[15px] text-[13px] md:rounded-xl rounded-md h-8 md:p-5 p-4 my-1 w-[230px] outline-none focus:text-black"  placeholder="you@example.com"/>
          <div className="flex justify-between items-center">
            <p className="text-slate-700 font-semibold md:text-[15px] text-[13px]">Password</p>
            <p className="text-blue-400 cursor-pointer md:text-[15px] text-[13px] hover:text-blue-700  ease-in-out duration-200 decoration-2 hover:font-semibold underline ">Forget Password ?</p>
          </div>
          <input type="password" className="md:w-[350px] md:mr-7 md:h-11 md:rounded-xl rounded-md md:p-5 md:text-[15px] text-[13px] w-[230px] p-2 md:my-2 mt-1 mb-3 outline-none focus:text-black " placeholder="Enter your Password"/><br/>
          <button className="bg-blue-600 w-full md:my-4 md:p-3 p-2 rounded-xl hover:bg-blue-400 hover:text-black ease-in-out duration-300 " >LOGIN</button>
          </div>


        </div>
        <div className={Sign ? "absolute flex flex-col items-center justify-start md:top-[300px] md:left-[450px] w-[350px] h-[400px] left-[20px] top-[250px]  md:w-[800px] md:h-[550px] bg-slate-200 rounded-3xl md:p-[100px]  z-40 ease-in-out duration-700 p-[50px]" : "absolute md:left-[-100%] ease-in-out duration-700 w-[350px] left-[-100%] h-[400px]  bg-slate-200 flex flex-col items-center md:w-[800px] md:h-[500px] justify-start md:top-[300px] top-[250px] rounded-3xl md:p-[100px] z-40 p-[50px]" }  >
          <div >
          <AiOutlineClose className="absolute md:top-[40px] md:right-[90px] top-4 right-8 cursor-pointer " size={30} onClick={ForceClose}/>
          <p className="font-bold md:text-2xl text-xl  text-blue-800">Sign Up</p>
          <p className="md:text-[15px] text-[13px] text-slate-600 md:mb-7 mb-3 whitespace-nowrap ">Already Have Account ? <span className="text-blue-400 decoration-2 hover:font-semibold underline cursor-pointer hover:text-blue-700 ease-in-out duration-200 whitespace-nowrap" onClick={Logincome}>Login</span></p>

          <label  className="text-slate-700 font-semibold md:text-[15px] text-[13px]">User-Name</label><br/>
          <input type="text" className="md:w-[350px] md:mr-7 md:h-11 md:text-[15px] text-[13px] md:rounded-xl rounded-md h-8 md:p-5 p-4 my-1 w-[230px] outline-none focus:text-black"  placeholder="Enter Your User-Name"/>
          <br /><label  className="text-slate-700 font-semibold md:text-[15px] text-[13px]">Email Address</label><br/>
          <input type="text" className="md:w-[350px] md:mr-7 md:h-11 md:text-[15px] text-[13px] md:rounded-xl rounded-md h-8 md:p-5 p-4 my-1 w-[230px] outline-none focus:text-black"  placeholder="you@Example.com"/>
          <div className="flex justify-between items-center">
            <p className="text-slate-700 font-semibold md:text-[15px] text-[13px]">Password</p>
          </div>
          <input type="password" className="md:w-[350px] md:mr-7 md:h-11 md:rounded-xl rounded-md md:p-5 md:text-[15px] text-[13px] w-[230px] p-2 md:my-2 mt-1 mb-3 outline-none focus:text-black " placeholder="Enter your Password"/><br/>
          <button className="bg-blue-600 md:w-[350px] w-[233px] md:my-4 my-3 md:p-3 p-2 rounded-xl hover:bg-blue-400 hover:text-black ease-in-out duration-300 " >Sign Up</button>
          </div>


        </div>
      </nav>
    </div>
  );
};

export default Navbar;
