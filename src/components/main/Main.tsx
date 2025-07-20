import { RxAvatar } from "react-icons/rx";
import { IoIosCalendar } from "react-icons/io";
import { RxCountdownTimer } from "react-icons/rx";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { Link } from "react-router-dom";
import rasm1 from "./section2images/rasm1.svg";
import rasm2 from "./section2images/rasm2.svg";
import rasm3 from "./section2images/rasm3.svg";
import rasm4 from "./section2images/rasm4.svg";
import rasm5 from "./section2images/rasm5.svg";
import rasm6 from "./section2images/rasm6.svg";
import image from "./section2images/image.svg";
import section3image1 from "./section3images/image1.svg";
import section3image2 from "./section3images/image2.svg";
import section3image3 from "./section3images/image3.svg";
import section3image4 from "./section3images/image4.svg";
import section3image5 from "./section3images/image5.svg";
import section3images1 from "./section3images/images2/images1.svg";
import section3images2 from "./section3images/images2/images2.svg";
import section3images3 from "./section3images/images2/images3.svg";
import section3images4 from "./section3images/images2/images4.svg";
import section3images5 from "./section3images/images2/images5.svg";
import section3images31 from "./section3images/images3/images31.svg";
import section3images32 from "./section3images/images3/images32.svg";
import section3images33 from "./section3images/images3/images33.svg";
import section3images34 from "./section3images/images3/images34.svg";
import section3images35 from "./section3images/images3/images35.svg";
import section4images1 from "./section4images/Link.svg";
import section5images1 from "./section5images/rasm1.svg";
import section5images2 from "./section5images/rasm2.svg";
import section5images3 from "./section5images/rasm3.svg";
import section5images4 from "./section5images/rasm4.svg";
import section6images1 from "./section6images/rasm1.svg";
import section6images2 from "./section6images/rasm2.svg";
import section6images3 from "./section6images/rasm3.svg";
import section6images4 from "./section6images/rasm4.svg";
import section6images5 from "./section6images/rasm5.svg";
import section6images6 from "./section6images/rasm6.svg";

