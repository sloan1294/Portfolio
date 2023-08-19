import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TracMate from "../assets/TracMate.png";
import Oakley from "../assets/Oakley-1.png";
import Weather from "../assets/Weather_App.png";
import Marvel from "../assets/marvel.png";
import Quote from "../assets/quote.png";
import "./slider.css";

const Projects = () => {
  const settings = {
    className: "slides",
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  };
  return (
    <section id="projects">
      <div className="max-[1000px]:hidden pt-[6%] ml-4 w-[98%]">
        <Slider {...settings}>
          {/* Div 1 */}
          <div class="w-[460px] h-[775px] rounded-lg overflow-hidden shadow-2xl shadow-[#49c5b6]">
            <img
              class="ml-[4%] h-[40%] border-b border-[#49c5b6]"
              src={TracMate}
              alt="Sunset in the mountains"
            />
            <div class="ml-4 px-8 py-6 w-[90%] max-[550px]:px-10">
              <div class="font-bold text-center text-xl mb-5 text-[#49c5b6]">
                <p>TracMate.</p>
                <p>Budgeting done better</p>
              </div>
              <p className="text-white text-center text-base mb-1">
                (No Template) TracMate is a budgeting app that allows you to
                create an account protected by firebase. From there you can go
                stright to entering your budget on the next page. After filling
                out your budget you can then hit a button to create a pie chart
                that uses the data you entered.
              </p>
              <p className="text-white text-center text-base mb-1 pt-2">
                <b className="text-[#49c5b6]">Challanges: </b>Creating the chart
                and rendering it took hours to figure out. Figuring out a way
                for the chart to be rendered dynamicly based on screen size is
                something I will be proud of for a long time to come.
              </p>
            </div>
            <div className="flex justify-center w-full">
              <a
                href="https://joyful-khapse-96fe02.netlify.app/"
                className="bunk text-white bg-[#49c5b6] hover:bg-green-400 font-bold py-2 px-8 m-5 rounded-lg "
              >
                Live Site
              </a>
              <a
                href="https://github.com/sloan1294/TracMate"
                className="bunk text-white bg-[#49c5b6] hover:bg-green-400 font-bold py-2 px-9 m-5 rounded-lg "
              >
                Github
              </a>
            </div>
            <div class="text-center px-10 w-full">
              <span class="inline-block bg-[#49c5b6] rounded-full px-6 py-1 text-sm font-bold text-[#000300] mr-2 mb-10 mt-2">
                #JavaScript
              </span>
              <span class="inline-block bg-[#49c5b6] rounded-full px-3 py-1 text-sm font-bold text-[#000300] mr-2 mb-10 mt-2">
                #React
              </span>
              <span class="inline-block bg-[#49c5b6] rounded-full px-3 py-1 text-sm font-bold text-[#000300] mr-2 mb-10 mt-2">
                #ChartJs
              </span>
            </div>
          </div>
          {/* Div 2 */}
          <div class="w-[460px] h-[775px] rounded-lg overflow-hidden shadow-2xl shadow-[#49c5b6]">
            <img
              class="ml-[4%] h-[40%] border-b-2 border-[#49c5b6] "
              src={Oakley}
              alt="Sunset in the mountains"
            />
            <div class="ml-4 px-8 py-6 w-[90%] max-[550px]:px-10">
              <div class="font-bold text-center text-xl mb-5 text-[#49c5b6]">
                <p>Z-Adventures.</p>
                <p className="max-[550px]:px-10">
                  An innovative way to experience the outdoors.
                </p>
              </div>
              <p className="max-[550px]:px-10 text-white text-center text-base m-6">
                (No Template) Z-Adventures is an adventure oriented equipment
                store. Having all items from heavy duty boots to Winter jackets
                we provide for any environment imaginable.
              </p>
              <p className="text-white text-center text-base mb-1 pt-2 max-[550px]:px-10">
                <b className="text-[#49c5b6]">Challenges: </b> Z-Adventures is a
                project I built to understand React and TypeScript better, while
                also having a reason to build a working cart. This turned out to
                be quite the challenge for me. Day later I finally walked away
                with a solution I was satisfied with, and this is the final
                product!
              </p>
            </div>
            <div className="mt-[-20px] flex justify-center">
              <a
                href="https://main--radiant-crumble-ae8f74.netlify.app/"
                className="bunk text-white bg-[#49c5b6] hover:bg-green-400 font-bold py-2 px-8 m-5 rounded-lg "
              >
                Live Site
              </a>
              <a
                href="https://github.com/sloan1294/Z-Adventures"
                className="bunk text-white bg-[#49c5b6] hover:bg-green-400 font-bold py-2 px-9 m-5 rounded-lg "
              >
                Github
              </a>
            </div>
            <div class="text-center px-10">
              <span class="inline-block bg-[#49c5b6] rounded-full px-6 py-1 text-sm font-bold text-[#000300] mr-2 mb-10 mt-2">
                #TypeScript
              </span>
              <span class="inline-block bg-[#49c5b6] rounded-full px-3 py-1 text-sm font-bold text-[#000300] mr-2 mb-10 mt-2">
                #React
              </span>
              <span class="inline-block bg-[#49c5b6] rounded-full px-3 py-1 text-sm font-bold text-[#000300] mr-2 mb-10 mt-2">
                #Tailwind
              </span>
            </div>
          </div>
          {/* Div 3 */}
          <div class="w-[460px] h-[775px] rounded-lg overflow-hidden shadow-2xl shadow-[#49c5b6]">
            <img
              class="ml-[4%] h-[40%] border-b border-[#49c5b6]"
              src={Marvel}
              alt="Sunset in the mountains"
            />
            <div class="ml-4 px-8 py-6 w-[90%] max-[550px]:px-10">
              <div class="font-bold text-center text-xl mb-5 text-[#49c5b6]">
                <p>Hero Finder</p>
                <p>Grasping APIs.</p>
              </div>
              <p className="text-white text-center text-base m-6">
                (No Template) Hero Finder allows you to brush up on your MCU
                knowledge. Type your favorites into the search bar and by
                calling the Marvel API it will return a basic life story of the
                character
              </p>
              <p className="mt-[-1.5%] text-white text-center text-base mb-1 pt-2">
                <b className="text-[#49c5b6]">Challanges: </b> The Marvel API is
                a bit more complex on it's return than others I've worked with.
                Learning to implement function into the search bar and return
                the correct data was also a challenge. Overall though it was a
                fun project and I'm looking forward to building a more in-depth
                version soon.
              </p>
            </div>
            <div className="mt-[-36px] flex justify-center">
              <a
                href="https://effortless-capybara-4ea022.netlify.app/"
                className="bunk text-white bg-[#49c5b6] hover:bg-green-400 font-bold py-2 px-8 m-5 rounded-lg "
              >
                Live Site
              </a>
              <a
                href="https://github.com/sloan1294/MSheets"
                className="bunk text-white bg-[#49c5b6] hover:bg-green-400 font-bold py-2 px-9 m-5 rounded-lg "
              >
                Github
              </a>
            </div>
            <div class="text-center px-10">
              <span class="inline-block bg-[#49c5b6] rounded-full px-6 py-1 text-sm font-bold text-[#000300] mr-2 mb-10 mt-2">
                #API
              </span>
              <span class="inline-block bg-[#49c5b6] rounded-full px-3 py-1 text-sm font-bold text-[#000300] mr-2 mb-10 mt-2">
                #JavaScript
              </span>
              <span class="inline-block bg-[#49c5b6] rounded-full px-3 py-1 text-sm font-bold text-[#000300] mr-2 mb-10 mt-2">
                #CSS
              </span>
            </div>
          </div>

          {/* Div 4 */}
          <div class="w-[460px] h-[775px] rounded-lg overflow-hidden shadow-2xl shadow-[#49c5b6]">
            <img
              class="ml-[4%] h-[40%] border-b border-[#49c5b6]"
              src={Weather}
              alt="Sunset in the mountains"
            />
            <div class="ml-4 px-8 py-6 w-[90%] max-[550px]:px-10">
              <div class="font-bold text-center text-xl mb-5 text-[#49c5b6]">
                <p>Weather App</p>
                <p>Trying the basics.</p>
              </div>
              <p className="text-white text-center text-base m-6">
                (No Template) This is a weather app that will tell you the
                current temputure in the city you search. Using the Gps image on
                the left hand side of the input area will allow you to get your
                current location.
              </p>
              <p className="mt-[-8px] text-white text-center text-base mb-1 pt-2">
                <b className="text-[#49c5b6]">Challanges: </b> Overall, this
                project was not too difficult. Connecting to the open weather
                Api was straight forward, and retrieving that data was explained
                well in the docs. Calling the second Api and returning the
                correct data (kept returning wrong location) was quite a bit
                harder!
              </p>
            </div>
            <div className="mt-[-36px] flex justify-center">
              <a
                href="https://silver-raindrop-2097fc.netlify.app/"
                className="bunk text-white bg-[#49c5b6] hover:bg-green-400 font-bold py-2 px-8 m-5 rounded-lg "
              >
                Live Site
              </a>
              <a
                href="https://github.com/sloan1294/Weather-App"
                className="bunk text-white bg-[#49c5b6] hover:bg-green-400 font-bold py-2 px-9 m-5 rounded-lg "
              >
                Github
              </a>
            </div>
            <div class="text-center px-10">
              <span class="inline-block bg-[#49c5b6] rounded-full px-6 py-1 text-sm font-bold text-[#000300] mr-2 mb-10 mt-2">
                #API
              </span>
              <span class="inline-block bg-[#49c5b6] rounded-full px-3 py-1 text-sm font-bold text-[#000300] mr-2 mb-10 mt-2">
                #React
              </span>
              <span class="inline-block bg-[#49c5b6] rounded-full px-3 py-1 text-sm font-bold text-[#000300] mr-2 mb-10 mt-2">
                #Tailwind
              </span>
            </div>
          </div>
          {/* Div 5 */}
          <div class="w-[460px] h-[775px] rounded-lg overflow-hidden shadow-2xl shadow-[#49c5b6]">
            <img
              class="ml-[4%] h-[40%] border-b border-[#49c5b6]"
              src={Quote}
              alt="Sunset in the mountains"
            />
            <div class="ml-4 px-8 py-6 w-[90%] max-[550px]:px-10">
              <div class="font-bold text-center text-xl mb-5 text-[#49c5b6]">
                <p>Random Quote Generator.</p>
                <p>Understanding the basics</p>
              </div>
              <p className="mt-[9%] text-white text-center text-base mb-1">
                (No Template) This is a random quote generator. Very basic
                stuff. Returning the data and capturing it in a state was
                simple, and realizing I found it so easy was a confidence
                booster!
              </p>
              <p className="mt-[7%] text-white text-center text-base mb-1 pt-2">
                <b className="text-[#49c5b6]">Challanges: </b>Apart from some
                small setbacks returning the data as a string instead of
                undefined there was not alot to this. I was able to complete it
                in a single evening
              </p>
            </div>
            <div className="flex justify-center w-full">
              <a
                href="https://64e056df7de90c20266c4222--strong-cupcake-2afdbe.netlify.app/"
                className="bunk text-white bg-[#49c5b6] hover:bg-green-400 font-bold py-2 px-8 m-5 rounded-lg "
              >
                Live Site
              </a>
              <a
                href="https://github.com/sloan1294/Quote-Generator"
                className="bunk text-white bg-[#49c5b6] hover:bg-green-400 font-bold py-2 px-9 m-5 rounded-lg "
              >
                Github
              </a>
            </div>
            <div class="text-center px-10 w-full">
              <span class="inline-block bg-[#49c5b6] rounded-full px-6 py-1 text-sm font-bold text-[#000300] mr-2 mb-10 mt-2">
                #React
              </span>
              <span class="inline-block bg-[#49c5b6] rounded-full px-3 py-1 text-sm font-bold text-[#000300] mr-2 mb-10 mt-2">
                #API
              </span>
              <span class="inline-block bg-[#49c5b6] rounded-full px-3 py-1 text-sm font-bold text-[#000300] mr-2 mb-10 mt-2">
                #Tailwind
              </span>
            </div>
          </div>
        </Slider>
      </div>

      <div className="min-[999px]:hidden w-[90%] grid 2xl:grid-cols-3 justify-items-center pt-32 mx-auto max-[1600px]:grid-cols-1">
        {/* Div 1 */}
        <div class="w-[460px] h-[775px] rounded-lg overflow-hidden shadow-2xl shadow-[#49c5b6]">
          <img
            class="w-full border-b border-[#49c5b6]"
            src={TracMate}
            alt="Sunset in the mountains"
          />
          <div class="px-2 py-6 max-[550px]:px-10">
            <div class="font-bold text-center text-xl mb-5 text-[#49c5b6]">
              <p>TracMate.</p>
              <p>Budgeting done better</p>
            </div>
            <p className="text-white text-center text-base mb-1">
              (No Template) TracMate is a budgeting app that allows you to
              create an account protected by firebase. From there you can go
              stright to entering your budget on the next page. After filling
              out your budget you can then hit a button to create a pie chart
              that uses the data you entered.
            </p>
            <p className="text-white text-center text-base mb-1 pt-2">
              <b className="text-[#49c5b6]">Challanges: </b>Creating the chart
              and rendering it took hours to figure out. Figuring out a way for
              the chart to be rendered dynamicly based on screen size is
              something I will be proud of for a long time to come.
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href="https://joyful-khapse-96fe02.netlify.app/"
              className="bunk text-white bg-[#49c5b6] hover:bg-green-400 font-bold py-2 px-8 m-5 rounded-lg "
            >
              Live Site
            </a>
            <a
              href="https://github.com/sloan1294/TracMate"
              className="bunk text-white bg-[#49c5b6] hover:bg-green-400 font-bold py-2 px-9 m-5 rounded-lg "
            >
              Github
            </a>
          </div>
          <div class="text-center px-10">
            <span class="inline-block bg-[#49c5b6] rounded-full px-6 py-1 text-sm font-bold text-[#000300] mr-2 mb-10 mt-2">
              #JavaScript
            </span>
            <span class="inline-block bg-[#49c5b6] rounded-full px-3 py-1 text-sm font-bold text-[#000300] mr-2 mb-10 mt-2">
              #React
            </span>
            <span class="inline-block bg-[#49c5b6] rounded-full px-3 py-1 text-sm font-bold text-[#000300] mr-2 mb-10 mt-2">
              #ChartJs
            </span>
          </div>
        </div>
        {/* Div 2 */}
        <div class="mt-[5%] w-[460px] h-[775px] rounded-lg overflow-hidden shadow-2xl shadow-[#49c5b6]">
          <img
            class="w-full border-b border-[#49c5b6]"
            src={Oakley}
            alt="Sunset in the mountains"
          />
          <div class="px-2 py-6">
            <div class="font-bold text-center text-xl mb-5 text-[#49c5b6]">
              <p>Z-Adventures.</p>
              <p className="max-[550px]:px-10">
                An innovative way to experience the outdoors.
              </p>
            </div>
            <p className="max-[550px]:px-10 text-white text-center text-base m-6">
              (No Template) Z-Adventures is an adventure oriented equipment
              store. Having all items from heavy duty boots to Winter jackets we
              provide for any environment imaginable.
            </p>
            <p className="text-white text-center text-base mb-1 pt-2 max-[550px]:px-10">
              <b className="text-[#49c5b6]">Challenges: </b> Z-Adventures is a
              project I built to understand React and TypeScript better, while
              also having a reason to build a working cart. This turned out to
              be quite the challenge for me. Day later I finally walked away
              with a solution I was satisfied with, and this is the final
              product!
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href="https://main--radiant-crumble-ae8f74.netlify.app/"
              className="bunk text-white bg-[#49c5b6] hover:bg-green-400 font-bold py-2 px-8 m-5 rounded-lg "
            >
              Live Site
            </a>
            <a
              href="https://github.com/sloan1294/Z-Adventures"
              className="bunk text-white bg-[#49c5b6] hover:bg-green-400 font-bold py-2 px-9 m-5 rounded-lg "
            >
              Github
            </a>
          </div>
          <div class="text-center px-10">
            <span class="inline-block bg-[#49c5b6] rounded-full px-6 py-1 text-sm font-bold text-[#000300] mr-2 mb-10 mt-2">
              #TypeScript
            </span>
            <span class="inline-block bg-[#49c5b6] rounded-full px-3 py-1 text-sm font-bold text-[#000300] mr-2 mb-10 mt-2">
              #React
            </span>
            <span class="inline-block bg-[#49c5b6] rounded-full px-3 py-1 text-sm font-bold text-[#000300] mr-2 mb-10 mt-2">
              #Tailwind
            </span>
          </div>
        </div>
        {/* Div 3 */}
        <div class="mt-[5%] w-[460px] h-[775px] rounded-lg overflow-hidden shadow-2xl shadow-[#49c5b6]">
            <img
              class="w-full border-b border-[#49c5b6]"
              src={Marvel}
              alt="Sunset in the mountains"
            />
            <div class="px-2 py-6">
              <div class="font-bold text-center text-xl mb-5 text-[#49c5b6]">
                <p>Hero Finder</p>
                <p>Grasping APIs.</p>
              </div>
              <p className="max-[550px]:px-10 text-white text-center text-base m-6">
                (No Template) Hero Finder allows you to brush up on your MCU
                knowledge. Type your favorites into the search bar and by
                calling the Marvel API it will return a basic life story of the
                character
              </p>
              <p className="text-white text-center text-base mb-1 pt-2 max-[550px]:px-10">
                <b className="text-[#49c5b6]">Challanges: </b> The Marvel API is
                a bit more complex on it's return than others I've worked with.
                Learning to implement function into the search bar and return
                the correct data was also a challenge. Overall though it was a
                fun project and I'm looking forward to building a more in-depth
                version soon.
              </p>
            </div>
            <div className="flex justify-center">
            <a
              href="https://effortless-capybara-4ea022.netlify.app/"
              className="bunk text-white bg-[#49c5b6] hover:bg-green-400 font-bold py-2 px-8 m-5 rounded-lg "
            >
              Live Site
            </a>
            <a
              href="https://github.com/sloan1294/MSheets"
              className="bunk text-white bg-[#49c5b6] hover:bg-green-400 font-bold py-2 px-9 m-5 rounded-lg "
            >
              Github
            </a>
          </div>
          <div class="text-center px-10">
            <span class="inline-block bg-[#49c5b6] rounded-full px-6 py-1 text-sm font-bold text-[#000300] mr-2 mb-10 mt-2">
              #API
            </span>
            <span class="inline-block bg-[#49c5b6] rounded-full px-3 py-1 text-sm font-bold text-[#000300] mr-2 mb-10 mt-2">
              #JavaScript
            </span>
            <span class="inline-block bg-[#49c5b6] rounded-full px-3 py-1 text-sm font-bold text-[#000300] mr-2 mb-10 mt-2">
              #CSS
            </span>
          </div>
          </div>



      </div>
    </section>
  );
};
export default Projects;
