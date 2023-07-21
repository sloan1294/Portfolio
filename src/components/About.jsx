import React from "react";
import Port from "../assets/port.jpg";

export default function About() {
  return (
    <section id="about" className="pt-4">
      <div className="border-double border-8 border-[#49c5b6] mt-[5%] m-10 max-[550px]:w-[80%]">
        <div className="container mx-auto flex max-[550px]:px-2 px-20 lg:py-28 sm:py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-3xl mb-4 font-medium text-white">
              I'm Ashton.
              <br />I love to see plans coming together!
              <div className="border-b border-solid border-2"></div>
            </h1>
            <p className="max-[550px]:w-full mb-8 leading-relaxed text-[#49c5b6] text-2xl w-full">
            I use leading frameworks to build the best products I possibly
              can. Whether that be using Tailwind to implement a cleaner design
              or React to truly create a responsive website I guarantee I would
              make a valuable addition to your team! 
              </p>
              <div className="border-b border-4 border-[#49c5b6]"></div>
              <p className="mb-8 leading-relaxed text-[#49c5b6] text-xl">
              Bio: I worked in the
              service industry for years. Whether it be server, bartender, or
              manager I've worked as them all. Dealing with people always came
              naturally to me, but it has never been something I strived to do
              on such a consistent basis. Working on code not only allowed me to
              discover my passion for problem-solving, but it also allowed me to
              be in a space that I created.
            </p>
            <div className="flex justify-center">
              <button>
                <a href="#contact">
                  <p className="bg-[#49c5b6] hover:bg-green-400 max-[550px]:py-0 py-5 px-8 lg:mt-4 text-lg font-medium text-center text-white rounded-2xl">
                    Work With Me.
                  </p>
                </a>
              </button>
            </div>
          </div>
          <div className="flex justify-center rotate-[-15deg] lg:max-w-lg lg:w-full md:w-1/2 w-[5/6] ">
            <img
              className="max-[550px]:ml-[15px] max-[550px]:mt-[-45px] max-[550px]:mb-4 h-110 rounded-full border-solid border-2 border-[#49c5b6]"
              alt="hero"
              src={Port}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
