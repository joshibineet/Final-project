import React from "react";
import logo from "../assets/footerlogo.png";
import Apple from "../assets/Apple.png";
import Google from "../assets/Google.png";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[532px] py-[120px] bg-sky-950 flex-col justify-center items-center inline-flex">
        <div className="flex-col justify-center items-start flex">
          <div className="self-stretch h-[292px] flex-col justify-center items-start gap-10 flex">
            <div className="w-[1223px] justify-between items-start inline-flex">
              <div className="h-[60px] flex-col justify-start items-center gap-3 inline-flex">
                <div className="w-[165.81px] flex-col justify-between items-center flex">
                  <img src={logo} alt="" className="text-white" />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-6 inline-flex">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="text-center text-white text-[22px] font-medium font-['Be Vietnam Pro'] leading-7">
                    Contact us
                  </div>
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="text-center text-white text-base font-medium font-['Be Vietnam Pro'] leading-normal">
                      Head office:
                    </div>
                    <div className="flex-col justify-start items-start gap-1 flex">
                      <div className="text-center text-white text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                        Sankhamul, Baneshwor
                      </div>
                      <div className="text-center text-white text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                        <span className="inline whitespace-nowrap">+977 98..........</span>
                      </div>
                    </div>
                    <div className="text-center text-white text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                      cnex@gmail.com
                    </div>
                  </div>
                </div>
                <div className="w-[169px] justify-start items-start gap-4 inline-flex">
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute bg-red-400 rounded-[7.09px]"></div>
                  </div>
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute bg-red-400 rounded-[7.09px]"></div>
                  </div>
                  <div className="w-6 h-6 relative">
                    <div className="w-6 h-6 left-0 top-0 absolute bg-red-400 rounded-[7.09px]"></div>
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-3.5 inline-flex">
                <div className="text-center text-white text-[22px] font-medium font-['Be Vietnam Pro'] leading-7">
                  Services{" "}
                </div>
                <div className="flex-col justify-start items-start gap-1 flex">
                  <div className="text-center text-white text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                    Order and Pre-order
                  </div>
                  <div className="text-center text-white text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                    Beauty service Appointment Booking
                  </div>
                  <div className="text-center text-white text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                    Order and Pre-order
                  </div>
                  <div className="text-center text-white text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                    Order and Pre-order
                  </div>
                </div>
              </div>
              <div className="flex-col justify-center items-start gap-[14.28px] inline-flex">
                <div className="text-center text-white text-[22px] font-medium font-['Be Vietnam Pro'] leading-7">
                  Download our App
                </div>
                <div className="flex-col justify-center items-start gap-4 flex">
                  <img className="w-[196px] h-[58.11px]" src={Apple} />
                  <img className="w-[196px] h-[57.62px]" src={Google} />
                </div>
              </div>
            </div>
            <div className="self-stretch h-11 flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch h-[0px] border border-gray-300"></div>
              <div className="self-stretch justify-center items-start inline-flex">
                <div className="text-center text-gray-300 text-sm font-normal font-['Be Vietnam Pro'] leading-tight">
                  Copyright © 2024 Cnex. All rights reserved. Powered by: JB{" "}
                </div>
                <div className="w-[58.33px] h-5 relative">
                  {/* <img className="w-[58.33px] h-5 left-0 top-0 absolute" src="https://via.placeholder.com/58x20" /> */}
                  {/* <div className="w-[58.33px] h-5 left-0 top-0 absolute bg-gray-300">JB</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
