import React from 'react'
import { GoArrowUpRight } from "react-icons/go"
import Menu from '@/comp/Menu';
import { FaXTwitter } from 'react-icons/fa6';
const page = () => {
  return (
    <div>
<>
  {/* header start */}
 <Menu/>
  {/* header End */}
  {/* Page heading start */}
  <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl  xl mx-auto px-3 pt_120 pb_120">
    <div className="flex justify-center">
      <div>
        <div className="text-center">
          <h1 className="lg:text-6xl sm:text-4xl text-3xl text-white lg:mb-10 sm:mb-9 mb-6 font-bold">
            Services All
          </h1>
          <ul className="flex items-center justify-center sm:flex-nowrap flex-wrap gap-3">
            <li className="text-2xl font-caveat">
              <a href="https://wphtml.com/" className="text-white">
                Home
              </a>
            </li>
            <li className="text-white text-2xl">/</li>
            <li className="text-clr_base font-caveat text-2xl">Services All</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* Page heading end */}
  {/* ----------- Services Start */}

 <section id="services" class="pt_120 pb_120">
    <div class="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">

      <div class="text-center max-w-[920px] mx-auto md:mb-[60px] sm:mb-[50px] mb-[45px]">
        <p class="text-2xl font-caveat text-clr_base relative flex justify-center items-center sm:gap-6 gap-[14px] mx-auto mb-[30px]"
          data-aos="fade-down" data-aos-duration="1000">
          <span class="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
          Services That i Provide
          <span class="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
        </p>
        <h2
          class="font-medium lg:text-6xl md:text-5xl sm:text-4xl text-[29px] text-white lg:leading-[120%] md:leading-tight leading-9"
          data-aos="fade-up" data-aos-duration="1200">
          My Special Service For Your Business Development
        </h2>
      </div>


      <div>
 <div
          class="lg:pb-10 pb-[30px] lg:pt-10 pt-[30px] flex justify-between items-center sm:gap-[14px] gap-5 sm:flex-nowrap flex-wrap border-b duration-500 border-b-[rgb(38_37_37)] first:border-t first:border-t-[rgb(38_37_37)] hover:border-b-clr_base hover:first:border-t-clr_base group"
          data-aos="fade-up" data-aos-duration="1000">
          <div class="w-[1062px] flex items-center justify-between md:flex-nowrap flex-wrap md:gap-[14px] gap-2">
            <div class="flex lg:gap-[60px] gap-[16px]">
              <span class="text-xl text-white"> 01 </span>
              <div class="cont">
                <h5 class="text-base lg:text-xl font-semibold text-white mb-2">
                  Web Development
                </h5>
                <h2 class="text-[26px] xl:text-[40px] lg:text-3xl font-semibold lg:leading-[120%]">
                  <a href="serviceDetails.html" class="text-white duration-500">
                    Application Design
                  </a>
                </h2>
              </div>
            </div>
            <p class="text-clr_pra text-base lg:w-[400px] w-[300px]">
            In my work, I focus on crafting responsive and interactive web pages that look great on any device.
            I m proficient in modern front-end frameworks and libraries such as React.js and Next.js,
            which allow me to build dynamic single-page applications with seamless navigation and smooth performance.
            </p>
          </div>

          <a href="serviceDetails.html"
            class="imgc h-[45px] w-[45px] sm:w-[60px] sm:h-[60px] rounded-md bg-[#1D1D1D] flex justify-center items-center duration-500 group-hover:bg-clr_base cursor-pointer">
            <i class=" duration-500 group-hover:text-clr_title text-lg sm:text-xl text-white"><GoArrowUpRight /></i>
          </a>
        </div>


         <div
          class="lg:pb-10 pb-[30px] lg:pt-10 pt-[30px] flex justify-between items-center sm:gap-[14px] gap-5 sm:flex-nowrap flex-wrap border-b duration-500 border-b-[rgb(38_37_37)] first:border-t first:border-t-[rgb(38_37_37)] hover:border-b-clr_base hover:first:border-t-clr_base group"
          data-aos="fade-up" data-aos-duration="1000">
          <div class="w-[1062px] flex items-center justify-between md:flex-nowrap flex-wrap md:gap-[14px] gap-2">
            <div class="flex lg:gap-[60px] gap-[16px]">
              <span class="text-xl text-white"> 02 </span>
              <div class="cont">
                <h5 class="text-base lg:text-xl font-semibold text-white mb-2">
                Technical Write-Ups
                </h5>
                <h2 class="text-[26px] xl:text-[40px] lg:text-3xl font-semibold lg:leading-[120%]">
                  <a href="serviceDetails.html" class="text-white duration-500">
                  Software Documentation
                  </a>
                </h2>
              </div>
            </div>
            <p class="text-clr_pra text-base lg:w-[400px] w-[300px]">
            Guides on how to install, configure, and use software,
             or API documentation detailing how to integrate with a particular service.
            </p>
          </div>

          <a href="s.html"
            class="imgc h-[45px] w-[45px] sm:w-[60px] sm:h-[60px] rounded-md bg-[#1D1D1D] flex justify-center items-center duration-500 group-hover:bg-clr_base cursor-pointer">
            <i class="duration-500 group-hover:text-clr_title text-lg sm:text-xl text-white"><GoArrowUpRight /></i>
          </a>
        </div>

        <div
          class="lg:pb-10 pb-[30px] lg:pt-10 pt-[30px] flex justify-between items-center sm:gap-[14px] gap-5 sm:flex-nowrap flex-wrap border-b duration-500 border-b-[rgb(38_37_37)] first:border-t first:border-t-[rgb(38_37_37)] hover:border-b-clr_base hover:first:border-t-clr_base group"
          data-aos="fade-up" data-aos-duration="1000">
          <div class="w-[1062px] flex items-center justify-between md:flex-nowrap flex-wrap md:gap-[14px] gap-2">
            <div class="flex lg:gap-[60px] gap-[16px]">
              <span class="text-xl text-white"> 03 </span>
              <div class="cont">
                <h5 class="text-base lg:text-xl font-semibold text-white mb-2">
                  Branding
                </h5>
                <h2 class="text-[26px] xl:text-[40px] lg:text-3xl font-semibold lg:leading-[120%]">
                  <a href="serviceDetails.html" class="text-white duration-500">
                    Business Branding
                  </a>
                </h2>
              </div>
            </div>
            <p class="text-clr_pra text-base lg:w-[400px] w-[300px]">
            I help businesses build and strengthen their brand identity by creating cohesive visual elements, crafting unique messaging, and ensuring consistency across all platforms.
            My focus is on differentiating your brand in the market, building trust with your target audience, and fostering customer loyalty.
            Through effective branding, I aim to drive growth and create a lasting, impactful presence for your business.
            </p>
          </div>

          <a href="serviceDetails.html"
            class="imgc h-[45px] w-[45px] sm:w-[60px] sm:h-[60px] rounded-md bg-[#1D1D1D] flex justify-center items-center duration-500 group-hover:bg-clr_base cursor-pointer">
            <i class=" duration-500 group-hover:text-clr_title text-lg sm:text-xl text-white"><GoArrowUpRight /></i>
          </a>
        </div>

      </div>
    </div>
  </section>


  {/* ----------- Services End */}
  {/* ----------- Metting start */}
  <section className="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden pt_120 pb_120">
    <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl  xl mx-auto px-3">
      <div className="grid lg:grid-cols-[58%_auto] gap-20 items-center">
        <div>

          <div className="pb-[50px]">
            <span
              className="text-2xl font-caveat text-clr_base relative flex items-center sm:gap-6 gap-[14px] mx-auto mb-[30px]"
              data-aos="fade-down"
              data-aos-duration={1000}
            >
              <span className="sm:w-20 w-[50px] h-[1px] bg-clr_base" />
              Need a Project?
            </span>
            <h2
              className="font-medium lg:text-6xl md:text-5xl sm:text-4xl text-[29px] text-white max-w-[620px]"
              data-aos="fade-down"
              data-aos-duration={1600}
            >
              Lets Work Together. Fixed A Meeting
            </h2>
          </div>
          {/* ---------- Heading */}
          {/* ---------- Metting system */}
          <div>
            <div className="border-b border-b-[rgb(39,38,38)] hover:border-b-clr_base duration-500 transition-all" />
            <div
              className="hover:border-b hover:border-b-clr_base flex ga-5 items-center md:gap-5 gap-4 duration-500 transition-all border-b border-b-[rgb(38_37_37)] lg:pb-[30px] pb-5 lg:pt-[30px] pt-[20px]"
              data-aos="fade-up"
              data-aos-duration={1000}
            >
              <span className="w-[60px] h-[60px] rounded-full bg-clr_base flex justify-center items-center">
                <i className="bi-envelope text-[26px] text-clr_title" />
              </span>
              <span className="">
                <span className="text-clr_pra md:text-lg text-base mb-1 block">
                  Email
                </span>
                <a
                  href="#"
                  className="text-white md:text-xl text-base font-medium"
                >
                  adeyemok831@gmail.com
                </a>
              </span>
            </div>
            <div
              className="hover:border-b hover:border-b-clr_base flex ga-5 items-center md:gap-5 gap-4 duration-500 border-b border-b-[rgb(38_37_37)] lg:pb-[30px] pb-5 lg:pt-[30px] pt-[20px]"
              data-aos="fade-up"
              data-aos-duration={1500}
            >
              <span className="w-[60px] h-[60px] rounded-full bg-clr_base flex justify-center items-center">
                <i className="bi-geo-alt text-[26px] text-clr_title" />
              </span>
              <span className="">
                <span className="text-clr_pra md:text-lg text-base mb-1 block">
                  Location
                </span>
                <a
                  href="#"
                  className="text-white md:text-xl text-base font-medium"
                >
                Kwara ilorin
                </a>
              </span>
            </div>
          </div>
          {/* ---------- Metting system */}
        </div>
        {/* --------- Right side / image */}
        <div>
          <div data-aos="zoom-in" data-aos-duration={2000}>
            <img src="assets/img/project/project-need.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  </section>


  {/* ----------- Work Process start */}
  <section class="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden pt_120 pb_120">
    <div class="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">

      <div class="text-center max-w-[920px] mx-auto md:mb-[60px] sm:mb-[50px] mb-[45px]">
        <p class="text-2xl font-caveat text-clr_base relative flex justify-center items-center sm:gap-6 gap-[14px] mx-auto mb-[30px]"
          data-aos="fade-down" data-aos-duration="1000">
          <span class="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
          Working Process
          <span class="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
        </p>
        <h2
          class="font-medium lg:text-6xl md:text-5xl sm:text-4xl text-[29px] text-white lg:leading-[120%] md:leading-tight leading-9"
          data-aos="fade-up" data-aos-duration="1200">
          Your Dream Website In Just Few Steps
        </h2>
      </div>


      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
        <div data-aos="flip-up" data-aos-duration="500">
          <div
            class="overflow-hidden duration-500 border border-clr_cusborder rounded-[10px] p-[30px] relative after:absolute after:w-[50px] after:h-[50px] after:bottom-0 after:right-0 after:content-[''] after:bg-[#121212] after:rounded-tl-[100px] after:rounded-tr-[20px] after:duration-500 hover:border-clr_base hover:after:bg-clr_base">
            <h2 class="text-white lg:mb-6 mb-4 capitalize sm:text-[40px] text-3xl leading-[120%] font-semibold">
            Front-End
            </h2>
            <p class="lg:mb-[30px] mb-5 text-clr_pra text-lg">
            Focuses on  technologies like HTML, CSS ,Tailwind, React,next.jsand JavaScript .
            </p>
            <ul>
              <li class="relative flex items-center gap-[10px] text-[#999999] pl-5 mb-2 last:mb-0">
                <span class="w-[9px] h-[9px] bg-clr_base rounded-full"></span>
                <p class="text-sm">User Interface</p>
              </li>
              <li class="relative flex items-center gap-[10px] text-[#999999] pl-5 mb-2 last:mb-0">
                <span class="w-[9px] h-[9px] bg-clr_base rounded-full"></span>
                <p class="text-sm">
                Responsive Design
                </p>
              </li>
              <li class="relative flex items-center gap-[10px] text-[#999999] pl-5 mb-2 last:mb-0">
                <span class="w-[9px] h-[9px] bg-clr_base rounded-full"></span>
                <p class="text-sm">Client-Side Scripting</p>
              </li>
            </ul>
          </div>
        </div>
        <div data-aos="flip-up" data-aos-duration="500">
          <div
            class="overflow-hidden duration-500 border border-clr_cusborder rounded-[10px] p-[30px] relative after:absolute after:w-[50px] after:h-[50px] after:bottom-0 after:right-0 after:content-[''] after:bg-[#121212] after:rounded-tl-[100px] after:rounded-tr-[20px] after:duration-500 hover:border-clr_base hover:after:bg-clr_base">
            <h2 class="text-white lg:mb-6 mb-4 capitalize sm:text-[40px] text-3xl leading-[120%] font-semibold">
              Design
            </h2>
            <p class="lg:mb-[30px] mb-5 text-clr_pra text-lg">
            A design concept is the backbone of any successful design project.
            </p>
            <ul>
              <li class="relative flex items-center gap-[10px] text-[#999999] pl-5 mb-2 last:mb-0">
                <span class="w-[9px] h-[9px] bg-clr_base rounded-full"></span>
                <p class="text-sm">Developing wireframes and mockup</p>
              </li>
              <li class="relative flex items-center gap-[10px] text-[#999999] pl-5 mb-2 last:mb-0">
                <span class="w-[9px] h-[9px] bg-clr_base rounded-full"></span>
                <p class="text-sm">Choosing typography, color palettes,</p>
              </li>
              <li class="relative flex items-center gap-[10px] text-[#999999] pl-5 mb-2 last:mb-0">
                <span class="w-[9px] h-[9px] bg-clr_base rounded-full"></span>
                <p class="text-sm">Refining the design</p>
              </li>
            </ul>
          </div>
        </div>
        <div data-aos="flip-up" data-aos-duration="500">
          <div
            class="overflow-hidden duration-500 border border-clr_cusborder rounded-[10px] p-[30px] relative after:absolute after:w-[50px] after:h-[50px] after:bottom-0 after:right-0 after:content-[''] after:bg-[#121212] after:rounded-tl-[100px] after:rounded-tr-[20px] after:duration-500 hover:border-clr_base hover:after:bg-clr_base">
            <h2 class="text-white lg:mb-6 mb-4 capitalize sm:text-[40px] text-3xl leading-[120%] font-semibold">
              Webflow
            </h2>
            <p class="lg:mb-[30px] mb-5 text-clr_pra text-lg">
            Webflow is a web design platform that allows users to build responsive websites.
            </p>
            <ul>
              <li class="relative flex items-center gap-[10px] text-[#999999] pl-5 mb-2 last:mb-0">
                <span class="w-[9px] h-[9px] bg-clr_base rounded-full"></span>
                <p class="text-sm">Testing the website thoroughly launch</p>
              </li>
              <li class="relative flex items-center gap-[10px] text-[#999999] pl-5 mb-2 last:mb-0">
                <span class="w-[9px] h-[9px] bg-clr_base rounded-full"></span>
                <p class="text-sm">Choosing typography, color palettes,</p>
              </li>
              <li class="relative flex items-center gap-[10px] text-[#999999] pl-5 mb-2 last:mb-0">
                <span class="w-[9px] h-[9px] bg-clr_base rounded-full"></span>
                <p class="text-sm">Refining the design</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ----------- Work Process End */}
  <footer>
    <div class="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
      <div class="pt-10 pb-[120px]">
        <div
          class="fl text-[10.5vw] uppercase font-medium leading-none w-full xl:mb-[60px] sm:mb-10 mb-5 border border-clr_cusborder rounded-lg text-center p-[10px] text-white"
          data-aos="fade-up" data-aos-duration="1000">
          Get In Touch
        </div>
        <div class="flex md:flex-row flex-col justify-between gap-4">
          <div class="basis-1/2 shrink">
            <div>
              <p class="xl:mb-[60px] lg:mb-10 mb-[10px] lg:text-2xl sm:text-lg text-[17px] text-white max-w-lg">
                Hello, I m Adeyemo Adesire, Website &  Software Documentation
                based in Kwara.
              </p>
              <a href="#" class="text-white lg:text-4xl sm:text-[28px] text-lg underline">
                adeyemok831@gmail.com
              </a>
            </div>
          </div>
          <div class="basis-1/2 shrink">
            <div>
              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <a href="https://www.facebook.com/olamide.adeyemo.94"
                    class="lg:py-[26px] py-[14px] lg:px-7 px-6 rounded-[10px] border border-clr_cusborder flex items-center justify-between text-white lg:text-2xl text-xl duration-500 hover:bg-clr_base hover:border-clr_base hover:text-clr_title group">
                    Facebook
                    <i class="bi-arrow-right text-white text-[22px] duration-500 group-hover:text-clr_title"></i>
                  </a>
                </div>
                <div>
                  <a href="https://x.com/Adeyemo390"
                    class="lg:py-[26px] py-[14px] lg:px-7 px-6 rounded-[10px] border border-clr_cusborder flex items-center justify-between text-white lg:text-2xl text-xl duration-500 hover:bg-clr_base hover:border-clr_base hover:text-clr_title group">
                    Twitter
                    <i class="bi-arrow-right text-white text-[22px] duration-500 group-hover:text-clr_title">
                    <FaXTwitter/>
                    </i>
                  </a>
                </div>
                <div>
                  <a href="#"
                    class="lg:py-[26px] py-[14px] lg:px-7 px-6 rounded-[10px] border border-clr_cusborder flex items-center justify-between text-white lg:text-2xl text-xl duration-500 hover:bg-clr_base hover:border-clr_base hover:text-clr_title group">
                    Linkdin
                    <i class="bi-arrow-right text-white text-[22px] duration-500 group-hover:text-clr_title"></i>
                  </a>
                </div>
                <div>
                  <a href="#"
                    class="lg:py-[26px] py-[14px] lg:px-7 px-6 rounded-[10px] border border-clr_cusborder flex items-center justify-between text-white lg:text-2xl text-xl duration-500 hover:bg-clr_base hover:border-clr_base hover:text-clr_title group">
                    Webflow
                    <i class="bi-arrow-right text-white text-[22px] duration-500 group-hover:text-clr_title"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class=" bg-common_bg bg-no-repeat bg-center bg-cover">
      <div class="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
        <div class="flex flex-col lg:flex-row items-center justify-between py-[34px] lg:flex-nowrap gap-4">
          <p class="text-white text-lg">
            Copyright © 2023
            <a href="#" class="text-clr_base"> Desire </a>
            All rights reserved.
          </p>
          <ul class="terms flex gap-[38px]">
            <li>
              <a href="#" class="text-lg text-white duration-500 hover:text-clr_base">
                Terms & Condition
              </a>
            </li>
            <li>
              <a href="#" class="text-lg text-white duration-500 hover:text-clr_base">
                Privacy Policy
              </a>
            </li>
          </ul>
          <a href="index.html#about" class=" w-10 h-[50px] bg-clr_base rounded-[5px] flex justify-center items-center">
            <i class="bi-arrow-up text-lg"> </i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</>


    </div>
  )
}

export default page