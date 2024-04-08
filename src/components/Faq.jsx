import React, { useState } from "react";
import INFO from "../assets/INFO.png";
import { FaTimes } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useRef } from "react";
import { useEffect } from "react";

const FAQ = () => {
  const initialOpenStates = [false, false, false, false];
  const [isOpen, setIsOpen] = useState(initialOpenStates);

  // The ref and styles remain the same
  const ref = useRef(null);
  const paragraphStyles = {
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };

  // Function to toggle individual section
  const toggleSection = (index) => {
    setIsOpen((currentState) =>
      currentState.map((state, i) => (i === index ? !state : state))
    );
  };
  return (
    <>
      {/*.....Faq......*/}

      <div
        className="w-full sm:mt-24  h-[672.94px] flex-col justify-start items-center inline-flex ml-8"
        id="faq"
      >
        <div className="flex-col justify-start items-center sm:gap-5 flex ">
          <div className="flex-col justify-start items-center sm:gap-[5px] flex">
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex sm:ml-64 ml-[90px]">
              <div className="w-[26px] h-[0px] bg-red-400 border-2 border-red-400"></div>
              <div className="text-red-400 text-lg font-medium font-['Inter'] leading-relaxed ">
                FAQ
              </div>
            </div>
            <div className="text-center">
              <span className="text-red-400 sm:text-5xl text-xl font-semibold font-['Be Vietnam Pro'] underline leading-[56px]">
                Frequently
              </span>
              <span className="text-zinc-900 sm:text-5xl text-xl sm:mr-0 mr-[140px] font-semibold font-['Be Vietnam Pro'] leading-[56px]">
                {" "}
                Asked Questions
              </span>
            </div>
          </div>
          <div className="self-stretch w-[230px] sm:ml-0 ml-5 sm:w-[1000px] text-center text-zinc-500 sm:text-base text-[10px] sm:font-normal font-['Be Vietnam Pro'] leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et <br /> velit interdum, ac aliquet odio mattis.
          </div>
        </div>
        <div className="relative sm:mt-0  mt-16 justify-center items-center  inline-flex pl-5">
          <div className="sm:w-[800px] h-[440px] w-[640px] sm:ml-0 ml-[230px] flex-col justify-start items-start sm:mt-0 mt-[300px] gap-10 inline-flex">
            {isOpen.map((open, index) => (
              <div
                key={index}
                style={open ? null : paragraphStyles}
                className="self-stretch sm:h-auto h-[280px] p-[25px] bg-zinc-100 rounded-[10px] flex-col justify-start items-start gap-5 flex"
                ref={ref}
              >
                <div className="self-stretch  justify-between items-center inline-flex">
                  <div className="text-neutral-800 text-base font-medium font-['Be Vietnam Pro'] leading-normal sm:mb-0 mb-[320px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <button onClick={() => toggleSection(index)}>
                    {open ? <FaTimes className="sm:mb-0 mb-[350px]" /> : <FaPlus className="sm:ml-[315px] ml-20 sm:mb-0 mb-[380px]" />}
                  </button>
                </div>
                {open && (
                  <div className="relative self-stretch text-zinc-500 text-base font-normal font-['Be Vietnam Pro'] leading-normal sm:bottom-0 bottom-[330px]">
                    Torem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate libero et velit interdum, ac aliquet odio
                    mattis. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos.
                  </div>
                )}
              </div>
            ))}
          </div>
          <img
            className="sm:w-[530px]  w-[330px] relative sm:bottom-0 bottom-[260px]   sm:self-stretch sm:px-10 sm:py-[70px] rounded-[10px] sm:mr-10 sm:right-0 right-[325px]"
            src={INFO}
          />
        </div>
      </div>
    </>
  );
};

export default FAQ;
