import React from 'react'
const page = () => {
  return (
    <div>
<>
  {/* header start */}
  <header className="header relative w-full border-b border-b-clr_cusborder z-10 xxl:after:block after:hidden after:absolute after:right-[calc(20%-30px)] after:top-0 after:w-[1px] after:h-full after:content:[''] after:bg-clr_cusborder xxl:before:block before:hidden before:absolute before:left-[calc(15%-40px)] before:top-0 before:w-[1px] before:h-full before:content:[''] before:bg-clr_cusborder">
    <div className="xxl:max-w-[1805px] xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3 mx-auto px-3">
      <div className="flex justify-between items-center w-full relative py-5">
        <div className="main__logo">
          <a href="index.html" className="block xl:w-[150px] w-[100px]">
            <img
              src="assets/img/logo/logo.png"
              alt="logo"
              className="w-full h-full object-contain"
            />
          </a>
        </div>
        <ul className="menus flex lg:flex-row flex-col lg:items-center opacity-0 invisible lg:opacity-100 lg:visible lg:gap-[14px] gap-0 fixed z-50 lg:static top-20 left-0 w-full lg:w-auto bg-clr_subtitle min-h-screen lg:min-h-full lg:bg-transparent duration-500 origin-top px-3">
          <li className="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
            <a
              href="index.html"
              className="text-clr_white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base"
            >
              Home
            </a>
          </li>
          <li className="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
            <a
              href="index.html#about"
              className="text-clr_white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base"
            >
              About
            </a>
          </li>
          <li className="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
            <a
              href="index.html#projects"
              className="text-clr_white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base"
            >
              Work
            </a>
          </li>
          <li className="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4 group/dropdown dropdown">
            <a
              href="index.html#services"
              className="text-clr_white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base"
            >
              Services
            </a>
            <ul className="lg:absolute lg:block hidden static top-[50px] left-0 w-[250px] px-5 py-2 leading-9 z-50 transition-all lg:bg-white lg:shadow-mainShadow justify-center gap-[5px] before:absolute before:content-[''] before:-top-[17.6px] before:left-[26px] before:w-0 before:h-0 before:border-l-[13px] before:border-l-transparent before:border-r-[13px] before:border-r-transparent lg:before:border-b-[18px] lg:before:border-b-white lg:opacity-0 lg:invisible lg:translate-y-11 duration-500 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 dropdownItem">
              <li>
                <a
                  href="services.html"
                  className="lg:text-clr_body text-white duration-500 hover:text-clr_base hover:pl-3 block"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="serviceDetails.html"
                  className="lg:text-clr_body text-white duration-500 hover:text-clr_base hover:pl-3 block"
                >
                  Service Details
                </a>
              </li>
            </ul>
          </li>
          <li className="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
            <a
              href="index.html#testimonial"
              className="text-clr_white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base"
            >
              TESTIMONIAL
            </a>
          </li>
          <li className="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4 group/dropdown dropdown">
            <a
              href="index.html#blog"
              className="text-clr_white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base"
            >
              Blog
            </a>
            <ul className="lg:absolute lg:block hidden static top-[50px] left-0 w-[250px] px-5 py-2 leading-9 z-50 transition-all lg:bg-white lg:shadow-mainShadow justify-center gap-[5px] before:absolute before:content-[''] before:-top-[17.6px] before:left-[26px] before:w-0 before:h-0 before:border-l-[13px] before:border-l-transparent before:border-r-[13px] before:border-r-transparent lg:before:border-b-[18px] lg:before:border-b-white lg:opacity-0 lg:invisible lg:translate-y-11 duration-500 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 dropdownItem">
              <li>
                <a
                  href="blogs.html"
                  className="lg:text-clr_body text-white duration-500 hover:text-clr_base hover:pl-3 block"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="blogDetails.html"
                  className="lg:text-clr_body text-white duration-500 hover:text-clr_base hover:pl-3 block"
                >
                  Blog Details
                </a>
              </li>
            </ul>
          </li>
          <li className="relative transition-all border-b-2 border-b-clr_cusborder lg:border-none last:border-none lg:py-0 py-4">
            <a
              href="contact.html"
              className="text-clr_white font-500 xxl:text-base text-sm uppercase lg:py-[10px] py-0 xxl:px-[16px] xl:px-[10px] px-1 hover:text-clr_base"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex items-center gap-2 xxl:px-[26px] xxl:py-[19px] lg:px-[16px] lg:py-[9px] px-[11px] py-[7px] font-medium text-lg capitalize relative bg-clr_base overflow-hidden rounded-[5px] transition-all text-clr_subtitle max-h-[58px] before:absolute before:content-[''] before:bottom-full before:bg-[#aad302] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0"
          >
            <span className="text-sm xl:text-lg z-10 relative duration-500">
              Lets Talk
            </span>
            <span>
              <i className="bi bi-arrow-right text-xl z-10 relative duration-500" />
            </span>
          </a>
          <div className="header-bar lg:hidden">
            <i className="bi bi-x text-[32px] text-clr_white cursor-pointer hidden menuCloseIcon" />
            <i className="bi bi-list text-[32px] text-clr_white cursor-pointer menuActiveIcon" />
          </div>
          <div className="drawerActiveIcon xl:w-[58px] xl:h-[58px] w-[39px] h-[39px] rounded-md flex items-center justify-center bg-clr_white cursor-pointer">
            <i className="bi bi-list lg:text-[32px] text-[22px] text-clr_title" />
          </div>
        </div>
      </div>
      {/* --------- Drawer */}
      <div className="subside__barmenu w-80 h-full fixed z-50 top-0 duration-500 overflow-y-scroll bg-black -right-80 drawer">
        <div className="remove__click flex justify-center items-center w-10 h-10 m-[10px] bg-clr_base ml-auto p-[5px] rounded-md hover:cursor-pointer drawerCloseIcon">
          <i className="bi-x-lg text-[22px] text-clr_mtitle"> </i>
        </div>
        <div className="grid py-10 px-5">
          <a href="#" className="mb-5">
            <img src="assets/img/logo/logo.png" alt="img" />
          </a>
          <p className="text-sm mb-10 text-clr_pra break-words leading-normal">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            consectetur, aliquam quaerats voluptatem. Ut enim ad minima veniam,
            exercitationem laboriosam, nisi ut aliquid ex ea autem velit esse
            quam nihil
          </p>
          <div className="sub__contact-left grid gap-6 mb-10">
            <div>
              <div>
                <span className="block mb-2 uppercase text-clr_pra font-bold text-sm">
                  address
                </span>
                <span className="capitalize text-white font-medium leading-[120%]">
                  Victoria Street London,
                </span>
              </div>
            </div>
            <div>
              <div>
                <span className="block mb-2 uppercase text-clr_pra font-bold text-sm">
                  email
                </span>
                <a
                  href="#"
                  className="capitalize text-white font-medium leading-[120%]"
                >
                  matias999@.com
                </a>
              </div>
            </div>
            <div>
              <div>
                <span className="block mb-2 uppercase text-clr_pra font-bold text-sm">
                  call now
                </span>
                <a
                  href="#"
                  className="capitalize text-white font-medium leading-[120%]"
                >
                  +98 4758 2154 021
                </a>
              </div>
            </div>
          </div>
          <div className="lg:mb-20 mb-14 relative">
            <ul className="social flex gap-[14px]">
              <li>
                <a
                  href="#"
                  className="w-[45px] h-[45px] rounded-full bg-clr_base border border-clr_base flex justify-center items-center"
                >
                  <i className="bi-facebook text-clr_title" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/Adeyemo390"
                  className="w-[45px] h-[45px] rounded-full bg-clr_base border border-clr_base flex justify-center items-center"
                >
                  <i className="bi-twitter text-clr_title" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="w-[45px] h-[45px] rounded-full bg-clr_base border border-clr_base flex justify-center items-center"
                >
                  <i className="bi-linkedin text-clr_title" />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="w-[45px] h-[45px] rounded-full bg-clr_base border border-clr_base flex justify-center items-center"
                >
                  <i className="bi-youtube text-clr_title" />
                </a>
              </li>
            </ul>
          </div>
          <a
            href="#"
            className="flex justify-center items-center gap-2 font-medium px-[30px] pt-5 pb-[21px] text-lg leading-[120%] capitalize relative bg-clr_base overflow-hidden rounded-[5px] duration-500 text-clr_subtitle before:absolute before:content-[''] before:bottom-full before:bg-[#aad302] before:left-0 before:w-full before:h-full before:duration-500 before:bg-opacity-80 hover:before:bottom-0"
          >
            <span className="z-10 relative duration-500">
              <i className="bi-chevron-right"> </i>
            </span>
            <span className="z-10 relative duration-500"> Lets Talk </span>
          </a>
        </div>
      </div>
      {/* --------- Drawer */}
    </div>
  </header>
  {/* header End */}
  {/* Page heading start */}
  <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3 pt_120 pb_120">
    <div className="flex justify-center">
      <div>
        <div className="text-center">
          <h1 className="lg:text-6xl sm:text-4xl text-3xl text-white lg:mb-10 sm:mb-9 mb-6 font-bold">
            Brand design that helps the company grow
          </h1>
          <ul className="flex items-center justify-center sm:flex-nowrap flex-wrap gap-3">
            <li className="text-2xl font-caveat">
              <a href="https://wphtml.com/" className="text-white">
                Home
              </a>
            </li>
            <li className="text-white text-2xl">/</li>
            <li className="text-clr_base font-caveat text-2xl">
              Brand design that helps the company grow
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* Page heading end */}
  <section className="pb_120">
    <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
      <div className="grid lg:grid-cols-[66.66%_auto] gap-6">
        <div>
          <div className="" data-aos="fade-up" data-aos-duration={1000}>
            <a className="overflow-hidden block w-full">
              <img
                src="assets/img/blog/bblog1.png"
                alt="img"
                className="w-full overflow-hidden duration-500"
              />
            </a>
            <div className=" py-[30px]">
              <div
                className="lg:mb-[30px] mb-5"
                data-aos="fade-up"
                data-aos-duration={1400}
              >
                <span className=" text-lg font-medium text-white border-b border-b-clr_cusborder xl:pb-[30px] pb-5 xl:mb-7 mb-[19px] block">
                  By: admin / Lifestyle / Posted on September 19, 2023 /
                  Comments: 0
                </span>
                <p className="text-clr_pra text-base">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which dont look
                  even slightly believable. If you are going to use a Lorem
                  Ipsum, you need to be sure there isnt anything embarrassing
                  hidden in the middle of text. All the Lorem Ipsum the Internet
                  tend to repeat predefined chunks as necessary,
                </p>
                <p className="text-clr_pra text-base">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni neque porro
                  quisquam est, qui dolorem ipsum quia dolor sit amet, adipisci
                  velit, sed quia non numquam eius modi tempora incidunts ut
                  labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                  minima veniam, quis nostrum exercitationem the corporis
                  suscipit laboriosam, nisi ut aliquid
                </p>
              </div>
              <div className=" lg:mb-[30px] mb-5 bg-clr_base rounded-lg lg:p-[30px] p-5">
                <img
                  src="assets/img/blog/straight-quotes.png"
                  alt="img"
                  className="mb-[30px]"
                />
                <p className="text-xl text-clr_title mb-9">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                  odit aut fugit, sed quia consequuntur magni dolores eos qui
                  ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  adipisci velit, sed quia non numquam
                </p>
                <a
                  href="#"
                  className="font-medium text-xl underline text-clr_title"
                >
                  David Kingston
                </a>
              </div>
              <p className="text-clr_pra text-base xl:mb-[60px] mb-10">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam,
              </p>
              <h3 className="text-white capitalize sm:text-[32px] text-[26px] leading-[120%] font-semibold lg:mb-[30px] mb-5">
                Matias is the only theme you will ever need
              </h3>
              <div className="lg:mb-[30px] mb-5">
                <img src="assets/img/blog/blog-detailsb2.png" alt="img" />
              </div>
              <p className="text-clr_pra text-base lg:mb-[30px] mb-5">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that are bound to ensue; and equal
                blame belongs to those who fail in their duty through weakness
                of will, which is the same as from these cases are perfectly
                simple and easy to distinguish. In a free hour,
              </p>
              <div
                className="lg:mb-[30px] mb-5"
                data-aos="fade-up"
                data-aos-duration={1600}
              >
                <ul className="">
                  <li className="flex items-center gap-[10px] relative text-base text-clr_pra sm:pl-4 pl-0 xl:mb-5 mb-[10px]">
                    <span className="min-w-[6px] h-[6px] rounded-full bg-clr_base" />
                    <span>
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </span>
                  </li>
                  <li className="flex items-center gap-[10px] relative text-base text-clr_pra sm:pl-4 pl-0 xl:mb-5 mb-[10px]">
                    <span className="min-w-[6px] h-[6px] rounded-full bg-clr_base" />
                    <span>
                      Nor again is there anyone who loves or pursues or desires
                      to obtain pain of itself, because it is pain, but because
                      occasionally
                    </span>
                  </li>
                  <li className="flex items-center gap-[10px] relative text-base text-clr_pra sm:pl-4 pl-0">
                    <span className="min-w-[6px] h-[6px] rounded-full bg-clr_base" />
                    <span>
                      On the other hand, we denounce with righteous indignation
                      and dislike
                    </span>
                  </li>
                </ul>
              </div>
              <p className="text-clr_pra text-base lg:mb-[30px] mb-5">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              </p>
            </div>
            <div className=" bg-common_bg xl:mb-[60px] mb-10 rounded-lg xl:p-[30px] sm:p-5 py-5 px-[14px] flex items-center xl:justify-between justify-center xl:flex-nowrap flex-wrap gap-5">
              <div className=" flex items-center sm:gap-5 gap-[10px]">
                <span className=" white text-xl font-medium text-white">
                  Posted in :
                </span>
                <a
                  href="#"
                  className="rounded-[10px] bg-[rgb(29_29_29_)] sm:py-[12px] py-2 sm:px-5 px-[10px] sm:text-base text-[12px] uppercase text-clr_pra"
                >
                  Business
                </a>
                <a
                  href="#"
                  className="rounded-[10px] bg-[rgb(29_29_29_)] sm:py-[12px] py-2 sm:px-5 px-[10px] sm:text-base text-[12px] uppercase text-clr_pra"
                >
                  Digital
                </a>
              </div>
              <div className=" flex items-center gap-5">
                <span className=" white text-xl font-medium text-white">
                  Share :
                </span>
                <ul className=" flex items-center rounded-[10px] bg-[rgb(29_29_29_)] py-[10px] px-5 gap-5">
                  <li>
                    <a>
                      <i className="bi-facebook text-white duration-500 hover:text-clr_base"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="bi-twitter text-white duration-500 hover:text-clr_base"></i>
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="bi-linkedin text-white duration-500 hover:text-clr_base"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className=" bg-common_bg p-[30px] rounded-lg">
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
        </div>
        {/* ---------- Right side / sidebar */}
        <div>
          <div className="blog__bright__bar border border-clr_cusborder xl:p-[30px] py-5 px-[18px] rounded-lg sticky top-[120px]">
            <div className="scope__item xl:mb-[60px] mb-10">
              <h4 className="scope__title text-white border-b border-b-clr_cusborder pb-[14px] mb-[30px] text-2xl font-semibold">
                Serach
              </h4>
              <form action="#0" className="flex content-center justify-between">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-transparent py-[10px] pr-[10px] pl-5 h-[60px] border border-clr_cusborder rounded-lg outline-none"
                />
                <button
                  type="submit"
                  className="min-w-[60px] h-[60px] flex items-center justify-center bg-clr_base rounded-tr-lg rounded-br-lg"
                >
                  <i className="text-clr_title text-lg">
                    <search></search>
                  </i>
                </button>
              </form>
            </div>
            {/* categories */}
            <div className="scope__item xl:mb-[60px] mb-10 position-relative">
              <h4 className="scope__title text-white border-b border-b-clr_cusborder pb-[14px] mb-[30px] text-2xl font-semibold">
                Categories
              </h4>
              <ul className="category">
                <li className="duration-500 group mb-6 last:mb-0">
                  <a
                    href="#"
                    className="flex items-center justify-between duration-500"
                  >
                    <span className="text-clr_pra text-lg">Business</span>
                    <span className="arrow duration-500 w-6 h-6 bg-clr_base group-hover:bg-white flex justify-center items-center rounded-[5px]">
                      <i className="bi-chevron-right text-[11px] group-hover:text-clr_title"></i>
                    </span>
                  </a>
                </li>
                <li className="duration-500 group mb-6 last:mb-0">
                  <a
                    href="#"
                    className="flex items-center justify-between duration-500"
                  >
                    <span className="text-clr_pra text-lg">Digital</span>
                    <span className="arrow duration-500 w-6 h-6 bg-clr_base group-hover:bg-white flex justify-center items-center rounded-[5px]">
                      <i className="bi-chevron-right text-[11px] group-hover:text-clr_title"></i>
                    </span>
                  </a>
                </li>
                <li className="duration-500 group mb-6 last:mb-0">
                  <a
                    href="#"
                    className="flex items-center justify-between duration-500"
                  >
                    <span className="text-clr_pra text-lg">Audio Post</span>
                    <span className="arrow duration-500 w-6 h-6 bg-clr_base group-hover:bg-white flex justify-center items-center rounded-[5px]">
                      <i className="bi-chevron-right text-[11px] group-hover:text-clr_title"></i>
                    </span>
                  </a>
                </li>
                <li className="duration-500 group mb-6 last:mb-0">
                  <a
                    href="#"
                    className="flex items-center justify-between duration-500"
                  >
                    <span className="text-clr_pra text-lg">Gallery Post</span>
                    <span className="arrow duration-500 w-6 h-6 bg-clr_base group-hover:bg-white flex justify-center items-center rounded-[5px]">
                      <i className="bi-chevron-right text-[11px] group-hover:text-clr_title"></i>
                    </span>
                  </a>
                </li>
                <li className="duration-500 group mb-6 last:mb-0">
                  <a
                    href="#"
                    className="flex items-center justify-between duration-500"
                  >
                    <span className="text-clr_pra text-lg">Marketing</span>
                    <span className="arrow duration-500 w-6 h-6 bg-clr_base group-hover:bg-white flex justify-center items-center rounded-[5px]">
                      <i className="bi-chevron-right text-[11px] group-hover:text-clr_title"></i>
                    </span>
                  </a>
                </li>
                <li className="duration-500 group mb-6 last:mb-0">
                  <a
                    href="#"
                    className="flex items-center justify-between duration-500"
                  >
                    <span className="text-clr_pra text-lg">Agency</span>
                    <span className="arrow duration-500 w-6 h-6 bg-clr_base group-hover:bg-white flex justify-center items-center rounded-[5px]">
                      <i className="bi-chevron-right text-[11px] group-hover:text-clr_title"></i>
                    </span>
                  </a>
                </li>
                <li className="duration-500 group mb-6 last:mb-0">
                  <a
                    href="#"
                    className="flex items-center justify-between duration-500"
                  >
                    <span className="text-clr_pra text-lg">Graphic</span>
                    <span className="arrow duration-500 w-6 h-6 bg-clr_base group-hover:bg-white flex justify-center items-center rounded-[5px]">
                      <i className="bi-chevron-right text-[11px] group-hover:text-clr_title"></i>
                    </span>
                  </a>
                </li>
                <li className="duration-500 group mb-6 last:mb-0">
                  <a
                    href="#"
                    className="flex items-center justify-between duration-500"
                  >
                    <span className="text-clr_pra text-lg">
                      Web Development
                    </span>
                    <span className="arrow duration-500 w-6 h-6 bg-clr_base group-hover:bg-white flex justify-center items-center rounded-[5px]">
                      <i className="bi-chevron-right text-[11px] group-hover:text-clr_title"></i>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            {/* categories */}
            {/* recent post */}
            <div className="scope__item xl:mb-[60px] mb-10">
              <h4 className="scope__title text-white border-b border-b-clr_cusborder pb-[14px] mb-[30px] text-2xl font-semibold">
                Recent Post
              </h4>
              <ul className="recent__post">
                <li className="mb-[30px] last:mb-0">
                  <a
                    href="#"
                    className="recent__innter flex items-center flex-wrap xl:flex-nowrap xl:gap-5 gap-[10px]"
                  >
                    <img src="assets/img/blog/bsmall1.png" alt="img" />
                    <div className="cont__box">
                      <span className="retitle text-white text-xl font-medium mb-[14px] block capitalize">
                        The Main Thing For The Designer
                      </span>
                      <span className="text-clr_base text-base flex items-center gap-2">
                        <i>
                          <clock></clock>
                        </i>
                        October 19, 2023
                      </span>
                    </div>
                  </a>
                </li>
                <li className="mb-[30px] last:mb-0">
                  <a
                    href="#"
                    className="recent__innter flex items-center flex-wrap xl:flex-nowrap xl:gap-5 gap-[10px]"
                  >
                    <img src="assets/img/blog/bsmall2.png" alt="img" />
                    <div className="cont__box">
                      <span className="retitle text-white text-xl font-medium mb-[14px] block capitalize">
                        he services provide for design
                      </span>
                      <span className="text-clr_base text-base flex items-center gap-2">
                        <i>
                          <clock></clock>
                        </i>
                        October 19, 2023
                      </span>
                    </div>
                  </a>
                </li>
                <li className="mb-[30px] last:mb-0">
                  <a
                    href="#"
                    className="recent__innter flex items-center flex-wrap xl:flex-nowrap xl:gap-5 gap-[10px]"
                  >
                    <img src="assets/img/blog/bsmall3.png" alt="img" />
                    <div className="cont__box">
                      <span className="retitle text-white text-xl font-medium mb-[14px] block capitalize">
                        The Main Thing For The Designer
                      </span>
                      <span className="text-clr_base text-base flex items-center gap-2">
                        <i>
                          <clock></clock>
                        </i>
                        October 19, 2023
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            {/* recent post */}
            {/* Tags */}
            <div className="scope__item">
              <h4 className="scope__title text-white border-b border-b-clr_cusborder pb-[14px] mb-[30px] text-2xl font-semibold">
                Tag
              </h4>
              <ul className="tags flex flex-wrap gap-3">
                <li>
                  <a
                    href="#"
                    className="border border-clr_cusborder py-3 px-5 text-sm uppercase text-clr_pra inline-block duration-500 rounded-[10px] hover:bg-clr_base hover:text-clr_title"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="border border-clr_cusborder py-3 px-5 text-sm uppercase text-clr_pra inline-block duration-500 rounded-[10px] hover:bg-clr_base hover:text-clr_title"
                  >
                    digital
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="border border-clr_cusborder py-3 px-5 text-sm uppercase text-clr_pra inline-block duration-500 rounded-[10px] hover:bg-clr_base hover:text-clr_title"
                  >
                    audio post
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="border border-clr_cusborder py-3 px-5 text-sm uppercase text-clr_pra inline-block duration-500 rounded-[10px] hover:bg-clr_base hover:text-clr_title"
                  >
                    Gallety post
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="border border-clr_cusborder py-3 px-5 text-sm uppercase text-clr_pra inline-block duration-500 rounded-[10px] hover:bg-clr_base hover:text-clr_title"
                  >
                    marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="border border-clr_cusborder py-3 px-5 text-sm uppercase text-clr_pra inline-block duration-500 rounded-[10px] hover:bg-clr_base hover:text-clr_title"
                  >
                    agency
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="border border-clr_cusborder py-3 px-5 text-sm uppercase text-clr_pra inline-block duration-500 rounded-[10px] hover:bg-clr_base hover:text-clr_title"
                  >
                    graphic
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="border border-clr_cusborder py-3 px-5 text-sm uppercase text-clr_pra inline-block duration-500 rounded-[10px] hover:bg-clr_base hover:text-clr_title"
                  >
                    web development
                  </a>
                </li>
              </ul>
            </div>
            {/* Tags */}
          </div>
        </div>
        {/* ---------- Right side / sidebar */}
      </div>
    </div>
  </section>
  {/* -------- Footer */}
  <footer>
    <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
      <div className="pt_120 pb-[120px]">
        <div
          className="fl text-[10.5vw] uppercase font-medium leading-none w-full xl:mb-[60px] sm:mb-10 mb-5 border border-clr_cusborder rounded-lg text-center p-[10px] text-white"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          Get In Touch
        </div>
        <div className="flex md:flex-row flex-col justify-between gap-4">
          <div className="basis-1/2 shrink">
            <div>
              <p className="xl:mb-[60px] lg:mb-10 mb-[10px] lg:text-2xl sm:text-lg text-[17px] text-white max-w-lg">
                Hello, I’m David Matias, Website &amp; User Interface Designer
                based in London.
              </p>
              <a
                href="#"
                className="text-white lg:text-4xl sm:text-[28px] text-lg underline capitalize"
              >
                davidmatias333@.com
              </a>
            </div>
          </div>
          <div className="basis-1/2 shrink">
            <div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <a
                    href="https://www.facebook.com/olamide.adeyemo.94"
                    className="lg:py-[26px] py-[14px] lg:px-7 px-6 rounded-[10px] border border-clr_cusborder flex items-center justify-between text-white lg:text-2xl text-xl duration-500 hover:bg-clr_base hover:border-clr_base hover:text-clr_title group"
                  >
                    Facebook
                    <i className="bi-arrow-right text-white text-[22px] duration-500 group-hover:text-clr_title" />
                  </a>
                </div>
                <div>
                  <a
                    href="https://x.com/Adeyemo390"
                    className="lg:py-[26px] py-[14px] lg:px-7 px-6 rounded-[10px] border border-clr_cusborder flex items-center justify-between text-white lg:text-2xl text-xl duration-500 hover:bg-clr_base hover:border-clr_base hover:text-clr_title group"
                  >
                    Twitter
                    <i className="bi-arrow-right text-white text-[22px] duration-500 group-hover:text-clr_title" />
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="lg:py-[26px] py-[14px] lg:px-7 px-6 rounded-[10px] border border-clr_cusborder flex items-center justify-between text-white lg:text-2xl text-xl duration-500 hover:bg-clr_base hover:border-clr_base hover:text-clr_title group"
                  >
                    Linkdin
                    <i className="bi-arrow-right text-white text-[22px] duration-500 group-hover:text-clr_title" />
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="lg:py-[26px] py-[14px] lg:px-7 px-6 rounded-[10px] border border-clr_cusborder flex items-center justify-between text-white lg:text-2xl text-xl duration-500 hover:bg-clr_base hover:border-clr_base hover:text-clr_title group"
                  >
                    Webflow
                    <i className="bi-arrow-right text-white text-[22px] duration-500 group-hover:text-clr_title" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-common_bg bg-no-repeat bg-center bg-cover">
      <div className="xl:max-w-[1350px] lg:max-w-[960px] md:max-w-2xl sm:max-w-xl xl mx-auto px-3">
        <div className="flex flex-col lg:flex-row items-center justify-between py-[34px] lg:flex-nowrap gap-4">
          <p className="text-white text-lg">
            Copyright © 2023
            <a href="#" className="text-clr_base">
              {" "}
              Matias.{" "}
            </a>
            All rights reserved.
          </p>
          <ul className="terms flex gap-[38px]">
            <li>
              <a
                href="#"
                className="text-lg text-white duration-500 hover:text-clr_base"
              >
                Terms &amp; Condition
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg text-white duration-500 hover:text-clr_base"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
          <a
            href="#"
            className="w-10 h-[50px] bg-clr_base rounded-[5px] flex justify-center items-center"
          >
            <i className="bi-arrow-up text-lg"> </i>
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