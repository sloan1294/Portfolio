import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";





const Navbar = () => {
  const [nav, setNav] = useState(false);


  const handleNav = () => {
    setNav(!nav);
  };

 

  return (
    <div className="z-10 md:sticky top-0 bg-[#000300] border-b border-[#49c5b6]">
      
      <div className="flex justify-between items-center h-24 max-w-[1650px] mx-auto px-4 font-bold text-[#49c5b6]">
        <h1 className=" w-full pr-22 text-4xl font-bold text-[#49c5b6] ">
          <a href="#skills">
            Keep Moving Forward.
          </a>
        </h1>
        <div></div>
        <ul className="hidden md:flex">
          <li className="p-4">
            <a href="#skills" className="text-[20px] font-bold font-['Segoe_UI'] hover:text-green-400">
              Home
            </a>
          </li>
          <li className="p-4">
           <a href="#projects" className="text-[20px] font-bold font-['Segoe_UI'] hover:text-green-400">
            Projects
           </a>
          </li>
          <li className="p-4">
            <a href="#about" className="text-[20px] font-bold font-['Segoe_UI'] hover:text-green-400">
              About
            </a>
          </li>
          <li className="p-4">
          <a href="#contact" className="text-[20px] font-bold font-['Segoe_UI'] hover:text-green-400">
              Contact
            </a>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "z-10 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#49c5b6] m-4">
            Ashton Sloan.
          </h1>
          <li className="p-4 border-b border-gray-600"><a onClick={handleNav} href="#skills">Home</a></li>
          <li className="p-4 border-b border-gray-600"><a onClick={handleNav}  href="#projects">Projects</a></li>
          <li className="p-4 border-b border-gray-600"><a onClick={handleNav}  href="#about">About</a></li>
          <li className="p-4 border-b border-gray-600"><a onClick={handleNav} href="#contact">Contact</a></li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
