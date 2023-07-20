import React from "react";
import {
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoWordpress,
} from "react-icons/io";
import { FaReact, FaNode } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap } from "react-icons/si";
import "./components.css"



const Hero = () => {
  return (
    <section id="skills">
      <div className="text-white mt-20">
        <div className="max-w-[800px] mt-[-140px] w-full h-[60rem] mx-auto flex flex-col justify-center text-center">
          <p className="text-[#49c5b6] text-6xl font-bold p-5">
            Hi! I am a Front-End React Developer.
          </p>

          <p className="md:text-2xl text-xl font-bold text-gray-500 pb-5">
            My name is Ashton Sloan. I strive to constantly find new and
            improved ways to bring myself closer to every goal I can.
          </p>
          <div className="grid grid-cols-4 gap-5">
            <div className="">
              <IoLogoHtml5
                size={45}
                className="bg-[#49c5b6] rounded-lg p-1 mt-5 mx-auto"
              />
              <p className="text-center font-bold">HTML5</p>
            </div>
            <div className="">
              <IoLogoCss3
                size={45}
                className="bg-[#49c5b6] rounded-lg p-1 mt-5 mx-auto"
              />
              <p className="text-center font-bold">CSS</p>
            </div>
            <div className="">
              <IoLogoJavascript
                size={45}
                className="bg-[#49c5b6] rounded-lg p-1 mt-5 mx-auto"
              />
              <p className="text-center font-bold">Javascript</p>
            </div>
            <div className="">
              <FaReact
                size={45}
                className="bg-[#49c5b6] rounded-lg p-1 mt-5 mx-auto"
              />
              <p className="text-center font-bold">React</p>
            </div>

            <div className="">
              <SiTailwindcss
                size={45}
                className="bg-[#49c5b6] rounded-lg p-1 mt-5 mx-auto"
              />
              <p className="text-center font-bold">Tailwind</p>
            </div>
            <div className="">
              <SiBootstrap
                size={45}
                className="bg-[#49c5b6] rounded-lg p-1 mt-5 mx-auto space-x-"
              />
              <p className="text-center font-bold">BootStrap</p>
            </div>
            <div className="">
              <FaNode
                size={45}
                className="bg-[#49c5b6] rounded-lg p-1 mt-5 mx-auto"
              />
              <p className="text-center font-bold">Node</p>
            </div>

            <div className="">
              <IoLogoWordpress
                size={45}
                className="bg-[#49c5b6] rounded-lg p-1 mt-5 mx-auto space-x-"
              />
              <p className="text-center font-bold">WordPress</p>
            </div>
          </div>
          <div className="mx-auto pt-24 w-full space-x-3">
            <a
              href="#about"
              className="bg-[#49c5b6] w-[185px] hover:bg-green-400 rounded-md font-bold mt-16  my-5 mx-auto py-3 px-6"
            >
              Learn More
            </a>

            <a
              className="bg-[#49c5b6] w-[185px] hover:bg-green-400 rounded-md font-bold mt-16  my-5 mx-auto py-3 px-6"
              href="#contact"
            >
              Contact Me?
            </a>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Hero;
