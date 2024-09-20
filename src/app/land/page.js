
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
  <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3 pt_120 pb_120">
    <div className="flex justify-center">
      <div>
        <div className="text-center">
          <h1 className="lg:text-6xl sm:text-4xl text-3xl text-white lg:mb-10 sm:mb-9 mb-6 font-bold">
            My Work &amp; Portfolio
          </h1>
          <ul className="flex items-center justify-center sm:flex-nowrap flex-wrap gap-3">
            <li className="text-2xl font-caveat">
              <a href="land" className="text-white">
                Home
              </a>
            </li>
            <li className="text-white text-2xl">/</li>
            <li className="text-clr_base font-caveat text-2xl">Work</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* Page heading end */}
  {/* -------- Protfolios start */}
  <section className="pb_120">
    <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
      <div>
        {/* ------- Nav */}
        <ul
          className="tablinks border border-clr_cusborder p-[10px] rounded-lg max-w-[683px] mx-auto md:mb-[60px] mb-10 flex items-center md:flex-nowrap flex-wrap md:justify-normal justify-center md:gap-0 gap-[5px]"
          data-aos="fade-down"
          data-aos-duration={2000}
        >
          <li className="nav-links md:border-t-0 md:border-b-0 md:border-l-0 border border-clr_cusborder md:border-r md:border-r-clr_cusborder md:last:border-r-0">
            <button
              data="all.html"
              className="tablink border-none text-center md:inline-block block text-lg md:py-4 md:px-6 py-[11px] px-5 rounded-[5px] bg-clr_base text-clr_title"
            >
              All
            </button>
          </li>
          <li className="nav-links md:border-t-0 md:border-b-0 md:border-l-0 border border-clr_cusborder md:border-r md:border-r-clr_cusborder md:last:border-r-0">
            <button
              data="branding_app.html"
              className="tablink border-none text-center md:inline-block block text-lg md:py-4 md:px-6 py-[11px] px-5 rounded-[5px] text-clr_pra"
            >
              Branding-app
            </button>
          </li>
          <li className="nav-links md:border-t-0 md:border-b-0 md:border-l-0 border border-clr_cusborder md:border-r md:border-r-clr_cusborder md:last:border-r-0">
            <button
              data="los_app.html"
              className="tablink border-none text-center md:inline-block block text-lg md:py-4 md:px-6 py-[11px] px-5 rounded-[5px] text-clr_pra"
            >
              Los-app
            </button>
          </li>
          <li className="nav-links md:border-t-0 md:border-b-0 md:border-l-0 border border-clr_cusborder md:border-r md:border-r-clr_cusborder md:last:border-r-0">
            <button
              data="landing_page.html"
              className="tablink border-none text-center md:inline-block block text-lg md:py-4 md:px-6 py-[11px] px-5 rounded-[5px] text-clr_pra"
            >
              Landing Page
            </button>
          </li>
          <li className="nav-links md:border-t-0 md:border-b-0 md:border-l-0 border border-clr_cusborder md:border-r md:border-r-clr_cusborder md:last:border-r-0">
            <button
              data="website.html"
              className="tablink border-none text-center md:inline-block block text-lg md:py-4 md:px-6 py-[11px] px-5 rounded-[5px] text-clr_pra"
            >
              Website
            </button>
          </li>
        </ul>
        {/* ------- Nav */}
        {/* ---------- Card Group */}
  <div class="md:columns-2 col-span-1 xxl:gap-[58px] lg:gap-12 md:gap-[30px]">
        <div class="project__item overflow-hidden group xl:mb-[60px] lg:mb-[50px] mb-[30px]" data-aos="fade-up"
          data-aos-duration="1000">
          <a href="https://gateway.tulupay.com"
            class="imgc overflow-hidden lg:mb-[30px] mb-[20px] block w-full cursor-pointer">
            <img src="assets/img/project/ourapp.svg" alt="img"
              class="w-full overflow-hidden duration-500 rounded-[10px] group-hover:scale-105" />
          </a>
          <div class="content flex items-center justify-between gap-1">
            <a href="protfolio.html" class="left__cont">
              <span class="text-clr_base xl:mb-4 mb-2 block uppercase xl:text-lg text-base">
                PRODUCT DESIGN
              </span>
              <h3 class="xl:text-[30px] sm:text-2xl text-xl font-semibold text-white">
                Tulu Gateway
              </h3>
            </a>
           <a href="https://gateway.tulupay.com"
              class="imgc h-[45px] w-[45px] sm:w-[60px] sm:h-[60px] rounded-md bg-[#1D1D1D] flex justify-center items-center duration-500 group-hover:bg-clr_base cursor-pointer">
              <i class="duration-500 group-hover:text-clr_title text-lg sm:text-xl text-white"><GoArrowUpRight /></i>
            </a>
          </div>
        </div>

        <div class="overflow-hidden group xl:mb-[60px] lg:mb-[50px] mb-[30px]" data-aos="fade-up"
          data-aos-duration="1000">
          <a href="https://tulupay.com"
            class="imgc overflow-hidden lg:mb-[30px] mb-[20px] block w-full cursor-pointer">
            <img src="assets/img/project/Tulupay Thumbnail.png" alt="img"
              class="w-full overflow-hidden duration-500 rounded-[10px] group-hover:scale-105" />
          </a>

          <div class="content flex items-center justify-between gap-1">
            <a href="protfolio.html" class="left__cont">
              <span class="text-clr_base xl:mb-4 mb-2 block uppercase xl:text-lg text-base">
              PRODUCT DESIGN
              </span>
              <h3 class="xl:text-[30px] sm:text-2xl text-xl font-semibold text-white">
                Tulu Website
              </h3>
            </a>
           <a href="https://gateway.tulupay.com"
              class="imgc h-[45px] w-[45px] sm:w-[60px] sm:h-[60px] rounded-md bg-[#1D1D1D] flex justify-center items-center duration-500 group-hover:bg-clr_base cursor-pointer">
              <i class="bi-arrow-up-right duration-500 group-hover:text-clr_title text-lg sm:text-xl text-white"><GoArrowUpRight /></i>
            </a>
          </div>
        </div>

        <div class="overflow-hidden group" data-aos="fade-up" data-aos-duration="1000">
         <a href="https://purse.tulupay.com"
            class="imgc overflow-hidden lg:mb-[30px] mb-[20px] block w-full cursor-pointer">
              <img src="assets/img/project/purse.svg" alt="img"
            class="w-full overflow-hidden duration-500 rounded-[10px] group-hover:scale-105" />
          </a>
          <div class="content flex items-center justify-between gap-1">
            <a href="protfolio.html" class="left__cont">
              <span class="text-clr_base xl:mb-4 mb-2 block uppercase xl:text-lg text-base">
                PRODUCT DESIGN
              </span>
              <h3 class="xl:text-[30px] sm:text-2xl text-xl font-semibold text-white">
               Tulu Purse
              </h3>
            </a>
          <a href="https://purse.tulupay.com"
              class="imgc h-[45px] w-[45px] sm:w-[60px] sm:h-[60px] rounded-md bg-[#1D1D1D] flex justify-center items-center duration-500 group-hover:bg-clr_base cursor-pointer">
              <i class="bi-arrow-up-right duration-500 group-hover:text-clr_title text-lg sm:text-xl text-white"><GoArrowUpRight /></i>
            </a>
          </div>
        </div>

        <div class="project__item overflow-hidden group xl:mb-[60px] lg:mb-[50px] mb-[30px]" data-aos="fade-up"
          data-aos-duration="1000">
          <a href="https://switch.tulupay.com"
            class="imgc overflow-hidden lg:mb-[30px] mb-[20px] block w-full cursor-pointer">
            <img src="assets/img/project/paymentimg.png" alt="img"
              class="w-full overflow-hidden duration-500 rounded-[10px] group-hover:scale-105" />
          </a>
          <div class="content flex items-center justify-between gap-1">
            <a href="protfolio.html" class="left__cont">
              <span class="text-clr_base xl:mb-4 mb-2 block uppercase xl:text-lg text-base">
              PRODUCT DESIGN
              </span>
              <h3 class="xl:text-[30px] sm:text-2xl text-xl font-semibold text-white">
                Tulu Switch
              </h3>
            </a>
           <a href="https://switch.tulupay.com"
              class="imgc h-[45px] w-[45px] sm:w-[60px] sm:h-[60px] rounded-md bg-[#1D1D1D] flex justify-center items-center duration-500 group-hover:bg-clr_base cursor-pointer">
              <i class="bi-arrow-up-right duration-500 group-hover:text-clr_title text-lg sm:text-xl text-white"><GoArrowUpRight /></i>
            </a>
          </div>
        </div>

        <div class="project__item overflow-hidden group xl:mb-[60px] lg:mb-[50px] mb-[30px]" data-aos="fade-up"
          data-aos-duration="1000">
          <a href="https://exchange.tulupay.com"
            class="imgc overflow-hidden lg:mb-[30px] mb-[20px] block w-full cursor-pointer">
            <img src="assets/img/project/docs.png" alt="img"
              class="w-full overflow-hidden duration-500 rounded-[10px] group-hover:scale-105" />
          </a>
          <div class="content flex items-center justify-between gap-1">
            <a href="protfolio.html" class="left__cont">
              <span class="text-clr_base xl:mb-4 mb-2 block uppercase xl:text-lg text-base">
              PRODUCT DESIGN
              </span>
              <h3 class="xl:text-[30px] sm:text-2xl text-xl font-semibold text-white">
              Tulu Documentation
              </h3>
            </a>
            <a href="https://exchange.tulupay.com"
              class="imgc h-[45px] w-[45px] sm:w-[60px] sm:h-[60px] rounded-md bg-[#1D1D1D] flex justify-center items-center duration-500 group-hover:bg-clr_base cursor-pointer">
              <i class="bi-arrow-up-right duration-500 group-hover:text-clr_title text-lg sm:text-xl text-white"><GoArrowUpRight /></i>
            </a>
          </div>
        </div>

        <div class="project__item overflow-hidden group" data-aos="fade-up" data-aos-duration="1000">
           <a href="https://wallet.tulupay.com"
            class="imgc overflow-hidden lg:mb-[30px] mb-[20px] block w-full cursor-pointer">
            <img src="assets/img/project/swap.svg" alt="img"
              class="w-full overflow-hidden duration-500 rounded-[10px] group-hover:scale-105" />
          </a>
          <div class="content flex items-center justify-between gap-1">
            <a href="protfolio.html" class="left__cont">
              <span class="text-clr_base xl:mb-4 mb-2 block uppercase xl:text-lg text-base">
              PRODUCT DESIGN
              </span>
              <h3 class="xl:text-[30px] sm:text-2xl text-xl font-semibold text-white">
               Tulu Wallet
              </h3>
            </a>
            <a href="https://wallet.tulupay.com"
              class="imgc h-[45px] w-[45px] sm:w-[60px] sm:h-[60px] rounded-md bg-[#1D1D1D] flex justify-center items-center duration-500 group-hover:bg-clr_base cursor-pointer">
              <i class="bi-arrow-up-right duration-500 group-hover:text-clr_title text-lg sm:text-xl text-white"><GoArrowUpRight /></i>
            </a>
          </div>
        </div>

      </div>


      </div>
    </div>
  </section>
  {/* -------- Protfolios end */}
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
  {/* ---------- Footer */}
  <footer>
    <div class="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
      <div class="pt_120 pb-[120px]">
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