import logo from "./Link.svg";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="bg-[#0C1622] text-white py-[48px] mt-[65.92px]">
          <div className="mycon">
            <div className="flex gap-[32px]">
              <div className="w-[20%]">
                <div className="flex items-center mb-[16px]">
                  <img src={logo} alt="Zaira Logo" className="h-[32px]" />
                </div>
                <p className="text-[#D1D5DB] text-[14px] leading-relaxed">
                  Browned Butter And Brown Sugar Caramelly Goodness, Crispy
                  Edges Thick And Soft Centers And Melty Little Puddles Of
                  Chocolate.
                </p>
              </div>
              <div className="w-[20%]">
                <h3 className="text-white text-[18px] font-semibold mb-[16px]">
                  Company
                </h3>
                <div className="w-[32px] h-[2px] bg-[#F97316] mb-[16px]"></div>
                <div className="flex flex-col gap-[8px]">
                  <button className="text-[#D1D5DB] text-[14px] text-left hover:text-white">
                    About Us
                  </button>
                  <button className="text-[#D1D5DB] text-[14px] text-left hover:text-white">
                    The Test Kitchen
                  </button>
                  <button className="text-[#D1D5DB] text-[14px] text-left hover:text-white">
                    Podcast
                  </button>
                  <button className="text-[#D1D5DB] text-[14px] text-left hover:text-white">
                    Events
                  </button>
                  <button className="text-[#D1D5DB] text-[14px] text-left hover:text-white">
                    Jobs
                  </button>
                </div>
              </div>
              <div className="w-[20%]">
                <h3 className="text-white text-[18px] font-semibold mb-[16px]">
                  Get Help
                </h3>
                <div className="w-[32px] h-[2px] bg-[#F97316] mb-[16px]"></div>
                <div className="flex flex-col gap-[8px]">
                  <button className="text-[#D1D5DB] text-[14px] text-left hover:text-white">
                    Contact & Faq
                  </button>
                  <button className="text-[#D1D5DB] text-[14px] text-left hover:text-white">
                    Orders & Returns
                  </button>
                  <button className="text-[#D1D5DB] text-[14px] text-left hover:text-white">
                    Gift Cards
                  </button>
                  <button className="text-[#D1D5DB] text-[14px] text-left hover:text-white">
                    Register
                  </button>
                  <button className="text-[#D1D5DB] text-[14px] text-left hover:text-white">
                    Catalog
                  </button>
                </div>
              </div>
              <div className="w-[20%]">
                <h3 className="text-white text-[18px] font-semibold mb-[16px]">
                  Explore
                </h3>
                <div className="w-[32px] h-[2px] bg-[#F97316] mb-[16px]"></div>
                <div className="flex flex-col gap-[8px]">
                  <button className="text-[#D1D5DB] text-[14px] text-left hover:text-white">
                    The Shop
                  </button>
                  <button className="text-[#D1D5DB] text-[14px] text-left hover:text-white">
                    Recipes
                  </button>
                  <button className="text-[#D1D5DB] text-[14px] text-left hover:text-white">
                    Food
                  </button>
                  <button className="text-[#D1D5DB] text-[14px] text-left hover:text-white">
                    Travel
                  </button>
                  <button className="text-[#D1D5DB] text-[14px] text-left hover:text-white">
                    Hotline
                  </button>
                </div>
              </div>
              <div className="w-[20%]">
                <h3 className="text-white text-[18px] font-semibold mb-[16px]">
                  Follow Us On
                </h3>
                <div className="w-[32px] h-[2px] bg-[#F97316] mb-[16px]"></div>
                <div className="flex flex-col gap-[8px]">
                  <button className="text-[#D1D5DB] text-[14px] text-left hover:text-white">
                    Facebook
                  </button>
                  <button className="text-[#D1D5DB] text-[14px] text-left hover:text-white">
                    Twitter
                  </button>
                  <button className="text-[#D1D5DB] text-[14px] text-left hover:text-white">
                    Instagram
                  </button>
                  <button className="text-[#D1D5DB] text-[14px] text-left hover:text-white">
                    Youtube
                  </button>
                  <button className="text-[#D1D5DB] text-[14px] text-left hover:text-white">
                    Pinterest
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-[1px] bg-[#374151] mt-[32px] mb-[24px]"></div>
            <div className="flex justify-between items-center">
              <div className="flex gap-[24px] items-center">
                <button className="text-[#60A5FA] text-[14px] hover:text-[#93C5FD]">
                  Privacy Policy & Terms
                </button>
                <span className="text-[#6B7280]">•</span>
                <button className="text-[#60A5FA] text-[14px] hover:text-[#93C5FD]">
                  Site Credits
                </button>
              </div>
              <div className="text-[#9CA3AF] text-[14px]">
                © 2023 All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
