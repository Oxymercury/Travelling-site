import Reac,{useEffect} from "react";
import SectionBackground from "../images/section-background.jpg";
import Photo1 from "../images/photo1.jpg";
import Photo2 from "../images/photo2.jpg";
import Photo3 from "../images/photo3.jpg";
import Photo4 from "../images/photo4.jpg";
import Photo5 from "../images/photo5.jpg";
import Photo6 from "../images/photo6.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; 


const Experience = () => {
  useEffect(() => {
    AOS.init({duration:"2000"})
})
  return (
    <section id="Experience" className="relative  font-sans overflow-x-hidden" data-aos = "fade-up">
      <div className="absolute inset-0 w-full h-full  rounded-lg -z-10 overflow-hidden ">
        <img
          className="absolute inset-0 w-full h-full object-cover "
          src={SectionBackground}
          alt="Home Background"
        />
      </div>
      <p className="uppercase text-center my-7 text-white md:text-xl text-[14px] pt-4">
        adventure's voices
      </p>
      <p className="font-bold md:text-5xl text-2xl text-center text-white my-5">
        Adventure's Voices
      </p>
      <p className="text-center text-white my-8 md:text-xl text-[14px]">
        Real Stories From Our Adventurous Community
      </p>
      <div className="flex md:flex-row flex-col justify-evenly items-center overflow-x-auto">
        <div className="bg-white rounded-2xl md:p-[1.875rem] p-5 my-1 md:h-[25rem] md:hover:scale-90 transition-all cursor-pointer">
          <div className="flex justify-center items-center">
            <img className="rounded-full h-10 w-10 m-4" src={Photo1} alt="" />
            <div>
              <p className="font-bold md:text-xl text-[12px]">Marvin Davin</p>
              <p className="md:text-xl text-[12px]">Trader</p>
            </div>
          </div>
          <p className="w-[12.5rem] md:text-xl text-[14px] ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
            doloremque. Assumenda exercitationem autem numquam, doloremque animi
            tempora est vero corrupti.
          </p>
        </div>
        <div className="bg-white rounded-2xl md:p-[1.875rem] p-5 my-1 md:h-[25rem] md:hover:scale-90 transition-all cursor-pointer">
          <div className="flex justify-center items-center">
            <img className="rounded-full h-10 w-10 m-4" src={Photo2} alt="" />
            <div>
              <p className="font-bold md:text-xl text-[12px]">Marvin Davin</p>
              <p className="md:text-xl text-[12px]">Trader</p>
            </div>
          </div>
          <p className="w-[12.5rem] md:text-xl text-[14px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
            doloremque. Assumenda exercitationem autem numquam, doloremque animi
            tempora est vero corrupti.
          </p>
        </div>
        <div className="bg-white rounded-2xl md:p-[1.875rem] p-5 my-1 md:h-[25rem] md:hover:scale-90 transition-all cursor-pointer">
          <div className="flex justify-center items-center">
            <img className="rounded-full h-10 w-10 m-4" src={Photo3} alt="" />
            <div>
              <p className="font-bold md:text-xl text-[12px]">Marvin Davin</p>
              <p className="md:text-xl text-[12px]">Trader</p>
            </div>
          </div>
          <p className="w-[12.5rem] md:text-xl text-[14px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
            doloremque. Assumenda exercitationem autem numquam, doloremque animi
            tempora est vero corrupti.
          </p>
        </div>
        <div className="bg-white rounded-2xl md:p-[1.875rem] p-5 my-1 md:h-[25rem] md:hover:scale-90 transition-all cursor-pointer">
          <div className="flex justify-center items-center">
            <img className="rounded-full h-10 w-10 m-4" src={Photo4} alt="" />
            <div>
              <p className="font-bold md:text-xl text-[12px]">Marvin Davin</p>
              <p className="md:text-xl text-[12px]">Trader</p>
            </div>
          </div>
          <p className="w-[12.5rem] md:text-xl text-[14px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
            doloremque. Assumenda exercitationem autem numquam, doloremque animi
            tempora est vero corrupti.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:justify-evenly md:items-center md:my-7 md:w-full w-[16.87rem] mx-auto overflow-x-auto">
        <div className="bg-white md:rounded-3xl rounded-2xl md:px-4 p-6  md:h-56 md:my-2 mt-1 mx-3 md:hover:scale-90 transition-all cursor-pointer">
          <div className="flex justify-center items-center">
            <img className="rounded-full h-10 w-10 m-4" src={Photo5} alt="" />
            <div>
              <p className="font-bold md:text-xl text-[12px]">Marvin Davin</p>
              <p className="md:text-xl text-[12px]">Trader</p>
            </div>
          </div>
          <p className="md:text-xl text-[14px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
            doloremque. Assumenda exercitationem autem numquam, doloremque animi
            tempora est vero corrupti.
          </p>
        </div>

        <div className="bg-white md:rounded-3xl rounded-2xl md:px-4 p-6 md:h-56 md:my-4 mb-2 mt-2 mx-3 md:hover:scale-90 transition-all cursor-pointer">
          <div className="flex justify-center items-center">
            <img className="rounded-full h-10 w-10 m-4" src={Photo6} alt="" />
            <div>
              <p className="font-bold md:text-xl text-[12px]">Marvin Davin</p>
              <p className="md:text-xl text-[12px]">Trader</p>
            </div>
          </div>
          <p className="md:text-xl text-[14px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
            doloremque. Assumenda exercitationem autem numquam, doloremque animi
            tempora est vero corrupti.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
