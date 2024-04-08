import React from "react";
import logo from "../assets/footerlogo.png";
import Apple from "../assets/Apple.png";
import Google from "../assets/Google.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import vrit from "../assets/vrit.png";

const Footer = () => {
  return (
    <>
      <div className="w-full py-8 bg-sky-950 flex flex-col justify-center items-center sm:h-[532px] sm:py-[120px]">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-10 sm:self-stretch sm:h-[292px]">
            <div className="flex flex-col sm:flex-row justify-between items-center w-full px-4 sm:px-0 sm:w-[1223px]">
              <div className="flex flex-col justify-start items-center gap-3">
                <img src={logo} alt="" className="w-40 sm:bottom-20 sm:mr-0 mr-[170px] relative sm:w-[165.81px] text-white" />
              </div>
              <div className="flex flex-col justify-start items-center  gap-6 sm:items-start ">
                <div className="flex flex-col justify-start items-center gap-4 ">
                  <div className="text-center sm:mr-16 sm:mt-0 mt-5  relative text-white text-lg sm:text-[22px] mr-[230px]  font-medium font-['Be Vietnam Pro'] leading-7">
                    Contact us
                  </div>
                  <div className="flex flex-col justify-start items-center  gap-2 sm:items-start">
                    <div className="text-center sm:mr-0 mr-[230px] text-white text-base font-medium font-['Be Vietnam Pro'] leading-normal">
                      Head office:
                    </div>
                    <div className="flex flex-col justify-start items-center gap-1 sm:items-start">
                      <div className="text-center sm:mr-0 mr-[145px] text-white text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                        Sankhamul, Baneshwor
                      </div>
                      <div className="text-center text-white text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                        <span className="inline sm:mr-0 mr-[240px] whitespace-nowrap">+977 9..........</span>
                      </div>
                    </div>
                    <div className="text-center sm:mr-0 mr-[185px] text-white text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                      cnex@gmail.com
                    </div>
                  </div>
                </div>
                <div className="flex justify-center sm:justify-start sm:mr-0 mr-[210px] items-center gap-4">
                  <div className="w-6 h-6 relative">
                    <div className="absolute inset-0 bg-red-400 rounded-full">
                      <FaFacebookF className="text-white m-1" />
                    </div>
                  </div>
                  <div className="w-6 h-6 relative">
                    <div className="absolute inset-0 bg-red-400 rounded-full">
                      <FaInstagram className="text-white m-1" />
                    </div>
                  </div>
                  <div className="w-6 h-6 relative">
                    <div className="absolute inset-0 bg-red-400 rounded-full">
                      <CiTwitter className="text-white m-[2px] text-[20px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center sm:mr-0 mr-[240px] sm:mt-0 mt-4 items-center gap-4 sm:gap-3 sm:items-start">
                <div className="text-center text-white text-lg sm:text-[22px] font-medium font-['Be Vietnam Pro'] leading-7">
                  Services
                </div>
                <div className="flex flex-col justify-start items-center gap-2 mb-[52px] sm:items-start">
                  <div className="text-center sm:ml-0 ml-[75px] w-[150px] text-white text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                    Order and Pre-order
                  </div>
                  <div className="text-center text-white sm:ml-0 ml-[200px] w-[400px] text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                    Beauty service Appointment Booking
                  </div>
                  <div className="text-center sm:ml-0 ml-[75px] text-white text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                    Order and Pre-order
                  </div>
                  <div className="text-center sm:ml-0 ml-[75px] text-white text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                    Order and Pre-order
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 sm:gap-[14.28px]">
                <div className="text-center sm:mr-0 mr-[150px] text-white text-lg sm:text-[22px] font-medium font-['Be Vietnam Pro'] leading-7">
                  Download our App
                </div>
                <img className="w-48 sm:mr-0 mr-[120px] h-auto" src={Apple} alt="Download on the App Store" />
                <img className="w-48 sm:mr-0 mr-[120px] h-auto mb-12" src={Google} alt="Get it on Google Play" />
              </div>
            </div>
            <div className="flex flex-col justify-start items-center gap-6 w-full px-4 sm:px-0">
              <div className="w-full border-t border-gray-300"></div>
              <div className="text-center text-gray-300 text-sm font-normal font-['Be Vietnam Pro']">
                Copyright © 2024 Cnex. All rights reserved. Powered by: <img src={vrit} alt="" className="inline ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
