import React from 'react'
import { IoMenuOutline } from "react-icons/io5";
import { BsXLg } from "react-icons/bs";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";



const Menu = () => {
  return (
    <div>
<header
      class="header relative w-full border-b border-b-clr_cusborder z-10 xxl:after:block after:hidden after:absolute after:right-[calc(20%-30px)] after:top-0 after:w-[1px] after:h-full after:content:[''] after:bg-clr_cusborder xxl:before:block before:hidden before:absolute before:left-[calc(15%-40px)] before:top-0 before:w-[1px] before:h-full before:content:[''] before:bg-clr_cusborder">
      <div class="xxl:max-w-[1805px] xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
        <div class="flex justify-between items-center w-full relative py-5">
          <div class="main__logo">
            <a href="/" class=" xl:w-[80px] w-[50px] flex">
              <img src="assets/img/about/desire.png" alt="logo" class="w-30 h-30 object-contain" />
               <h class="text-white font-bold text-[16px] pt-2">Desire</h>
            </a>
          </div>
          <ul
            class="menus flex lg:flex-row flex-col lg:items-center opacity-0 invisible lg:opacity-100 lg:visible lg:gap-[14px] gap-0 fixed z-50 lg:static top-20 left-0 w-full lg:w-auto bg-clr_subtitle min-h-screen lg:min-h-full lg:bg-transparent duration-500 origin-top px-3">
            <li
              class="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
              <a href="/"
                class="text-clr_white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base">
                Home
              </a>
            </li>
            <li
              class="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
              <a href="land"
                class="text-clr_white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base">
                About
              </a>
            </li>
            <li
              class="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
              <a href=""
                class="text-clr_white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base">
                Work
              </a>
            </li>
            <li
              class="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4 group/dropdown dropdown">
              <a href="service"
                class="text-clr_white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base">
                Services
              </a>
              <ul
                class="lg:absolute lg:block hidden static top-[50px] left-0 w-[250px] px-5 py-2 leading-9 z-50 transition-all lg:bg-white lg:shadow-mainShadow justify-center gap-[5px] before:absolute before:content-[''] before:-top-[17.6px] before:left-[26px] before:w-0 before:h-0 before:border-l-[13px] before:border-l-transparent before:border-r-[13px] before:border-r-transparent lg:before:border-b-[18px] lg:before:border-b-white lg:opacity-0 lg:invisible lg:translate-y-11 duration-500 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 dropdownItem">
                <li>
                  <a href="service"
                    class="lg:text-clr_body text-white duration-500 hover:text-clr_base hover:pl-3 block">
                    Services
                  </a>
                </li>
              </ul>
            </li>
            <li
              class="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
              <a href="contact"
                class="text-clr_white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base">
                Contact
              </a>
            </li>
          </ul>
          <div class="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/adeyemo-oluwakemi-0a4154248/"
              class="flex items-center gap-2 xxl:px-[26px] xxl:py-[19px] lg:px-[16px] lg:py-[9px] px-[11px] py-[7px] font-medium text-lg capitalize relative bg-clr_base overflow-hidden rounded-[5px] transition-all text-clr_subtitle max-h-[58px] before:absolute before:content-[''] before:bottom-full before:bg-[#aad302] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0">
              <span class="text-sm xl:text-lg z-10 relative duration-500">
          Hire me
              </span>
              <span>
                <i class="bi bi-arrow-right text-xl z-10 relative duration-500"></i>
              </span>
            </a>
            <div class="header-bar lg:hidden">
              <i class=" text-[30px] text-clr_white cursor-pointer hidden menuCloseIcon"><BsXLg/></i>

              <i class=" text-[30px] text-clr_white cursor-pointer menuActiveIcon"><IoMenuOutline/></i>
            </div>
            <div
              class="drawerActiveIcon xl:w-[58px] xl:h-[58px] w-[39px] h-[39px] rounded-md flex items-center justify-center bg-clr_white cursor-pointer">
              <i class=" lg:text-[30px] text-[22px] text-clr_title"><IoMenuOutline/></i>
            </div>
          </div>
        </div>


        <div class="w-80 h-full fixed z-50 top-0 duration-500 overflow-y-scroll bg-black -right-80 drawer">
          <div
            class="flex justify-center items-center w-10 h-10 m-[10px] bg-clr_base ml-auto p-[5px] rounded-md hover:cursor-pointer drawerCloseIcon">
            <i class="bi-x-lg text-[22px] text-clr_mtitle"><BsXLg/></i>
          </div>
          <div class="grid py-10 px-5">
          <a href="" class=" xl:w-[80px] w-[50px] flex">
              <img src="assets/img/about/desire.png" alt="logo" class="w-30 h-30 object-contain" />
               <h class="text-white font-bold text-[16px] pt-2">Desire</h>
            </a>
            <p class="text-sm my-5 text-clr_pra break-words leading-normal">
             I m DESIRE, a front-end developer passionate about creating user-friendly web experiences.
              I specialize in transforming designs into responsive,
               interactive websites using HTML, CSS, JavaScript, Tailwind,Bootstrap5 and frameworks like React.js and Next.js.
                I prioritize clean, maintainable code and stay updated on the latest industry trends to build performant, accessible solutions.
                 I m a team player who values collaboration and clear communication to bring ideas to life.
                 If you need a developer dedicated to delivering high-quality front-end solutions, I m here to help
            </p>
            <div class="grid gap-6 mb-10">
              <div>
                <div>
                  <span class="block mb-2 uppercase text-clr_pra font-bold text-sm">
                    address
                  </span>
                  <span class=" capitalize text-white font-medium leading-[120%]">
                    Kwara state ilorin
                  </span>
                </div>
              </div>
              <div>
                <div>
                  <span class="block mb-2 uppercase text-clr_pra font-bold text-sm">
                    email
                  </span>
                  <a href="#" class=" text-white font-medium leading-[120%]">
                    adeyemok831@gmail.com
                  </a>
                </div>
              </div>
              <div>
                <div>
                  <span  class="block mb-2 uppercase text-clr_pra font-bold text-sm">
                    call now
                  </span>
                  <a href="#" class=" capitalize text-white font-medium leading-[120%]">
                    09032434519
                  </a>
                </div>
              </div>
            </div>
            <div class="lg:mb-20 mb-14 relative">
              <ul class="social flex gap-[14px]">
                <li>
                  <a href="https://www.facebook.com/olamide.adeyemo.94"
                    class="w-[45px] h-[45px] rounded-full bg-clr_base border border-clr_base flex justify-center items-center">
                    <i class=" text-clr_title"> <CiFacebook /> </i>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/Adeyemo390"
                    class="w-[45px] h-[45px] rounded-full bg-clr_base border border-clr_base flex justify-center items-center">
                    <i class=" text-clr_title"><FaXTwitter/></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/adeyemo-oluwakemi-0a4154248/"
                    class="w-[45px] h-[45px] rounded-full bg-clr_base border border-clr_base flex justify-center items-center">
                    <i class=" text-clr_title"><CiLinkedin /></i>
                  </a>
                </li>
                <li>
                  <a href="#"
                    class="w-[45px] h-[45px] rounded-full bg-clr_base border border-clr_base flex justify-center items-center">
                    <i class=" text-clr_title"><CiInstagram/></i>
                  </a>
                </li>
              </ul>
            </div>
            <a href="@Desire390"
              class="flex justify-center items-center gap-2 font-medium px-[30px] pt-5 pb-[21px] text-lg leading-[120%] capitalize relative bg-clr_base overflow-hidden rounded-[5px] duration-500 text-clr_subtitle before:absolute before:content-[''] before:bottom-full before:bg-[#aad302] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0">
              <span class="z-10 relative duration-500">
                <i class="bi-chevron-right"> </i>
              </span>
              <span class="z-10 relative duration-500">Hire me </span>
            </a>
          </div>
        </div>

      </div>
    </header>


    </div>
  )
}

export default Menu