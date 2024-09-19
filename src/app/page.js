 "use client"
import React from 'react'
import"./entry.73168167.css";
import { FaGithub, FaXTwitter,} from "react-icons/fa6";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { RxDiscordLogo } from "react-icons/rx";
import { GoArrowUpRight } from "react-icons/go";
import Menu from '@/comp/Menu';
import Footer from '@/comp/Footer';

const page = () => {
  return (
<div>
{/* <body> */}
      {/* <div className="rounded-xl overflow-hidden bg-no-repeat bg-right-bottom bg-[url('/asset/Clip.svg')] buttom-[-4%]   bg-[var(--primary-color)] text-[var(--text-color)]" */}
  <div class="bg-[url('/assets/img/banner/banner-bg.png')] bg-no-repeat bg-center bg-cover bg-fixed relative overflow-hidden">
       <Menu/>
    <section id="home">
      <div class="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
        <div class="grid md:grid-cols-[70%_auto] gap-5">
          <div>
            <div
              class="banner__content xl:pt-[140px] xl:pb-[180px] lg:pt-[120px] lg:pb-[150px] md:pt-[90px] md:pb-[100px] sm:pt-[80px] sm:pb-[85px] py-[60px] xl:pl-10 pl-0">
              <a href="#"
                class="bn__currently md:text-[24px] text-base leading-[140%] md:mb-[50px] mb-6 border-b border-b-clr_white text-clr_white inline-block pb-4 hover:text-clr_base hover:border-b-clr_base capitalize">
                <span class="block"> Currently available for frontend </span>
                <span class="flex gap-4 items-center">
                  worldwide
                  <i class="">
                    <i class=""><GoArrowUpRight /></i>
                  </i>
                </span>
              </a>
              <h1
                class="lg:text-[70px] md:text-[60px] sm:text-[45px] text-[34px] font-semibold sm:mb-[50px] mb-[30px] leading-[120%]">
                <span class="hone text-clr_white"> Creative Frontend</span>
                <span class="block designers" data-text="Developer">
                Developer
                </span>
              </h1>
              <div class="flex items-center gap-6">
                <img src="assets/img/banner/bn-arrow.png" class="vid__arrow animate-cir5" alt="img" />
                <a href="https://wallet.tulupay.com"
                  class="video__80 video-btn cursor-pointer relative xl:w-20 xl:h-20 sm:w-[60px] sm:h-[60px]
                   w-[50px] h-[50px] flex justify-center items-center
                    rounded-full border border-clr_white before:absolute before:border-2 before:border-clr_white before:w-full before:h-full before:content:[''] before:rounded-full before:animate-scales">
                  <i class="text-clr_white sm:text-[42px] text-[30px]">
                    <i class="bi bi-play-fill"></i>
                  </i>
                </a>
                <span class="proces sm:text-xl text-base text-clr_white w-[67px]">Work Process</span>
              </div>
            </div>
          </div>
          <div>
            <div data-aos="fade-up-right" data-aos-duration="300"
              class="banner__thumb absolute xxl:left-[calc(50%--120px)] left-[calc(50%--80px)] bottom-0">
              <img src="assets/img/banner/desire.png" alt="man-img" class="w-full h-[750px]" />
            </div>
          </div>
        </div>
      </div>
      <div class="banner__leftinfo hidden absolute -left-[40px] top-1/2 -translate-y-1/2 xl:grid gap-[220px]">
        <div class="left__infomobile rotate-90 flex items-center justify-center gap-[16px]">
          <a href="#">
            <img src="assets/img/banner/dial.png" alt="img" class="-rotate-90 w-4" />
          </a>
          <a href="#" class="text-clr_white">09032434519</a>
        </div>
        <div class="right__infoscroll flex items-center justify-center gap-[50px] rotate-90 mb-[0px]">
          <a href="#" class="scroll text-clr_pra uppercase text-[15px]">
            scroll down
          </a>
          <a href="#" class="scroll__bar -rotate-90">
            <img src="assets/img/banner/scroll-down.png" alt="img" class="w-5" />
          </a>
        </div>
      </div>
      <div class="banner__rightinfo hidden absolute right-0 top-[55%] -translate-y-1/2 xl:grid gap-[150px]">
        <div class="right__infoscroll flex items-center justify-center gap-[50px] rotate-90">
          <a href="#" class="scroll text-clr_pra uppercase text-[15px]">
            Follow Me
          </a>
          <a href="#" class="scroll__bar -rotate-90">
            <img src="assets/img/banner/scroll-down.png" alt="img" class="w-5" />
          </a>
        </div>
        <div class="banner__xlsocial">
          <ul class="banner__soci grid justify-center lg:gap-[14px] gap-[10px]">
            <li>
              <a href="https://www.facebook.com/olamide.adeyemo.94"
                class="lg:w-[46px] lg:h-[46px] h-[38px] w-[38xp] rounded-full bg-[rgb(18_18_18)] flex justify-center items-center">
                <i class="bi bi facebook text-white"><CiFacebook /> </i>
              </a>
            </li>
            <li>
              <a href="#"
                class="lg:w-[46px] lg:h-[46px] h-[38px] w-[38xp] rounded-full bg-[rgb(18_18_18)] flex justify-center items-center">
                <i class=" text-white"> <CiInstagram/></i>
              </a>
            </li>
            <li>
              <a href="https://x.com/Adeyemo390"
                class="lg:w-[46px] lg:h-[46px] h-[38px] w-[38xp] rounded-full bg-[rgb(18_18_18)] flex justify-center items-center">
                  <i class=" text-white"><FaXTwitter/></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Msdesire1"
                class="lg:w-[46px] lg:h-[46px] h-[38px] w-[38xp] rounded-full bg-[rgb(18_18_18)] flex justify-center items-center">
                <i class=" text-white"> <FaGithub/></i>
                 <div classname="text-white">
                  </div>
              </a>
            </li>
            <li>
              <a href="#"
                class="lg:w-[46px] lg:h-[46px] h-[38px] w-[38xp] rounded-full bg-[rgb(18_18_18)] flex justify-center items-center">
                 <i class=" text-white"><RxDiscordLogo />
                 </i>

              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

  </div>

  <div class="relative marquee-wrapper text-slider bg-clr_base h-[90px] overflow-hidden">
    <div class="slide-track">
      <div class="slide flex gap-3">
        <img src="assets/img/banner/slider.png" alt="" />
        <h1 class="text-black pt-2 texl-[30px]"> A Frontend Developer</h1>
      </div>
      <div class="slide flex gap-3">
        <img src="assets/img/banner/slider.png" alt="" />
        <h1 class="text-black pt-2 texl-[30px]"> A Frontend Developer</h1>
      </div>
      <div class="slide flex gap-3">
        <img src="assets/img/banner/slider.png" alt="" />
        <h1 class="text-black pt-2 texl-[30px]"> Technical Write-Ups for API</h1>
      </div>
      <div class="slide flex gap-3">
        <img src="assets/img/banner/slider.png" alt="" />
        <h1 class="text-black pt-2 texl-[30px]"> Software Documentation</h1>
      </div>
      <div class="slide flex gap-3">
        <img src="assets/img/banner/slider.png" alt="" />
        <h1 class="text-black pt-2 texl-[30px]"> Email Template </h1>
      </div>
      <div class="slide flex gap-3">
        <img src="assets/img/banner/slider.png" alt="" />
        <h1 class="text-black pt-2 texl-[30px]"> A Researcher</h1>
      </div>
      <div class="slide flex gap-3">
        <img src="assets/img/banner/slider.png" alt="" />
        <h1 class="text-black pt-2 texl-[30px]"> A Frontend Developer</h1>
      </div>
      <div class="slide flex gap-3">
        <img src="assets/img/banner/slider.png" alt="" />
        <h1 class="text-black pt-2 texl-[30px]"> A Frontend Developer</h1>
      </div>
    </div>
  </div>


  <section class="about__section pt_120 pb_120" id="about">
    <div class="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">

      <div class="personal__head text-center mx-auto xl:mb-[60px] md:mb-[50px] mb-[30px]">
        <img src="assets/img/about/section-star.png" class="mb-[30px] animate-spin mx-auto" alt="star"
          data-aos="fade-up" data-aos-duration="1000" />
        <p class="descrp lg:text-[42px] md:text-[28px] sm:text-xl text-base font-medium text-clr_white lg:leading-[66px]"
          data-aos="fade-up" data-aos-duration="1500">
          I m DESIRE, I m a Frontend developer, Currently residing
           127b around winner church gaa-imam ilorin kwara state, I m
          ready to convert any  UI/UX design  with API integration.
        </p>
      </div>

      <div class="singletab">

        <ul class="tablinks flex items-center justify-center flex-wrap gap-5 mb-[100px]">
          <li>
            <button data="about.html"
              class="tablink bg-clr_base text-clr_title rounded-[10px] lg:text-lg text-sm uppercase font-medium border-none lg:py-4 lg:px-[30px] py-[10px] px-5 text-center">
              About
            </button>
          </li>
          {/* <li>
            <button data="experience.js"
              class="tablink bg-[#1D1D1D] text-clr_white rounded-[10px] lg:text-lg text-sm uppercase font-medium border-none lg:py-4 lg:px-[30px] py-[10px] px-5 text-center">
              Experience
            </button>
          </li>
          <li>
            <button data="education.js"
              class="tablink bg-[#1D1D1D] text-clr_white rounded-[10px] lg:text-lg text-sm uppercase font-medium border-none lg:py-4 lg:px-[30px] py-[10px] px-5 text-center">
              Education
            </button>
          </li>
          <li>
            <button data="skills.js"
              class="tablink bg-[#1D1D1D] text-clr_white rounded-[10px] lg:text-lg text-sm uppercase font-medium border-none lg:py-4 lg:px-[30px] py-[10px] px-5 text-center">
              Skills
            </button>
          </li> */}
        </ul>

        <div class="tabcontents relative">

          <div data="about.html" class="tabitem w-full duration-700 z-10 opacity-100 translate-y-0">

            <div
              class="about__v1wrap bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden sm:p-[60px] py-[30px] px-[10px]">
              <div class="grid lg:grid-cols-[41%_auto] gap-6 lg:items-start align-items-center">
                <div>
                  <div class="about__onethumb w-full" data-aos="zoom-in" data-aos-duration="500">
                    <img src="assets/img/about/personal-infothumb.png" alt="img" class="w-full" />
                  </div>
                </div>
                <div>
                  <div class="about__onecontent lg:pl-10 pl-0">
                    <h2 class="text-[42px] font-semibold text-clr_white mb-5" data-aos="fade-up"
                      data-aos-duration="500">
                      Personal Info
                    </h2>
                    <p class="text-lg text-clr_pra mb-0" data-aos="fade-up" data-aos-duration="500">
                    A passionate and detail-oriented frontend developer with 2 years of experience in building responsive, user-friendly web applications. Proficient in modern web technologies such as HTML, CSS, JavaScript, and popular frameworks like React.js and Next.js. Adept at translating design mockups into pixel-perfect code and optimizing web applications for maximum speed and scalability. Committed to continuous learning and staying updated with the latest industry trends.
                    </p>
                    <div class="mt-10">
                      <div class="">
                        <div class="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 grid-cols-1 justify-between gap-6"
                          data-aos="zoom-in">
                          <div
                            class="abox rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                            <div class="">
                              <span class="ptext text-clr_pra fz-18 md:text-lg text-base mb-5 block">
                                Email
                              </span>
                              <a href="#" class="text-xl text-clr_white">adeyemok831@gmail.com</a>
                            </div>
                          </div>
                          <div
                            class="abox rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                            <div class="">
                              <span class="ptext text-clr_pra fz-18 md:text-lg text-base mb-5 block">
                                Phone
                              </span>
                              <a href="#" class="text-xl text-clr_white">09032434519</a>
                            </div>
                          </div>
                          <div
                            class="abox rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                            <div class="">
                              <span class="ptext text-clr_pra fz-18 md:text-lg text-base mb-5 block">
                                Address
                              </span>
                              <a href="#" class="text-xl text-clr_white">Kwara state, ilorin</a>
                            </div>
                          </div>
                          <div
                            class="abox rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                            <div class="">
                              <span class="ptext text-clr_pra fz-18 md:text-lg text-base mb-5 block">
                                Follow
                              </span>
                              <ul class="flex items-center xl:gap-4 gap-2">
                                <li>
                                  <a href="https://www.facebook.com/olamide.adeyemo.94" class="text-clr_white text-2xl">
                                    {/* <i class="bi-facebook"></i> */}
                                    <CiFacebook />
                                  </a>
                                </li>
                                <li>
                                  <a href="https://x.com/Adeyemo390" class="text-clr_white text-xl">
                                    {/* <i class="bi-twitter"></i> */}
                                    <CiInstagram/>
                                  </a>
                                </li>
                                <li>
                                  <a href="#" class="text-clr_white text-xl">
                                    {/* <i class="bi-instagram"></i> */}
                                    <FaXTwitter/>
                                  </a>
                                </li>
                                <li>
                                  <a href="https://github.com/Msdesire1" class="text-clr_white text-xl">
                                    {/* <i class="bi-youtube"></i> */}
                                    <FaGithub/>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div data="experience.html" class="tabitem w-full duration-700 top-0 absolute translate-y-20 -z-10 opacity-0">
            <div
              class="about__v1wrap bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden sm:p-[60px] py-[30px] px-[10px]">
              <div class="grid lg:grid-cols-[41%_auto] gap-6 lg:items-start items-center">
                <div>
                  <div class="about__onethumb">
                    <img src="assets/img/about/personal-infothumb.png" alt="img" />
                  </div>
                </div>
                <div>
                  <div class="about__onecontent lg:pl-10 pl-0">
                    <h2 class="text-[42px] font-semibold text-clr_white mb-5">
                      Experience
                    </h2>
                    <p class="text-lg text-clr_pra mb-0">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor
                      sit consectetur &lsquo aliquam quaerats voluptatem. Ut enim ad
                      minima veniam, exercitationem laboriosam, nisi ut
                      aliquid ex ea autem velit esse quam nihil
                    </p>
                    <div class="exprience__box lg:mt-[30px] mt-5">
                      <div
                        class="exri__item flex items-center justify-between border-t border-t-clr_cusborder py-6 duration-500 last:border-y last:border-b-clr_cusborder hover:border-clr_hover">
                        <span class="md:text-lg text-base font-medium text-clr_base">
                          In 2011
                        </span>
                        <div class="expri__cont">
                          <h4 class="mb-[15px] text-white font-semibold md:text-2xl text-lg leading-[130px]">
                            Software Engineer
                          </h4>
                          <p class="md:text-lg text-base text-clr_pra d-block">
                            UI Head & Manager
                          </p>
                        </div>
                      </div>
                      <div
                        class="exri__item flex items-center justify-between border-t border-t-clr_cusborder py-6 duration-500 last:border-y last:border-b-clr_cusborder hover:border-clr_hover">
                        <span class="md:text-lg text-base font-medium text-clr_base">
                          In 2016
                        </span>
                        <div class="expri__cont">
                          <h4 class="mb-[15px] text-white font-semibold md:text-2xl text-lg leading-[130px]">
                            Product Designer
                          </h4>
                          <p class="md:text-lg text-base text-clr_pra d-block">
                            Head of Department
                          </p>
                        </div>
                      </div>
                      <div
                        class="exri__item flex items-center justify-between border-t border-t-clr_cusborder py-6 duration-500 last:border-y last:border-b-clr_cusborder hover:border-clr_hover">
                        <span class="md:text-lg text-base font-medium text-clr_base">
                          In 2023
                        </span>
                        <div class="expri__cont">
                          <h4 class="mb-[15px] text-white font-semibold md:text-2xl text-lg leading-[130px]">
                            Senior UI Designer
                          </h4>
                          <p class="md:text-lg text-base text-clr_pra d-block">
                            Fiverr.com
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div data="education.html" class="tabitem w-full duration-700 top-0 absolute translate-y-20 -z-10 opacity-0">
            <div
              class="about__v1wrap bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden sm:p-[60px] py-[30px] px-[10px]">
              <div class="grid lg:grid-cols-[41%_auto] gap-6 lg:items-start items-center">
                <div>
                  <div class="about__onethumb">
                    <img src="assets/img/about/personal-infothumb.png" alt="img" />
                  </div>
                </div>
                <div>
                  <div class="about__onecontent lg:pl-10 pl-0">
                    <h2 class="text-[42px] font-semibold text-clr_white mb-5">
                      Education
                    </h2>
                    <p class="text-lg text-clr_pra mb-0">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor
                      sit consectetur, aliquam quaerats voluptatem. Ut enim ad
                      minima veniam, exercitationem laboriosam, nisi ut
                      aliquid ex ea autem velit esse quam nihil
                    </p>
                    <div class="exprience__box lg:mt-[30px] mt-5">
                      <div
                        class="exri__item flex items-center justify-between border-t border-t-clr_cusborder py-6 duration-500 last:border-y last:border-b-clr_cusborder hover:border-clr_hover">
                        <span class="md:text-lg text-base font-medium text-clr_base">
                          2011 - 2013
                        </span>
                        <div class="expri__cont">
                          <h4 class="mb-[15px] text-white font-semibold md:text-2xl text-lg leading-[130px]">
                            Programming Course
                          </h4>
                          <p class="md:text-lg text-base text-clr_pra d-block">
                            New York University
                          </p>
                        </div>
                      </div>
                      <div
                        class="exri__item flex items-center justify-between border-t border-t-clr_cusborder py-6 duration-500 last:border-y last:border-b-clr_cusborder hover:border-clr_hover">
                        <span class="md:text-lg text-base font-medium text-clr_base">
                          2013 - 2016
                        </span>
                        <div class="expri__cont">
                          <h4 class="mb-[15px] text-white font-semibold md:text-2xl text-lg leading-[130px]">
                            University Of Design
                          </h4>
                          <p class="md:text-lg text-base text-clr_pra d-block">
                            Kingston, United States
                          </p>
                        </div>
                      </div>
                      <div
                        class="exri__item flex items-center justify-between border-t border-t-clr_cusborder py-6 duration-500 last:border-y last:border-b-clr_cusborder hover:border-clr_hover">
                        <span class="md:text-lg text-base font-medium text-clr_base">
                          2016 - 2018
                        </span>
                        <div class="expri__cont">
                          <h4 class="mb-[15px] text-white font-semibold md:text-2xl text-lg leading-[130px]">
                            Web Design Course
                          </h4>
                          <p class="md:text-lg text-base text-clr_pra d-block">
                            New York University
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div data="skills.html" class="tabitem w-full duration-700 top-0 absolute translate-y-20 -z-10 opacity-0">
            <div
              class="about__v1wrap bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden sm:p-[60px] py-[30px] px-[10px]">
              <div class="grid lg:grid-cols-[41%_auto] gap-6 lg:items-start items-center">
                <div>
                  <div class="about__onethumb">
                    <img src="assets/img/about/personal-infothumb.png" alt="img" />
                  </div>
                </div>
                <div>
                  <div class="about__onecontent">
                    <h2 class="text-[42px] font-semibold text-clr_white mb-5">
                      My Skills
                    </h2>
                    <p class="text-lg text-clr_pra mb-0">



I m DESIRE, a skilled front-end developer with a strong command of modern web technologies.
 My expertise lies in crafting responsive, high-performance user interfaces using HTML5, CSS3, and JavaScript (ES6+).
  I m proficient in leveraging front-end frameworks and libraries like React.js and Next.js to build dynamic, single-page applications (SPAs) that deliver seamless user experiences.

I prioritize writing clean, modular, and maintainable code, ensuring scalability and ease of collaboration.
 My development process involves utilizing tools such as Webpack, Babel, and ESLint to optimize and standardize codebases.
  I am also experienced in implementing RESTful APIs, integrating third-party services, and ensuring cross-browser compatibility.

With a keen eye for detail, I focus on ensuring pixel-perfect design implementation while maintaining accessibility standards (WCAG 2.1).
 I m always looking to push the boundaries of what&lsquo s possible on the web, staying current with the latest advancements in front-end development.
                    </p>
                    <div class="mt-10">
                      <div class="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 grid-cols-1 justify-between gap-6">
                        <div
                          class="rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                          <div class="abox myskill__item flex items-center gap-6">
                            <div class="">
                              <img src="assets/img/about/html.png" alt="img" />
                            </div>
                            <div class="mys">
                              <span
                                class="ptext md:text-lg text-base lg:mb-[15px] mb-[10px] block text-clr_pra">HTML</span>
                              <h1 class="font-semibold text-5xl text-clr_white">
                                85%
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div
                          class="rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                          <div class="abox myskill__item flex items-center gap-6">
                            <div class="">
                              <img src="assets/img/about/figma.png" alt="img" />
                            </div>
                            <div class="mys">
                              <span
                                class="ptext md:text-lg text-base lg:mb-[15px] mb-[10px] block text-clr_pra">Figma</span>
                              <h1 class="font-semibold text-5xl text-clr_white">
                                90%
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div
                          class="rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                          <div class="abox myskill__item flex items-center gap-6">
                            <div class="">
                              <img src="assets/img/about/word.png" alt="img" />
                            </div>
                            <div class="mys">
                              <span
                                class="ptext md:text-lg text-base lg:mb-[15px] mb-[10px] block text-clr_pra">Wordpress</span>
                              <h1 class="font-semibold text-5xl text-clr_white">
                                95%
                              </h1>
                            </div>
                          </div>
                        </div>
                        <div
                          class="rounded-[10px] bg-[#1D1D1D] p-[35px] border border-[#1D1D1D] duration-500 hover:border-clr_base">
                          <div class="abox myskill__item flex items-center gap-6">
                            <div class="">
                              <img src="assets/img/about/boot.png" alt="img" />
                            </div>
                            <div class="mys">
                              <span
                                class="ptext md:text-lg text-base lg:mb-[15px] mb-[10px] block text-clr_pra">Bootstrap</span>
                              <h1 class="font-semibold text-5xl text-clr_white">
                                97%
                              </h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
  {/* <div class="relative marquee-wrapper text-slider bg-clr_base h-[90px] overflow-hidden">
    <div class="slide-track slide-track2">
      <div class="slide">
        <img src="assets/img/banner/ts5.png" alt="" />
      </div>
      <div class="slide">
        <img src="assets/img/banner/ts6.png" alt="" />
      </div>
      <div class="slide">
        <img src="assets/img/banner/ts7.png" alt="" />
      </div>
      <div class="slide">
        <img src="assets/img/banner/ts8.png" alt="" />
      </div>
      <div class="slide">
        <img src="assets/img/banner/ts5.png" alt="" />
      </div>
      <div class="slide">
        <img src="assets/img/banner/ts6.png" alt="" />
      </div>
      <div class="slide">
        <img src="assets/img/banner/ts7.png" alt="" />
      </div>
      <div class="slide">
        <img src="assets/img/banner/ts8.png" alt="" />
      </div>
    </div>
  </div> */}

  <section
    class="awoard__section bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden xxl:py-[120px] xl:py-[100px] py-[60px]">
    <div class="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
      <div class="award__wraper table-responsive" data-aos="fade-up" data-aos-duration="2000">
        <table class="table w-full">
          <tbody>
            <tr>
              <td
                class="bg-transparent lg:text-xl md:text-lg text-base font-medium text-white py-[30px] border-b border-b-[#2c3030]">
                <span class="table__title md:text-[42px] sm:text-[28px] text-lg">Our Product</span>
              </td>
              <td
                class="cusnoe bg-transparent lg:text-xl md:text-lg text-base font-medium text-white py-[30px] border-b border-b-[#2c3030]">
              </td>
              <td
                class="text-end bg-transparent lg:text-xl md:text-lg text-base font-medium text-white py-[30px] border-b border-b-[#2c3030]">
                <a href="#"
                  class="table__view md:text-lg sm:text-base text-sm flex justify-end items-center text-clr_base gap-2">
                  <span class="whitespace-nowrap">View My Work</span>
                  <i class="bi-arrow-right"> </i>
                </a>
              </td>
            </tr>

            <tr>
              <td
                class="bg-transparent lg:text-xl md:text-lg sm:text-base text-sm font-medium text-white py-[30px] border-b border-b-[#2c3030]">
                Tulupay website
              </td>
              <td
                class="bg-transparent lg:text-xl md:text-lg sm:text-base text-sm font-medium text-white py-[30px] border-b border-b-[#2c3030]">
               Bussiness
              </td>
              <td
                class="text-end bg-transparent lg:text-xl md:text-lg sm:text-base text-sm font-medium text-white py-[30px] border-b border-b-[#2c3030]">
                2022
              </td>
            </tr>
            <tr>
              <td
                class="bg-transparent lg:text-xl md:text-lg sm:text-base text-sm font-medium text-white py-[30px] border-b border-b-[#2c3030]">
                Tulu switch
              </td>
              <td
                class="bg-transparent lg:text-xl md:text-lg sm:text-base text-sm font-medium text-white py-[30px] border-b border-b-[#2c3030]">
                Payment
              </td>
              <td
                class="text-end bg-transparent lg:text-xl md:text-lg sm:text-base text-sm font-medium text-white py-[30px] border-b border-b-[#2c3030]">
                2023
              </td>
            </tr>
            <tr>
              <td
                class="bg-transparent lg:text-xl md:text-lg sm:text-base text-sm font-medium text-white py-[30px] border-b border-b-[#2c3030]">
              Tulu gateway
              </td>
              <td
                class="bg-transparent lg:text-xl md:text-lg sm:text-base text-sm font-medium text-white py-[30px] border-b border-b-[#2c3030]">
                Transcations
              </td>
              <td
                class="text-end bg-transparent lg:text-xl md:text-lg sm:text-base text-sm font-medium text-white py-[30px] border-b border-b-[#2c3030]">
                2024
              </td>
            </tr>
            <tr>
              <td
                class="bg-transparent lg:text-xl md:text-lg sm:text-base text-sm font-medium text-white py-[30px] border-b border-b-[#2c3030]">
                Tulu Pursre
              </td>
              <td
                class="bg-transparent lg:text-xl md:text-lg sm:text-base text-sm font-medium text-white py-[30px] border-b border-b-[#2c3030]">
                Bank App
              </td>
              <td
                class="text-end bg-transparent lg:text-xl md:text-lg sm:text-base text-sm font-medium text-white py-[30px] border-b border-b-[#2c3030]">
                2024
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="pt_120 pb_120" id="projects">
    <div class="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">

      <div class="text-center max-w-[920px] mx-auto md:mb-[60px] sm:mb-[50px] mb-[45px]">
        <p class="text-2xl font-caveat text-clr_base relative flex justify-center items-center sm:gap-6 gap-[14px] mx-auto mb-[30px]"
          data-aos="fade-down" data-aos-duration="1000">
          <span class="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
          Complete Project
          <span class="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
        </p>
        <h2
          class="font-medium lg:text-6xl md:text-5xl sm:text-4xl text-[29px] text-white lg:leading-[120%] md:leading-tight leading-9"
          data-aos="fade-up" data-aos-duration="1200">
          Look At My Portfolio And Give Me Your Feedback
        </h2>
      </div>


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


      <div class="mt-[100px] flex justify-center">
        <a href="https://github.com/Msdesire1"
          class="md:w-52 md:h-52 w-32 h-32 bg-clr_base rounded-full flex justify-center items-center text-center relative before:w-full before:h-full before:rounded-full before:border before:border-clr_base before:content-[''] before:absolute before:top-[10px] before:-left-[7px] before:duration-500 hover:before:-top-[10px]"
          data-aos="zoom-out-down" data-aos-duration="2000">
          <span class="relative z-10">
            <i
              class="bi-arrow-right mb-[1px] md:text-[28px] text-base text-center flex justify-center text-clr_title transition-all">
            </i>
            <span class="text-[#282828] md:text-lg text-sm font-medium leading-[30px] capitalize transition-all">
              Click More Work
            </span>
          </span>
        </a>
      </div>

    </div>
  </section>



  <section class="bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden pt_120 pb_120">
    <div class="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
      <div class="grid lg:grid-cols-[58%_auto] gap-20 items-center">
        <div>

          <div class="pb-[50px]">
            <span
              class="text-2xl font-caveat text-clr_base relative flex items-center sm:gap-6 gap-[14px] mx-auto mb-[30px]"
              data-aos="fade-down" data-aos-duration="1000">
              <span class="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
              Need a Project?
            </span>
            <h2 class="font-medium lg:text-6xl md:text-5xl sm:text-4xl text-[29px] text-white max-w-[620px]"
              data-aos="fade-down" data-aos-duration="1600">
              Lets Work Together. Fixed A Meeting
            </h2>
          </div>

          <div>
            <div class="border-b border-b-[rgb(39,38,38)] hover:border-b-clr_base duration-500 transition-all"></div>
            <div
              class="hover:border-b hover:border-b-clr_base flex ga-5 items-center md:gap-5 gap-4 duration-500 transition-all border-b border-b-[rgb(38_37_37)] lg:pb-[30px] pb-5 lg:pt-[30px] pt-[20px]"
              data-aos="fade-up" data-aos-duration="1000">
              <span class="w-[60px] h-[60px] rounded-full bg-clr_base flex justify-center items-center">
                <i class="bi-envelope text-[26px] text-clr_title"></i>
              </span>
              <span class="">
                <span class="text-clr_pra md:text-lg text-base mb-1 block">
                  Email
                </span>
                <a href="adeyemok831@gmail.com" class="text-white md:text-xl text-base font-medium">
                adeyemok831@gmail.com</a>
              </span>
            </div>
            <div
              class="hover:border-b hover:border-b-clr_base flex ga-5 items-center md:gap-5 gap-4 duration-500 border-b border-b-[rgb(38_37_37)] lg:pb-[30px] pb-5 lg:pt-[30px] pt-[20px]"
              data-aos="fade-up" data-aos-duration="1500">
              <span class="w-[60px] h-[60px] rounded-full bg-clr_base flex justify-center items-center">
                <i class="bi-geo-alt text-[26px] text-clr_title"></i>
              </span>
              <span class="">
                <span class="text-clr_pra md:text-lg text-base mb-1 block">
                  Location
                </span>
                <a href="#" class="text-white md:text-xl text-base font-medium">
                  kwara state ilorin
                </a>
              </span>
            </div>
          </div>

        </div>

        <div>
          <div data-aos="zoom-in" data-aos-duration="2000">
            <img src="assets/img/project/project-need.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  </section>

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

  {/* <section class="overflow-hidden pt_120 pb_120" id="testimonial">
    <div class="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">

      <div class="text-center md:mb-[60px] sm:mb-[50px] mb-[45px] max-w-[920px] mx-auto">
        <span
          class="text-2xl font-caveat text-clr_base relative flex justify-center items-center sm:gap-6 gap-[14px] mx-auto mb-[30px]"
          data-aos="fade-up" data-aos-duration="1000">
          <span class="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
          <span>Testimonial</span>
          <span class="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
        </span>
        <h2
          class="font-medium lg:text-6xl md:text-5xl sm:text-4xl text-[29px] text-white lg:leading-[120%] md:leading-tight leading-9"
          data-aos="fade-down" data-aos-duration="1000">
          Happy Words From Happy Customer
        </h2>
      </div>

      <div
        class=" bg-common_bg bg-center bg-no-repeat bg-cover rounded-[10px] overflow-hidden lg:py-[130px] lg:px-[60px] md:py-[100px] md:px-[30px] sm:py-4 px-0 py-[10px] relative"
        data-aos="fade-up" data-aos-duration="1000">
        <div>
          <div class="lg:max-w-[66%] w-auto mx-auto">
            <div class="swiper testimonial__slidewrap sm:mr-[10px] sm:ml-[30px] mr-0 ml-0">
              <div class="swiper-wrapper">
                <div class=" swiper-slide relative">
                  <div class="flex lg:mb-10 mb-8 items-center gap-2">
                    <i class="bi-star text-clr_ratting text-xl"></i>
                    <i class="bi-star text-clr_ratting text-xl"></i>
                    <i class="bi-star text-clr_ratting text-xl"></i>
                    <i class="bi-star text-clr_ratting text-xl"></i>
                    <i class="bi-star text-clr_ratting text-xl"></i>
                  </div>
                  <i class="sm:text-xl text-base text-clr_white sm:mb-10 mb-5 block">
                    There are many variations of passages of Lorem Ipsum
                    available, by injected humour, or randomised words which
                    dont look even slightly believable. If you are going to
                    use a passage of Lorem Ipsum, you need to be hidden in
                    middle of text. All the Lorem Ipsum generators
                  </i>
                  <h4 class="text-clr_base mb-2 font-semibold text-2xl leading-[130%]">
                    Shawn Beltran
                  </h4>
                  <span class="text-lg text-clr_pra"> Business Owner </span>
                </div>
                <div class=" swiper-slide relative">
                  <div class="flex lg:mb-10 mb-8 items-center gap-2">
                    <i class="bi-star text-clr_ratting text-xl"></i>
                    <i class="bi-star text-clr_ratting text-xl"></i>
                    <i class="bi-star text-clr_ratting text-xl"></i>
                    <i class="bi-star text-clr_ratting text-xl"></i>
                    <i class="bi-star text-clr_ratting text-xl"></i>
                  </div>
                  <i class="sm:text-xl text-base text-clr_white sm:mb-10 mb-5 block">
                    There are many variations of passages of Lorem Ipsum
                    available, by injected humour, or randomised words which
                    dont look even slightly believable. If you are going to
                    use a passage of Lorem Ipsum, you need to be hidden in
                    middle of text. All the Lorem Ipsum generators
                  </i>
                  <h4 class="text-clr_base mb-2 font-semibold text-2xl leading-[130%]">
                    Shawn Beltran
                  </h4>
                  <span class="text-lg text-clr_pra"> Business Owner </span>
                </div>
                <div class=" swiper-slide relative">
                  <div class="flex lg:mb-10 mb-8 items-center gap-2">
                    <i class="bi-star text-clr_ratting text-xl"></i>
                    <i class="bi-star text-clr_ratting text-xl"></i>
                    <i class="bi-star text-clr_ratting text-xl"></i>
                    <i class="bi-star text-clr_ratting text-xl"></i>
                    <i class="bi-star text-clr_ratting text-xl"></i>
                  </div>
                  <i class="sm:text-xl text-base text-clr_white sm:mb-10 mb-5 block">
                    There are many variations of passages of Lorem Ipsum
                    available, by injected humour, or randomised words which
                    dont look even slightly believable. If you are going to
                    use a passage of Lorem Ipsum, you need to be hidden in
                    middle of text. All the Lorem Ipsum generators
                  </i>
                  <h4 class="text-clr_base mb-2 font-semibold text-2xl leading-[130%]">
                    Shawn Beltran
                  </h4>
                  <span class="text-lg text-clr_pra"> Business Owner </span>
                </div>
              </div>

              <div class="swiper-pagination3"></div>
            </div>
          </div>
        </div>
        <div class="absolute top-[99px] xl:left-[291px] lg:left-60 lg:block hidden">
          <img src="assets/img/testimonial/quote.png" alt="img" />
        </div>
        <div class="absolute top-5 left-5 opacity-10 lg:opacity-100 w-[60px] sm:w-auto">
          <img src="assets/img/testimonial/man1.png" alt="img" class="w-full sm:w-auto" />
        </div>
        <div class="absolute left-5 bottom-5 opacity-10 lg:opacity-100 w-[60px] sm:w-auto">
          <img src="assets/img/testimonial/man3.png" alt="img" class="w-full sm:w-auto" />
        </div>
        <div class="absolute top-5 right-5 opacity-10 lg:opacity-100 w-[60px] sm:w-auto">
          <img src="assets/img/testimonial/man2.png" alt="img" class="w-full sm:w-auto" />
        </div>
        <div class="absolute lg:bottom-[50px] lg:right-[50px] bottom-[15px] right-[15px] sm:block hidden animate-cir5">
          <img src="assets/img/testimonial/testi-arrow.png" alt="img" />
        </div>
      </div>
    </div>
  </section> */}

  <section class="bg-common_bg bg-no-repeat bg-cover bg-center overflow-hidden pt_120 pb_120" id="blog">
    <div class="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
      <div class="grid xl:grid-cols-[33%_auto] lg:grid-cols-[28%_auto] grid-cols-1 gap-12">

        <div>

          <div class="pb-[50px]">
            <span
              class="text-2xl font-caveat text-clr_base relative flex items-center sm:gap-6 gap-[14px] mx-auto mb-[30px]"
              data-aos="fade-down" data-aos-duration="1000">
              <span class="sm:w-20 w-[50px] h-[1px] bg-clr_base"></span>
              My Blogs
            </span>
            <h2 class="font-medium lg:text-6xl md:text-5xl sm:text-4xl text-[29px] text-white max-w-[620px]"
              data-aos="fade-down" data-aos-duration="1600">
              Recent Posts
            </h2>
          </div>

          <div>
            <a href="https://github.com/Msdesire1"
              class="md:w-52 md:h-52 w-32 h-32 bg-clr_base rounded-full flex justify-center items-center text-center relative before:w-full before:h-full before:rounded-full before:border before:border-clr_base before:content-[''] before:absolute before:top-[10px] before:-left-[7px] before:duration-500 hover:before:-top-[10px]"
              data-aos="zoom-out-down" data-aos-duration="2000">
              <span class="relative z-10">
                <i
                  class="bi-arrow-right mb-[1px] md:text-[28px] text-base text-center flex justify-center text-clr_title transition-all">
                </i>
                <span class="text-[#282828] md:text-lg text-sm font-medium leading-[30px] capitalize transition-all">
                  Click More Work
                </span>
              </span>
            </a>
          </div>
        </div>

        <div>

          <div>
            <div
              class="flex sm:flex-row flex-col justify-between items-center gap-4 lg:pb-10 pb-[30px] lg:pt-10 pt-[30px] group duration-500 border-b border-b-[rgb(38_37_37)] hover:border-b-clr_base hover:first:border-t-clr_base first:border-t first:border-t-[rgb(38_37_37)]"
              data-aos="fade-up" data-aos-duration="1000">
              <div
                class="shrink basis-4/5 flex md:flex-row flex-col justify-between md:items-center sm:items-start items-center gap-4">
                <div class="shrink basis-1/2">
                  <div class="cont">
                    <span
                      class="dates text-clr_pra text-base border border-clr_cusborder rounded-[100px] py-[7px] px-[15px] sm:mb-6 mb-[18px] inline-block">
                      October 19, 2023
                    </span>
                    <h3
                      class="xl:text-3xl sm:text-[22px] text-xl text-white sm:leading-[44px] leading-8 font-semibold capitalize">
                      <a href="tultpay.com" class="text-white duration-500 group-hover:text-clr_base">
                        Tulupay That Helps The Company Grow
                      </a>
                    </h3>
                  </div>
                </div>
                 <a href="tultpay.com"
                  class="imgc duration-500 md:opacity-0 opacity-100 group-hover:opacity-100">
                  <img src="assets/img/blog/bblog1.png" alt="img-opa " class="max-w-[290px] h-[157px] cursor-pointer" />
                </a>
              </div>
               <a href="tultpay.com"
                class="w-[60px] h-[60px] flex justify-center items-center bg-none rounded-full border border-white duration-500 group-hover:border-clr_base">
                <i class="bi bi-eye text-white duration-500 group-hover:text-clr_base"></i>
              </a>
            </div>
          </div>

          <div>
            <div
              class="flex sm:flex-row flex-col justify-between items-center gap-4 lg:pb-10 pb-[30px] lg:pt-10 pt-[30px] group duration-500 border-b border-b-[rgb(38_37_37)] hover:border-b-clr_base"
              data-aos="fade-up" data-aos-duration="1000">
              <div
                class="shrink basis-4/5 flex md:flex-row flex-col justify-between md:items-center sm:items-start items-center gap-4">
                <div class="shrink basis-1/2">
                  <div class="cont">
                    <span
                      class="dates text-clr_pra text-base border border-clr_cusborder rounded-[100px] py-[7px] px-[15px] sm:mb-6 mb-[18px] inline-block">
                      October 19, 2023
                    </span>
                    <h3
                      class="xl:text-3xl sm:text-[22px] text-xl text-white sm:leading-[44px] leading-8 font-semibold capitalize">
                      <a href="https://purse.tulupay.com" class="text-white duration-500 group-hover:text-clr_base">
                         Tulu Purse Fresh Design Ideas & Inspiration For 2023
                      </a>
                    </h3>
                  </div>
                </div>
                 <a href="https://purse.tulupay.com"
                  class="imgc duration-500 md:opacity-0 opacity-100 group-hover:opacity-100">
                  <img src="assets/img/blog/bblog2.png" alt="img-opa " class="max-w-[290px] h-[157px] cursor-pointer" />
                </a>
              </div>
             <a href="https://purse.tulupay.com"
                class="w-[60px] h-[60px] flex justify-center items-center bg-none rounded-full border border-white duration-500 group-hover:border-clr_base">
                <i class="bi bi-eye text-white duration-500 group-hover:text-clr_base"></i>
              </a>
            </div>
          </div>



          <div>
            <div
              class="flex sm:flex-row flex-col justify-between items-center gap-4 lg:pb-10 pb-[30px] lg:pt-10 pt-[30px] group duration-500 border-b border-b-[rgb(38_37_37)] hover:border-b-clr_base"
              data-aos="fade-up" data-aos-duration="1000">
              <div
                class="shrink basis-4/5 flex md:flex-row flex-col justify-between md:items-center sm:items-start items-center gap-4">
                <div class="shrink basis-1/2">
                  <div class="cont">
                    <span
                      class="dates text-clr_pra text-base border border-clr_cusborder rounded-[100px] py-[7px] px-[15px] sm:mb-6 mb-[18px] inline-block">
                      October 19, 2023
                    </span>
                    <h3
                      class="xl:text-3xl sm:text-[22px] text-xl text-white sm:leading-[44px] leading-8 font-semibold capitalize">
                       <a href="https://wallet.tulupay.com" class="text-white duration-500 group-hover:text-clr_base">
                        Tulu Wallet Fresh Design Ideas & Inspiration For 2023
                      </a>
                    </h3>
                  </div>
                </div>
                <a href="https://wallet.tulupay.com"
                  class="imgc duration-500 md:opacity-0 opacity-100 group-hover:opacity-100">
                  <img src="assets/img/blog/bblog3.png" alt="img-opa " class="max-w-[290px] h-[157px] cursor-pointer" />
                </a>
              </div>
              <a href="https://wallet.tulupay.com"
                class="w-[60px] h-[60px] flex justify-center items-center bg-none rounded-full border border-white duration-500 group-hover:border-clr_base">
                <i class="bi bi-eye text-white duration-500 group-hover:text-clr_base"></i>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  </section>

<Footer/>


</div>


  )
}

export default page
