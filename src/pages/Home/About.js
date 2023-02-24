import React from 'react';
import about from '../../Assets/about.png'
import { RiLightbulbFill } from "react-icons/ri";
import { FaCodepen } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
const About = () => {
    return (
        <div className='mt-60 mx-auto relative before:bg-gradient-to-t via-[#79203882] from-[#141618] to-[#141618] banner'>
            {/* <div class="circle"></div> */}
            <h1 className='hidden md:block about'>About</h1>
            <div className='flex w-10/12 mx-auto items-center mt-40 justify-between'>
                <div>
                    <img className='w-11/12 -mt-44' src={about} alt="" />
                </div>
                <div className="">
                    <h1 className='text-2xl light-effect font-bold text-white tracking-[1.5px] mb-4 border-style ml-2'>About Me</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-[#7920385e] shadow-lg py-8 w-48 mx-auto rounded-2xl animate">
                            <h1 className="text-primary text-4xl ml-20 pb-4">
                                <RiLightbulbFill />
                            </h1>
                            <h1 className="text-center tracking-[1.5px] text-white text-xl">
                                Experience
                            </h1>
                            <p className="text-center tracking-[1.5px] text-white text-md pt-2">
                                8 Hours Working
                            </p>
                        </div>
                        <div className="bg-[#7920385e] shadow-lg py-8 w-48 mx-auto rounded-2xl animate">
                            <h1 className="text-primary text-4xl ml-20 pb-4">
                                <FaCodepen />
                            </h1>
                            <h1 className="text-center tracking-[1.5px] text-white text-xl">
                                Completed
                            </h1>
                            <p className="text-center tracking-[1.5px] text-white text-md pt-2">
                                12+ Projects
                            </p>
                        </div>
                        <div className="bg-[#7920385e]  shadow-lg py-8 w-48 mx-auto rounded-2xl animate">
                            <h1 className="text-primary text-4xl ml-20 pb-4">
                                <BiSupport />
                            </h1>
                            <h1 className="text-center text-white text-xl tracking-[1.5px]">Support</h1>
                            <p className="text-center tracking-[1.5px] text-white text-md pt-2">
                                Online 24/7
                            </p>
                        </div>
                    </div>
                    <p class="pt-7 ml-4 tracking-[1.5px] capitalize text-white text-justify text-lg">
                        I'am Studying Diploma in Computer Science & Engineering. I want
                        to build my career as a web developer.My Goal is to be a good
                        full-stackdeveloper. I hope i can make it by the blessing of
                        Almighty and through my hardwork. I am quick at learning new
                        software and technologies.
                    </p>
                    <button class="btn btn-primary mt-6 ml-4 w-5/12 md:w-3/12 text-lg capitalize text-white">
                        Contact
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;