const Main = () => {
  return (
    <>
      <section className="showcase flex">
        <div className="mainimage flex items-end justify-center bg-cover bg-no-repeat bg-center w-[50%]">
          <div className=" flex flex-col items-center mb-[50px]">
            <button className="w-[78px] h-[26px] rounded-[3px] bg-[#F4796C]">
              FIGHTER
            </button>
            <h1 className="text-white text-center text-[25px] font-bold w-[500px] pt-3">
              Mobile Apple Planning Big Mac Redesign Ander Nigh HalfMacShare
            </h1>
            <div className="flex text-white gap-[15px] w-[400px] h-[16px] mt-[19px]">
              <button className="flex items-center gap-2">
                <RxAvatar />
                BY ADMIN
              </button>
              <button className="flex items-center gap-2">
                <IoIosCalendar />
                27 AUGUST, 2024
              </button>
              <button className="flex items-center gap-2">
                <RxCountdownTimer />
                20 MINS
              </button>
            </div>
          </div>
        </div>

        <div className="mainimage2 flex items-end justify-center bg-cover bg-center bg-no-repeat w-[50%]">
          <div className=" flex flex-col items-center mb-[50px]">
            <button className="w-[78px] h-[26px] rounded-[3px] bg-[#F4796C]">
              ACTION
            </button>
            <h1 className="text-white text-center text-[25px] font-bold w-[500px] pt-3">
              How To Build A Magazine Layout With CSS Grid Areas
            </h1>
            <div className="flex text-white gap-[15px] w-[400px] h-[16px] mt-[19px]">
              <button className="flex items-center gap-2">
                <RxAvatar />
                BY ADMIN
              </button>
              <button className="flex items-center gap-2">
                <IoIosCalendar />
                27 AUGUST, 2024
              </button>
              <button className="flex items-center gap-2">
                <RxCountdownTimer />
                20 MINS
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[70px]">
        <div className="mycon">
          <div className="flex items-center w-full">
            <h1 className="bg-[#F47C6E] text-white font-bold text-sm rounded-[3px] w-[248.49px] h-[40px] flex items-center justify-center -skew-x-[10deg]">
              <span className="skew-x-[10deg]">Exciting Categories</span>
            </h1>

            <div className="flex-1 flex flex-col justify-center gap-[2px]">
              <div className="w-full h-[1px] bg-[#EDEDED]"></div>
              <div className="w-full h-[1px] bg-[#F5F5F5]"></div>
            </div>
          </div>

          <div className="flex justify-between gap-[42px] mt-[40px]">
            <div className="w-[180px] h-[180px] rounded-[50px] relative overflow-hidden">
              <Link to={"/"}>
                <img
                  src={rasm1}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </Link>
              <button className="absolute bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-white bg-opacity-30 text-white text-sm rounded-[3px]">
                ACTION
              </button>
            </div>

            <div className="w-[180px] h-[180px] rounded-[50px] relative overflow-hidden">
              <Link to={"/"}>
                <img
                  src={rasm2}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </Link>
              <button className="absolute bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-white bg-opacity-30 text-white text-sm rounded-[3px]">
                GAMING
              </button>
            </div>
            <div className="w-[180px] h-[180px] rounded-[50px] relative overflow-hidden">
              <Link to={"/"}>
                <img
                  src={rasm3}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </Link>
              <button className="absolute bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-white bg-opacity-30 text-white text-sm rounded-[3px]">
                RACING
              </button>
            </div>
            <div className="w-[180px] h-[180px] rounded-[50px] relative overflow-hidden">
              <Link to={"/"}>
                <img
                  src={rasm4}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </Link>
              <button className="absolute bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-white bg-opacity-30 text-white text-sm rounded-[3px]">
                ANIMATION
              </button>
            </div>
            <div className="w-[180px] h-[180px] rounded-[50px] relative overflow-hidden">
              <Link to={"/"}>
                <img
                  src={rasm5}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </Link>
              <button className="absolute bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-white bg-opacity-30 text-white text-sm rounded-[3px]">
                FIGHTER
              </button>
            </div>
            <div className="w-[180px] h-[180px] rounded-[50px] relative overflow-hidden">
              <Link to={"/"}>
                <img
                  src={rasm6}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </Link>
              <button className="absolute bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-white bg-opacity-30 text-white text-sm rounded-[3px]">
                STORY
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[40px]">
        <div className="mycon flex items-center justify-center">
          <Link to={"/"}>
            <img src={image} alt="" />
          </Link>
        </div>
      </section>

      <section>
        <div className="mycon spotlite">
          <div className="top flex gap-[55px] mt-[70px]">
            <div className="flex items-center w-[72%]">
              <h1 className="bg-[#F47C6E] text-white font-bold text-sm rounded-[3px] w-[248.49px] h-[40px] flex items-center justify-center -skew-x-[10deg]">
                <span className="skew-x-[10deg]">Today’s Spotlight</span>
              </h1>

              <div className="flex-1 flex flex-col justify-center gap-[2px]">
                <div className="w-full h-[1px] bg-[#EDEDED]"></div>
                <div className="w-full h-[1px] bg-[#F5F5F5]"></div>
              </div>
            </div>
            <div className="flex items-center w-[28%]">
              <h1 className="bg-[#F47C6E] text-white font-bold text-sm rounded-[3px] w-[148.56px] h-[40px] flex items-center justify-center -skew-x-[10deg]">
                <span className="skew-x-[10deg]">Follow Us</span>
              </h1>

              <div className="flex-1 flex flex-col justify-center gap-[2px]">
                <div className="w-[85%] h-[1px] bg-[#EDEDED]"></div>
                <div className="w-[85%] h-[1px] bg-[#F5F5F5]"></div>
              </div>
            </div>
          </div>

          <div className="flex bottom mt-[30px]">
            <div>
              <Link to={"/"}>
                <img
                  src={section3image1}
                  alt=""
                  className="w-[498.09px] h-[300px]"
                />
              </Link>
              <button className="flex items-center justify-center w-[72.8px] h-[24px] mt-[23.5px] text-[#6D757F] border border-[#B8C1CD] rounded-[3px]">
                Racing
              </button>
              <h1 className="mt-[6px] text-[#183354] w-[429.06px] h-[73.33px] text-[27px]">
                How To Build A Magazine Layout With CSS Grid Areas
              </h1>
              <div className="flex text-[#6D757F] text-[14px] gap-[15px] w-[498.09px] h-[16px] mt-[19px]">
                <button className="flex items-center gap-2">
                  <RxAvatar />
                  BY ADMIN
                </button>
                <button className="flex items-center gap-2">
                  <IoIosCalendar />
                  27 AUGUST, 2024
                </button>
                <button className="flex items-center gap-2">
                  <RxCountdownTimer />
                  20 MINS
                </button>
              </div>
            </div>
            <div className="ml-[15px] w-[391.92px] h-[481.16px] flex flex-col gap-[20px]">
              <div className="w-[361.92px] h-[140px] flex justify-between items-start">
                <div className="flex flex-col items-start">
                  <button className="flex items-center justify-center w-[72.8px] h-[24px] text-[#6D757F] border border-[#B8C1CD] rounded-[3px] mt-[23.5px]">
                    Action
                  </button>

                  <h1 className="mt-[7px] w-[193.33px] h-[53px] text-[20px]">
                    Fortnite Ratings Are
                    <br />
                    Skyrocketing
                  </h1>

                  <button className="mt-[13px] flex items-center gap-2 text-[#6D757F]">
                    <IoIosCalendar />
                    27 AUGUST, 2024
                  </button>
                </div>
                <Link to={"/"}>
                  <img
                    src={section3image2}
                    alt=""
                    className="h-full object-contain"
                  />
                </Link>
              </div>

              <div className="w-[361.92px] h-[140px] flex justify-between items-start">
                <div className="flex flex-col items-start">
                  <button className="flex items-center justify-center w-[72.8px] h-[24px] text-[#6D757F] border border-[#B8C1CD] rounded-[3px] mt-[23.5px]">
                    Fighter
                  </button>

                  <h1 className="mt-[7px] w-[193.33px] h-[53px] text-[20px]">
                    Everything You Need
                    <br />
                    To Know About
                  </h1>

                  <button className="mt-[13px] flex items-center gap-2 text-[#6D757F]">
                    <IoIosCalendar />
                    27 AUGUST, 2024
                  </button>
                </div>
                <Link to={"/"}>
                  <img
                    src={section3image3}
                    alt=""
                    className="h-full object-contain"
                  />
                </Link>
              </div>

              <div className="w-[361.92px] h-[140px] flex justify-between items-start">
                <div className="flex flex-col items-start">
                  <button className="flex items-center justify-center w-[72.8px] h-[24px] text-[#6D757F] border border-[#B8C1CD] rounded-[3px] mt-[23.5px]">
                    Gaming
                  </button>

                  <h1 className="mt-[7px] w-[193.33px] h-[53px] text-[20px]">
                    We Can’t Wait to Try
                    <br />
                    This Gaming Area
                  </h1>

                  <button className="mt-[13px] flex items-center gap-2 text-[#6D757F]">
                    <IoIosCalendar />
                    27 AUGUST, 2024
                  </button>
                </div>
                <Link to={"/"}>
                  <img
                    src={section3image4}
                    alt=""
                    className="h-full object-contain"
                  />
                </Link>
              </div>
            </div>

            <div className="ml-[55px] w-[329.95px] h-[461.3px]">
              <div className="w-[329.95px] h-[141.5px] grid grid-cols-2 gap-[4px]">
                <div className="flex items-center justify-center w-[162px] h-[44.5px] bg-[#E8F1F1] rounded-[4px]">
                  <button className="flex items-center justify-center gap-[5px]">
                    <FaFacebookF />
                    Facebook
                  </button>
                </div>
                <div className=" flex items-center justify-center w-[162px] h-[44.5px] bg-[#E8F1F1] rounded-[4px]">
                  <button className="flex items-center justify-center gap-[5px]">
                    <BsTwitter />
                    Twitter
                  </button>
                </div>
                <div className=" flex items-center justify-center w-[162px] h-[44.5px] bg-[#E8F1F1] rounded-[4px]">
                  <button className="flex items-center justify-center gap-[5px]">
                    <FaInstagram />
                    Instagram
                  </button>
                </div>
                <div className=" flex items-center justify-center w-[162px] h-[44.5px] bg-[#E8F1F1] rounded-[4px]">
                  <button className="flex items-center justify-center gap-[5px]">
                    <FaYoutube />
                    You Tube
                  </button>
                </div>
                <div className=" flex items-center justify-center w-[162px] h-[44.5px] bg-[#E8F1F1] rounded-[4px]">
                  <button className="flex items-center justify-center gap-[5px]">
                    <FaLinkedinIn />
                    LinkedIn
                  </button>
                </div>
                <div className=" flex items-center justify-center w-[162px] h-[44.5px] bg-[#E8F1F1] rounded-[4px]">
                  <button className="flex items-center justify-center gap-[5px]">
                    <FaPinterestP />
                    Pinterest
                  </button>
                </div>
              </div>

              <div className="relative flex flex-col items-center justify-start w-[329.95px] h-[269.8px] bg-[#183354] mt-[50px] pt-[120px] rounded-[5px]">
                <Link to={"/"}>
                  <img
                    src={section3image5}
                    alt=""
                    className="absolute top-[30px] left-1/2 -translate-x-1/2 z-0"
                  />
                </Link>

                <h1 className="absolute top-[50px] left-1/2 -translate-x-1/2 text-white text-[20px] font-bold z-10 text-center w-[200px]">
                  Daily Newsletter
                </h1>

                <div className="flex flex-col items-center gap-[25px]">
                  <h1 className="w-[218.75px] h-[56px] text-[17px] text-white text-center leading-[28px]">
                    Get all the top stories from
                    <br />
                    Blogs to keep track.
                  </h1>

                  <button className="w-[259.95px] h-[55px] bg-[#F4796C] rounded-[5px] text-white font-semibold">
                    Enter your e-mail
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mycon news">
          <div className="top flex gap-[55px] mt-[50px]">
            <div className="flex items-center w-[72%]">
              <h1 className="bg-[#F47C6E] text-white font-bold text-sm rounded-[3px] w-[248.49px] h-[40px] flex items-center justify-center -skew-x-[10deg]">
                <span className="skew-x-[10deg]">Our Popular News</span>
              </h1>

              <div className="flex-1 flex flex-col justify-center gap-[2px]">
                <div className="w-full h-[1px] bg-[#EDEDED]"></div>
                <div className="w-full h-[1px] bg-[#F5F5F5]"></div>
              </div>
            </div>
            <div className="flex items-center w-[28%]">
              <h1 className="bg-[#F47C6E] text-white font-bold text-sm rounded-[3px] w-[148.56px] h-[40px] flex items-center justify-center -skew-x-[10deg]">
                <span className="skew-x-[10deg]">Recent Posts</span>
              </h1>

              <div className="flex-1 flex flex-col justify-center gap-[2px]">
                <div className="w-[85%] h-[1px] bg-[#EDEDED]"></div>
                <div className="w-[85%] h-[1px] bg-[#F5F5F5]"></div>
              </div>
            </div>
          </div>

          <div className="flex bottom mt-[30px] ">
            <div className="flex justify-center mt-[30px]">
              <div className="grid grid-cols-6 grid-rows-2 gap-4 w-[880px] rounded-[6px]">
                <div
                  className="col-span-3 row-start-1 row-end-2 h-[300px] rounded-[6px]"
                  style={{ backgroundImage: `url(${section3images1})` }}
                >
                  <div className="information ml-[25px] mt-[150px]">
                    <button className="bottom-10 left-1/2 px-3 py-1 bg-white bg-opacity-30 text-white text-sm rounded-[3px]">
                      RACING
                    </button>
                    <h1 className="w-[365.95px] h-[52px] text-white mt-[15px] text-[19px]">
                      Racing Games Browned Butte roadert Cookies Daily Breakfast
                    </h1>
                    <div className="flex w-[380.02px] h-[16px] text-white text-[15px] mt-[15px]">
                      <button className="flex items-center gap-2">
                        <IoIosCalendar />
                        27 AUGUST, 2024
                      </button>
                      <button className="flex items-center gap-2 pl-[15px]">
                        <RxCountdownTimer />
                        20 MINS
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className="col-span-3 row-start-1 row-end-2 h-[300px] rounded-[6px]"
                  style={{ backgroundImage: `url(${section3images2})` }}
                >
                  <div className="information ml-[25px] mt-[150px]">
                    <button className="bottom-10 left-1/2 px-3 py-1 bg-white bg-opacity-30 text-white text-sm rounded-[3px]">
                      ACTION
                    </button>
                    <h1 className="w-[365.95px] h-[52px] text-white mt-[15px] text-[19px]">
                      How To Host A WordPress Site On
                      <br />
                      Amazon Lightsail
                    </h1>
                    <div className="flex w-[380.02px] h-[16px] text-white text-[15px] mt-[15px]">
                      <button className="flex items-center gap-2">
                        <IoIosCalendar />
                        27 AUGUST, 2024
                      </button>
                      <button className="flex items-center gap-2 pl-[15px]">
                        <RxCountdownTimer />
                        20 MINS
                      </button>
                    </div>
                  </div>
                </div>

                <div
                  className="col-span-2 row-start-2 row-end-3 h-[300px] rounded-[6px]"
                  style={{ backgroundImage: `url(${section3images3})` }}
                >
                  <div className="information ml-[25px] mt-[150px]">
                    <button className="bottom-10 left-1/2 px-3 py-1 bg-white bg-opacity-30 text-white text-sm rounded-[3px]">
                      RACING
                    </button>
                    <h1 className="w-[214.67.95px] h-[53px] text-white mt-[15px] text-[19px]">
                      The Magic Of February
                      <br />
                      2024 Wallpapers
                    </h1>
                    <div className="flex w-[380.02px] h-[16px] text-white text-[15px] mt-[15px]">
                      <button className="flex items-center gap-2">
                        <IoIosCalendar />
                        27 AUGUST, 2024
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="col-span-2 row-start-2 row-end-3 h-[300px] rounded-[6px]"
                  style={{ backgroundImage: `url(${section3images4})` }}
                >
                  <div className="information ml-[25px] mt-[150px]">
                    <button className="bottom-10 left-1/2 px-3 py-1 bg-white bg-opacity-30 text-white text-sm rounded-[3px]">
                      ANIMATION
                    </button>
                    <h1 className="w-[214.67.95px] h-[53px] text-white mt-[15px] text-[19px]">
                      Customization And
                      <br />
                      Animation
                    </h1>
                    <div className="flex w-[380.02px] h-[16px] text-white text-[15px] mt-[15px]">
                      <button className="flex items-center gap-2">
                        <IoIosCalendar />
                        27 AUGUST, 2024
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="col-span-2 row-start-2 row-end-3 h-[300px] rounded-[6px]"
                  style={{ backgroundImage: `url(${section3images5})` }}
                >
                  <div className="information ml-[25px] mt-[150px]">
                    <button className="bottom-10 left-1/2 px-3 py-1 bg-white bg-opacity-30 text-white text-sm rounded-[3px]">
                      STORY
                    </button>
                    <h1 className="w-[214.67.95px] h-[53px] text-white mt-[15px] text-[19px]">
                      Better ROI For Your
                      <br />
                      Digital Products
                    </h1>
                    <div className="flex w-[380.02px] h-[16px] text-white text-[15px] mt-[15px]">
                      <button className="flex items-center gap-2">
                        <IoIosCalendar />
                        27 AUGUST, 2024
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-[30px] ml-[80px] w-[329.95px] h-[610px] gap-[15px]">
              <div className="w-[329.95px] h-[110px] flex gap-4">
                <div className="w-[120px] h-[110px] flex-shrink-0">
                  <Link to={"/"}>
                    <img
                      src={section3images31}
                      alt=""
                      className="w-full h-full object-cover rounded-[6px]"
                    />
                  </Link>
                </div>

                <div className="flex-1 flex flex-col justify-between py-1">
                  <button className="flex items-center justify-center w-fit px-3 py-1 h-[24px] text-[#6D757F] border border-[#B8C1CD] rounded-[3px] text-sm">
                    RACING
                  </button>

                  <h1 className="text-[15px] text-black leading-tight font-medium my-2">
                    The Butter Chocolate
                    <br /> Cookies Daily
                  </h1>

                  <div className="flex items-center gap-2 text-[#6D757F] text-sm">
                    <IoIosCalendar />
                    27 AUGUST, 2024
                  </div>
                </div>
              </div>

              <div className="w-[329.95px] h-[110px] flex gap-4">
                <div className="w-[120px] h-[110px] flex-shrink-0">
                  <Link to={"/"}>
                    <img
                      src={section3images32}
                      alt=""
                      className="w-full h-full object-cover rounded-[6px]"
                    />
                  </Link>
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <button className="flex items-center justify-center w-fit px-3 py-1 h-[24px] text-[#6D757F] border border-[#B8C1CD] rounded-[3px] text-sm">
                    STORY
                  </button>

                  <h1 className="text-[15px] text-black leading-tight font-medium my-2">
                    Copying Designs
                    <br />
                    Doesn’t Work
                  </h1>

                  <div className="flex items-center gap-2 text-[#6D757F] text-sm">
                    <IoIosCalendar />
                    27 AUGUST, 2024
                  </div>
                </div>
              </div>

              <div className="w-[329.95px] h-[110px] flex gap-4">
                <div className="w-[120px] h-[110px] flex-shrink-0">
                  <Link to={"/"}>
                    <img
                      src={section3images33}
                      alt=""
                      className="w-full h-full object-cover rounded-[6px]"
                    />
                  </Link>
                </div>

                <div className="flex-1 flex flex-col justify-between py-1">
                  <button className="flex items-center justify-center w-fit px-3 py-1 h-[24px] text-[#6D757F] border border-[#B8C1CD] rounded-[3px] text-sm">
                    ANIMATION
                  </button>

                  <h1 className="text-[15px] text-black leading-tight font-medium my-2">
                    Ollaboration Problems
                    <br />
                    Go Away By Sharing
                  </h1>

                  <div className="flex items-center gap-2 text-[#6D757F] text-sm">
                    <IoIosCalendar />
                    27 AUGUST, 2024
                  </div>
                </div>
              </div>

              <div className="w-[329.95px] h-[110px] flex gap-4">
                <div className="w-[120px] h-[110px] flex-shrink-0">
                  <Link to={"/"}>
                    <img
                      src={section3images34}
                      alt=""
                      className="w-full h-full object-cover rounded-[6px]"
                    />
                  </Link>
                </div>

                <div className="flex-1 flex flex-col justify-between py-1">
                  <button className="flex items-center justify-center w-fit px-3 py-1 h-[24px] text-[#6D757F] border border-[#B8C1CD] rounded-[3px] text-sm">
                    FIGHTER
                  </button>

                  <h1 className="text-[15px] text-black leading-tight font-medium my-2">
                    Level Up Your CSS
                    <br />
                    Skills With The
                  </h1>

                  <div className="flex items-center gap-2 text-[#6D757F] text-sm">
                    <IoIosCalendar />
                    27 AUGUST, 2024
                  </div>
                </div>
              </div>

              <div className="w-[329.95px] h-[110px] flex gap-4">
                <div className="w-[120px] h-[110px] flex-shrink-0">
                  <Link to={"/"}>
                    <img
                      src={section3images35}
                      alt=""
                      className="w-full h-full object-cover rounded-[6px]"
                    />
                  </Link>
                </div>

                <div className="flex-1 flex flex-col justify-between py-1">
                  <button className="flex items-center justify-center w-fit px-3 py-1 h-[24px] text-[#6D757F] border border-[#B8C1CD] rounded-[3px] text-sm">
                    RACING
                  </button>

                  <h1 className="text-[15px] text-black leading-tight font-medium my-2">
                    The Key To Good
                    <br />
                    Component Design
                  </h1>

                  <div className="flex items-center gap-2 text-[#6D757F] text-sm">
                    <IoIosCalendar />
                    27 AUGUST, 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[60px]">
        <div className="mycon">
          <Link to={"/"}>
            <img src={section4images1} alt="" />
          </Link>
        </div>
      </section>

      <section className="mt-[70px] pt-[100px] pb-[70px] w-[100%] bg-[#253346]">
        <div className="mycon">
          <div className="flex gap-[45px] top">
            <div className="flex items-center w-[85%]">
              <h1 className="bg-[#F47C6E] text-white font-bold text-sm rounded-[3px] w-[248.49px] h-[40px] flex items-center justify-center -skew-x-[10deg]">
                <span className="skew-x-[10deg]">Trending Gaming News</span>
              </h1>

              <div className="flex-1 flex flex-col justify-center gap-[2px]">
                <div className="w-full h-[1px] bg-[#EDEDED]"></div>
                <div className="w-full h-[1px] bg-[#F5F5F5]"></div>
              </div>
            </div>
            <div className="right">
              <button className="flex items-center justify-center w-fit mt-[10px] px-3 py-1 h-[24px] bg-white bg-opacity-30 text-white border border-[#B8C1CD] rounded-[3px] text-sm">
                view all
              </button>
            </div>
          </div>
          <div className="flex mt-[40px]">
            <div className="left w-[630px]">
              <Link to={"/"}>
                <img
                  src={section5images1}
                  alt=""
                  className="w-[630px] h-[380px]"
                />
              </Link>

              <div className="mt-[22px]">
                <button className="flex items-center justify-center w-fit px-3 py-1 h-[24px] bg-white bg-opacity-30 text-[#BACCE1] border border-[#B8C1CD] rounded-[3px] text-sm">
                  FIGHTER
                </button>
                <h1 className="pt-[14px] w-[559.19px] h-[74.39px] text-[30px] text-white">
                  Exciting New Browned Chocolate Gaming
                  <br />
                  Cookies Daily Breakfast
                </h1>
                <div className="mt-[35px] flex text-[#BACCE1] gap-[10px]">
                  <button className="flex items-center gap-2">
                    <RxAvatar />
                    BY ADMIN
                  </button>
                  <button className="flex items-center gap-2">
                    <IoIosCalendar />
                    27 AUGUST, 2024
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[1px] h-auto bg-white bg-opacity-30 mx-[20px]"></div>

            <div className="flex flex-col gap-[30px] w-[595px] ml-[65px]">
              <div className="w-[595px] h-[159.64px] flex gap-4">
                <div className="w-[190px] h-[159.64px] flex-shrink-0">
                  <Link to={"/"}>
                    <img
                      src={section5images2}
                      alt=""
                      className="w-full h-full object-cover rounded-[6px]"
                    />
                  </Link>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <button className="flex items-center justify-center w-fit mt-[10px] px-3 py-1 h-[24px] bg-white bg-opacity-30 text-[#BACCE1] border border-[#B8C1CD] rounded-[3px] text-sm">
                    ANIMATION
                  </button>
                  <h1 className="w-[251.25px] h-[60.8px] text-white text-[20px] pt-[20px]">
                    A Guide To Getting Data
                    <br />
                    Visualization Right
                  </h1>
                  <div className="mt-[35px] flex text-[#BACCE1] gap-[10px]">
                    <button className="flex items-center gap-2">
                      <RxAvatar />
                      BY ADMIN
                    </button>
                    <button className="flex items-center gap-2">
                      <IoIosCalendar />
                      27 AUGUST, 2024
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-[595px] h-[159.64px] flex gap-4">
                <div className="w-[190px] h-[159.64px] flex-shrink-0">
                  <Link to={"/"}>
                    <img
                      src={section5images3}
                      alt=""
                      className="w-full h-full object-cover rounded-[6px]"
                    />
                  </Link>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <button className="flex items-center justify-center w-fit mt-[10px]  px-3 py-1 h-[24px] bg-white bg-opacity-30 text-[#BACCE1] border border-[#B8C1CD] rounded-[3px] text-sm">
                    ACTION
                  </button>
                  <h1 className="w-[251.25px] h-[60.8px] text-white text-[17px] pt-[20px]">
                    Fluid Typography: Predicting A<br />
                    Problem With Your User’s Zoom-In
                  </h1>
                  <div className="mt-[35px] flex text-[#BACCE1] gap-[10px]">
                    <button className="flex items-center gap-2">
                      <RxAvatar />
                      BY ADMIN
                    </button>
                    <button className="flex items-center gap-2">
                      <IoIosCalendar />
                      27 AUGUST, 2024
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-[595px] h-[159.64px] flex gap-4">
                <div className="w-[190px] h-[159.64px] flex-shrink-0">
                  <Link to={"/"}>
                    <img
                      src={section5images4}
                      alt=""
                      className="w-full h-full object-cover rounded-[6px]"
                    />
                  </Link>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <button className="flex items-center justify-center w-fit mt-[10px] px-3 py-1 h-[24px] bg-white bg-opacity-30 text-[#BACCE1] border border-[#B8C1CD] rounded-[3px] text-sm">
                    RACING
                  </button>
                  <h1 className="w-[251.25px] h-[60.8px] text-white text-[17px] pt-[20px]">
                    Deploying CSS Logical Properties
                    <br />
                    On Web Apps
                  </h1>
                  <div className="mt-[35px] flex text-[#BACCE1] gap-[10px]">
                    <button className="flex items-center gap-2">
                      <RxAvatar />
                      BY ADMIN
                    </button>
                    <button className="flex items-center gap-2">
                      <IoIosCalendar />
                      27 AUGUST, 2024
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mycon">
          <div className="top flex gap-[55px] mt-[80px]">
            <div className="flex items-center w-[72%]">
              <h1 className="bg-[#F47C6E] text-white font-bold text-sm rounded-[3px] w-[248.49px] h-[40px] flex items-center justify-center -skew-x-[10deg]">
                <span className="skew-x-[10deg]">Weekly Best News</span>
              </h1>

              <div className="flex-1 flex flex-col justify-center gap-[2px]">
                <div className="w-full h-[1px] bg-[#EDEDED]"></div>
                <div className="w-full h-[1px] bg-[#F5F5F5]"></div>
              </div>
            </div>
            <div className="flex items-center w-[28%]">
              <h1 className="bg-[#F47C6E] text-white font-bold text-sm rounded-[3px] w-[148.56px] h-[40px] flex items-center justify-center -skew-x-[10deg]">
                <span className="skew-x-[10deg]">Hot News</span>
              </h1>

              <div className="flex-1 flex flex-col justify-center gap-[2px]">
                <div className="w-[85%] h-[1px] bg-[#EDEDED]"></div>
                <div className="w-[85%] h-[1px] bg-[#F5F5F5]"></div>
              </div>
            </div>
          </div>
          <div className="bottom flex">
            <div className="left mt-[30px] flex flex-col gap-[20px]">
              <div className="w-[890.03px] h-[300.28px] flex gap-6">
                <div className="w-[440px] h-[300.28px] flex-shrink-0">
                  <Link to={"/"}>
                    <img
                      src={section6images1}
                      alt=""
                      className="w-full h-full object-cover rounded-[6px]"
                    />
                  </Link>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <button className="w-[78.08px] h-[26px] bg-[#F4796C] rounded-[3px]">
                    Fighter
                  </button>
                  <h1 className="w-[340.61px] h-[61.6px] text-[#183354] text-[23px]">
                    Taking The Stress Out Of Design
                    <br />
                    System Management
                  </h1>
                  <div className="flex text-[#6D757F] gap-[10px]">
                    <button className="flex items-center gap-2">
                      <RxAvatar />
                      BY ADMIN
                    </button>
                    <button className="flex items-center gap-2">
                      <IoIosCalendar />
                      27 AUGUST, 2024
                    </button>
                  </div>
                  <p className="w-[405.15px] h-[84px] text-[#545E69] text-[17px]">
                    Browned butter and brown sugar caramelly oodness crispy
                    edgesthick and soft centers and melty little puddles of
                    chocolate y first favorite.
                  </p>
                  <button className="w-[138.52px] h-[36px] text-[#183354] rounded-[3px] border-[1px] border-solid border-[#CFCFCF]">
                    READ MORE
                  </button>
                </div>
              </div>

              <div className="w-[890.03px] h-[300.28px] flex gap-6">
                <div className="w-[440px] h-[300.28px] flex-shrink-0">
                  <Link to={"/"}>
                    <img
                      src={section6images2}
                      alt=""
                      className="w-full h-full object-cover rounded-[6px]"
                    />
                  </Link>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <button className="w-[78.08px] h-[26px] bg-[#F4796C] rounded-[3px]">
                    RACING
                  </button>
                  <h1 className="w-[381.59px] h-[61.8px] text-[#183354] text-[23px]">
                    Boosting Productivity For Designers
                    <br />
                    With Efficient Tools
                  </h1>
                  <div className="flex text-[#6D757F] gap-[10px]">
                    <button className="flex items-center gap-2">
                      <RxAvatar />
                      BY ADMIN
                    </button>
                    <button className="flex items-center gap-2">
                      <IoIosCalendar />
                      27 AUGUST, 2024
                    </button>
                  </div>
                  <p className="w-[405.15px] h-[84px] text-[#545E69] text-[17px]">
                    Browned butter and brown sugar caramelly oodness crispy
                    edgesthick and soft centers and melty little puddles of
                    chocolate y first favorite.
                  </p>
                  <button className="w-[138.52px] h-[36px] text-[#183354] rounded-[3px] border-[1px] border-solid border-[#CFCFCF]">
                    READ MORE
                  </button>
                </div>
              </div>

              <div className="w-[890.03px] h-[300.28px] flex gap-6">
                <div className="w-[440px] h-[300.28px] flex-shrink-0">
                  <Link to={"/"}>
                    <img
                      src={section6images3}
                      alt=""
                      className="w-full h-full object-cover rounded-[6px]"
                    />
                  </Link>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <button className="w-[78.08px] h-[26px] bg-[#F4796C] rounded-[3px]">
                    ACTION
                  </button>
                  <h1 className="w-[393.67px] h-[61.6px] text-[#183354] text-[23px]">
                    How To Prioritize User Security When
                    <br />
                    Collecting Offline Data
                  </h1>
                  <div className="flex text-[#6D757F] gap-[10px]">
                    <button className="flex items-center gap-2">
                      <RxAvatar />
                      BY ADMIN
                    </button>
                    <button className="flex items-center gap-2">
                      <IoIosCalendar />
                      27 AUGUST, 2024
                    </button>
                  </div>
                  <p className="w-[405.15px] h-[84px] text-[#545E69] text-[17px]">
                    Browned butter and brown sugar caramelly oodness crispy
                    edgesthick and soft centers and melty little puddles of
                    chocolate y first favorite.
                  </p>
                  <button className="w-[138.52px] h-[36px] text-[#183354] rounded-[3px] border-[1px] border-solid border-[#CFCFCF]">
                    READ MORE
                  </button>
                </div>
              </div>

              <div className="w-[890.03px] h-[300.28px] flex gap-6">
                <div className="w-[440px] h-[300.28px] flex-shrink-0">
                  <Link to={"/"}>
                    <img
                      src={section6images4}
                      alt=""
                      className="w-full h-full object-cover rounded-[6px]"
                    />
                  </Link>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <button className="w-[97.14px] h-[26px] bg-[#F4796C] rounded-[3px]">
                    ANIMATION
                  </button>
                  <h1 className="w-[338.79px] h-[61.6px] text-[#183354] text-[23px]">
                    The Anatomy Of Themed Design
                    <br />
                    System Components
                  </h1>
                  <div className="flex text-[#6D757F] gap-[10px]">
                    <button className="flex items-center gap-2">
                      <RxAvatar />
                      BY ADMIN
                    </button>
                    <button className="flex items-center gap-2">
                      <IoIosCalendar />
                      27 AUGUST, 2024
                    </button>
                  </div>
                  <p className="w-[405.15px] h-[84px] text-[#545E69] text-[17px]">
                    Browned butter and brown sugar caramelly oodness crispy
                    edgesthick and soft centers and melty little puddles of
                    chocolate y first favorite.
                  </p>
                  <button className="w-[138.52px] h-[36px] text-[#183354] rounded-[3px] border-[1px] border-solid border-[#CFCFCF]">
                    READ MORE
                  </button>
                </div>
              </div>
            </div>
            <div className="right mt-[30px] flex flex-col">
              <div className="w-[329.95px] mb-[20px] h-[358.5px]">
                <div className="flex-1 flex flex-col justify-between gap-[12px]">
                  <div className="w-[329.95px] h-[220px]">
                    <Link to={"/"}>
                      <img src={section6images6} alt="" />
                    </Link>
                  </div>
                  <button className="w-[79.08px] h-[24px] rounded-[3px] border-[1px] border-solid border-[#CFCFCF]">
                    FIGHTER
                  </button>
                  <h1 className="w-[324.36px] h-[52px] text-[15px]">
                    Racing Games Browned Buttadert
                    <br />
                    Cookies Daily Breakfast
                  </h1>
                  <div className="flex text-[#6D757F] gap-[10px]">
                    <button className="flex items-center gap-2">
                      <RxAvatar />
                      BY ADMIN
                    </button>
                    <button className="flex items-center gap-2">
                      <IoIosCalendar />
                      27 AUGUST, 2024
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[329.95px] mb-[20px] h-[118.5px]">
                <div className="flex-1 flex flex-col justify-between gap-[12px]">
                  <button className="w-[79.08px] h-[24px] rounded-[3px] border-[1px] border-solid border-[#CFCFCF]">
                    ACTION
                  </button>
                  <h1 className="w-[324.36px] h-[52px] text-[15px]">
                    The Anatomy Of Themed Design
                    <br />
                    System Components
                  </h1>
                  <div className="flex text-[#6D757F] gap-[10px]">
                    <button className="flex items-center gap-2">
                      <RxAvatar />
                      BY ADMIN
                    </button>
                    <button className="flex items-center gap-2">
                      <IoIosCalendar />
                      27 AUGUST, 2024
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[329.95px] mb-[50px] h-[118.5px]">
                <div className="flex-1 flex flex-col justify-between gap-[12px]">
                  <button className="w-[79.08px] h-[24px] rounded-[3px] border-[1px] border-solid border-[#CFCFCF]">
                    STORY
                  </button>
                  <h1 className="w-[324.36px] h-[52px] text-[15px]">
                    Taking The Stress Out Of Design
                    <br />
                    System Management
                  </h1>
                  <div className="flex text-[#6D757F] gap-[10px]">
                    <button className="flex items-center gap-2">
                      <RxAvatar />
                      BY ADMIN
                    </button>
                    <button className="flex items-center gap-2">
                      <IoIosCalendar />
                      27 AUGUST, 2024
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-[329.95px] h-[407.94px]">
                <Link to={"/"}>
                  <img src={section6images5} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-[79.99px]">
        <div className="mycon flex items-center justify-center bg-[#E8F1F1] h-[205.59px]">
          <div className="left">
            <h1 className="w-[275px] h-[58.49px] text-[#183354] text-[23px]">
              Get Our Latest Gaming
              <br />
              News & Update
            </h1>
          </div>
          <div className="rignt ml-[40px] flex justify-between">
            <div className="w-[785.63.px] h-[50px] flex gap-[7px]">
              <input
                type="text"
                className="w-[300px] h-[50px] rounded-[6px]"
                placeholder="Name"
              />
              <input
                type="text"
                className="w-[300px] h-[50px] rounded-[6px]"
                placeholder="E-mail"
              />
              <button className="w-[171.63px] h-[50px] text-center bg-[#F4796C] rounded-[4px]">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
