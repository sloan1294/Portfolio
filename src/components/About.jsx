import React from "react";
import Port from "../assets/port.jpg";


export default function About() {
  return (
    <section id="about" className="pt-4">
    <div className="border-double border-8 border-[#49c5b6] mt-[5%] m-10 ">
      <div className="container mx-auto flex px-20 lg:py-32 sm:py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-3xl mb-4 font-medium text-white">
            I'm Ashton.
            <br/>I love to see plans coming together!
          </h1>
          <p className="mb-8 leading-relaxed text-[#49c5b6] text-lg">
          I use leading frameworks to build the best products I possibly can.
            Whether that be using Tailwind to implement a cleaner design, or
            React to truly create a responsive website I guarantee I would make a
            valuable addition to your team!
          </p>
          <div className="flex justify-center">
            <button>
              <a href="#contact">
                <h4 className=" text-white bg-[#49c5b6] hover:bg-green-400 font-bold py-3 px-14 m-5 rounded-lg ">
                  Work With Me.
                </h4>
              </a>
            </button>
          </div>
        </div>
        <div className="flex justify-center rotate-[-15deg] lg:max-w-lg lg:w-full md:w-1/2 w-[5/6] ">
          <img
            className="object-cover object-center h-110 rounded-full border-solid border-2 border-[#49c5b6]"
            alt="hero"
            src={Port}
          />
        </div>
      </div>
    </div>
    </section>
  );
}
