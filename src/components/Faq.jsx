import React from "react";
import INFO from "../assets/INFO.png";
import { FaTimes } from "react-icons/fa";

const FAQ = () => {
  return (
    <>         
                       {/*.....Faq......*/}

      <div className="w-full mt-24 h-[672.94px] flex-col justify-start items-center inline-flex ml-3">
        <div className="flex-col justify-start items-center gap-5 flex">
          <div className="flex-col justify-start items-center gap-[5px] flex">
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex ml-64">
              <div className="w-[26px] h-[0px] bg-red-400 border-2 border-red-400"></div>
              <div className="text-red-400 text-lg font-medium font-['Inter'] leading-relaxed ">
                FAQ
              </div>
            </div>
            <div className="text-center">
              <span className="text-red-400 text-5xl font-semibold font-['Be Vietnam Pro'] underline leading-[56px]">
                Frequently
              </span>
              <span className="text-zinc-900 text-5xl font-semibold font-['Be Vietnam Pro'] leading-[56px]">
                {" "}
                Asked Questions
              </span>
            </div>
          </div>
          <div className="self-stretch text-center text-zinc-500 text-base font-normal font-['Be Vietnam Pro'] leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et <br /> velit interdum, ac aliquet odio mattis.{" "}
          </div>
        </div>
        <div className="justify-center items-center gap-10 inline-flex pl-5">
          <div className="w-[800px] flex-col justify-start items-start gap-5 inline-flex">
            <div className="self-stretch h-[175.94px] p-[25px] bg-zinc-100 rounded-[10px] flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-neutral-800 text-base font-medium font-['Be Vietnam Pro'] leading-normal">
                  Gorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div>
                  <FaTimes />
                </div>
              </div>
              <div className="self-stretch text-zinc-500 text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </div>
            </div>
            <div className="self-stretch h-[74px] p-[25px] bg-zinc-100 rounded-[10px] flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-zinc-900 text-base font-medium font-['Be Vietnam Pro'] leading-normal">
                  Norem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="w-6 h-6 relative origin-top-left -rotate-45">
                  <FaTimes />
                </div>
              </div>
            </div>
            <div className="self-stretch h-[74px] p-[25px] bg-zinc-100 rounded-[10px] flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-zinc-900 text-base font-medium font-['Be Vietnam Pro'] leading-normal">
                  Norem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="w-6 h-6 relative origin-top-left -rotate-45">
                  <FaTimes />
                </div>
              </div>
            </div>
            <div className="self-stretch h-[74px] p-[25px] bg-zinc-100 rounded-[10px] flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="text-neutral-700 text-base font-medium font-['Be Vietnam Pro'] leading-normal">
                  Norem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="w-6 h-6 relative origin-top-left -rotate-45">
                  <FaTimes />
                </div>
              </div>
            </div>
          </div>
          <img
            className="w-[535px] self-stretch px-10 py-[70px] rounded-[10px]"
            src={INFO}
          />
        </div>
      </div>
    </>
  );
};

export default FAQ;
