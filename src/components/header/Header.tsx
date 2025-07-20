import { HiBars3 } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import headerlogo from "../header/images/zaira.svg";

const Header = () => {
  return (
    <header>
      <div className="bg-[#12253E]">
        <div className="mycon py-6 header-top flex items-center justify-between">
          <div className="header-top-left flex items-center gap-3">
            <Link to={"/"}>
              <img src={headerlogo} alt="Header Logo" />
            </Link>
            <button className="text-white text-3xl">
              <HiBars3 />
            </button>
          </div>

          <div className="header-top-right flex items-center gap-5">
            <form
              className="flex justify-between border-2 border-[#3a506b] rounded-[30px] h-[45px] w-[425px] items-center"
              action=""
            >
              <input
                className="w-full text-white outline-none bg-transparent p-[20px]"
                type="text"
                placeholder="Search hero . . ."
              />
              <button className="mr-[20px] text-white text-2xl">
                <IoIosSearch />
              </button>
            </form>
            <nav className="flex items-center gap-3 text-white text-2xl">
              <button>
                <FaFacebookF />
              </button>
              <button>
                <FiTwitter />
              </button>
              <button>
                <FaInstagram />
              </button>
              <button>
                <FaLinkedinIn />
              </button>
            </nav>
          </div>
        </div>
      </div>

      <div className="bg-[#183354]">
        <div className="mycon flex items-center justify-between">
          <nav className="text-1xl flex text-white gap-[40px] pt-[20px] pb-[20px]">
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>About Us</Link>
            <Link to={"/"}>Features</Link>
            <Link to={"/"}>Categories</Link>
            <Link to={"/"}>Contact</Link>
          </nav>

          <div className="head2right flex gap-[25px] text-[#90A8C5] text-2xl relative">
            <button className="relative">
              <FaRegHeart />
              <span className="absolute -top-2 -right-2 bg-[#F67070] text-white text-[14px] w-6 h-6 rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            <button className="relative">
              <CiShoppingBasket />
              <span className="absolute -top-2 -right-2 bg-[#F67070] text-white text-[14px] w-6 h-6 rounded-full flex items-center justify-center">
                0
              </span>
            </button>

            <button className="flex items-center gap-3">
              <RxAvatar />
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
