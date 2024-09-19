import React from "react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3 ">
          <div class="pt_120 pb-[120px]">
            <div
              class="fl text-[10.5vw] uppercase font-medium leading-none w-full xl:mb-[60px] sm:mb-10 mb-5 border border-clr_cusborder rounded-lg text-center p-[10px] text-white"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Get In Touch
            </div>
            <div class="flex md:flex-row flex-col justify-between gap-4">
              <div class="basis-1/2 shrink">
                <div>
                  <p class="xl:mb-[60px] lg:mb-10 mb-[10px] lg:text-2xl sm:text-lg text-[17px] text-white max-w-lg">
                    Hello, I m Adeyemo Adesire, Website & Software Documentation
                    based in Kwara.
                  </p>
                  <a
                    href="#"
                    class="text-white lg:text-4xl sm:text-[28px] text-lg underline"
                  >
                    adeyemok831@gmail.com
                  </a>
                </div>
              </div>
              <div class="basis-1/2 shrink">
                <div>
                  <div class="grid sm:grid-cols-2 gap-4">
                    <div>
                      <a
                        href="https://www.facebook.com/olamide.adeyemo.94"
                        class="lg:py-[26px] py-[14px] lg:px-7 px-6 rounded-[10px] border border-clr_cusborder flex items-center justify-between text-white lg:text-2xl text-xl duration-500 hover:bg-clr_base hover:border-clr_base hover:text-clr_title group"
                      >
                        Facebook
                        <i class="bi-arrow-right text-white text-[22px] duration-500 group-hover:text-clr_title"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        href="Adeyemo390"
                        class="lg:py-[26px] py-[14px] lg:px-7 px-6 rounded-[10px] border border-clr_cusborder flex items-center justify-between text-white lg:text-2xl text-xl duration-500 hover:bg-clr_base hover:border-clr_base hover:text-clr_title group"
                      >
                        Twitter
                        <i class="bi-arrow-right text-white text-[22px] duration-500 group-hover:text-clr_title">
                          <FaXTwitter />
                        </i>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.linkedin.com/in/adeyemo-oluwakemi-0a4154248/"
                        class="lg:py-[26px] py-[14px] lg:px-7 px-6 rounded-[10px] border border-clr_cusborder flex items-center justify-between text-white lg:text-2xl text-xl duration-500 hover:bg-clr_base hover:border-clr_base hover:text-clr_title group"
                      >
                        Linkdin
                        <i class="bi-arrow-right text-white text-[22px] duration-500 group-hover:text-clr_title"></i>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://github.com/Msdesire1"
                        class="lg:py-[26px] py-[14px] lg:px-7 px-6 rounded-[10px] border border-clr_cusborder flex items-center justify-between text-white lg:text-2xl text-xl duration-500 hover:bg-clr_base hover:border-clr_base hover:text-clr_title group"
                      >
                        GitHub
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
                <a href="#" class="text-clr_base">
                  {" "}
                  Desire{" "}
                </a>
                All rights reserved.
              </p>
              <ul class="terms flex gap-[38px]">
                <li>
                  <a
                    href="#"
                    class="text-lg text-white duration-500 hover:text-clr_base"
                  >
                    Terms & Condition
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="text-lg text-white duration-500 hover:text-clr_base"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
              <a
                href=""
                class=" w-10 h-[50px] bg-clr_base rounded-[5px] flex justify-center items-center"
              >
                <i class="bi-arrow-up text-lg"> </i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
