import Footer from '@/comp/Footer'
import Menu from '@/comp/Menu'
import React from 'react'
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
            Lets Start Something
          </h1>
          <ul className="flex items-center justify-center sm:flex-nowrap flex-wrap gap-3">
            <li className="text-2xl font-caveat">
              <a href="land" className="text-white">
                Home
              </a>
            </li>
            <li className="text-white text-2xl">/</li>
            <li className="text-clr_base font-caveat text-2xl">
              Lets Start Something
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* Page heading end */}
  {/* -------- Contact start */}
  <section className="contact__section pb_120">
    <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
      <div className="grid lg:grid-cols-[66.66%_auto] grid-cols-1 gap-6">
        <div data-aos="fade-up" data-aos-duration={1000}>
          <div>
            <div className="  bg-common_bg p-[60px] rounded-lg">
              <h3 className="mb-5 text-white capitalize sm:text-[32px] text-[26px] font-semibold">
                Leave a Reply
              </h3>
              <p className="text-clr_pra mb-[30px]">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <form action="#" className="flex flex-col gap-6">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full py-[18px] px-5 rounded-[10px] bg-[rgb(29_29_29)] border border-clr_cusborder text-white outline-none"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="Eamil"
                    className="w-full py-[18px] px-5 rounded-[10px] bg-[rgb(29_29_29)] border border-clr_cusborder text-white outline-none"
                  />
                </div>
                <div>
                  <textarea
                    name="comment"
                    rows={5}
                    placeholder="Write Comments"
                    className="w-full py-[18px] px-5 rounded-[10px] bg-[rgb(29_29_29)] border border-clr_cusborder text-white outline-none"
                    defaultValue={""}
                  />
                </div>
                <a
                  href="#"
                  className="w-[250px] flex justify-center items-center gap-2 font-medium px-[30px] pt-5 pb-[21px] text-lg leading-[120%] capitalize relative bg-clr_base overflow-hidden rounded-[5px] duration-500 text-clr_subtitle before:absolute before:content-[''] before:bottom-full before:bg-[#aad302] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0"
                >
                  <span className="z-10 relative duration-500">
                    Submit Comment
                  </span>
                  <i className="bi-arrow-right z-10 relative duration-500 text-xl"></i>
                </a>
              </form>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration={1500}>
          <div className="contact__rightside  bg-common_bg py-[30px] px-4 sm:px-5 xl:px-[30px] xl:py-[60px]">
            <h4 className="lg:mb-[30px] mb-5xl xl:text-2xl text-xl font-semibold text-white capitalize">
              Feel free to contact me anytime
            </h4>
            <div className="contact__item lg:mb-5 mb-4 rounded-[10px] bg-[rgb(29_29_29)] xl:p-[30px] p-4">
              <span className="he1 mb-[14px] block text-clr_pra capitalize">
                Email
              </span>
              <a
                href="#"
                className="text-white xl:text-xl text-base block"
              >
                adeyemok831@gmail.com
              </a>
            </div>
            <div className="contact__item lg:mb-5 mb-4 rounded-[10px] bg-[rgb(29_29_29)] xl:p-[30px] p-4">
              <span className="he1 mb-[14px] block text-clr_pra capitalize">
                Phone
              </span>
              <a
                href="#"
                className="text-white xl:text-xl text-base block capitalize"
              >
                09032434519
              </a>
            </div>
            <div className="contact__item lg:mb-5 mb-4 rounded-[10px] bg-[rgb(29_29_29)] xl:p-[30px] p-4">
              <span className="he1 mb-[14px] block text-clr_pra capitalize">
                Address
              </span>
              <span className="text-white xl:text-xl text-base block capitalize">
                Kwara ilorin
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* -------- Contact start */}
  {/* --------- Footer */}
 <Footer/>
</>

    </div>
  )
}

export default page