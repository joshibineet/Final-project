import React from "react";
import Banner from "../assets/Banner.png";
import Mobile from "../assets/Mobile.png";
import Google from "../assets/Google.png";
import Apple from "../assets/Apple.png";

const Section = () => {
  return (
    <section className="w-full ">
      <div className="relative">
        <img
          src={Banner}
          alt=""
          className="h-[789px] w-full inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div>
        <h1 className="absolute top-80 pl-20 text-white text-5xl tracking-wider">
          <span className="text-[#FF785A] underline leading-tight ">
            Experience
          </span>{" "}
          the Future of <br />
          Female Commerce <br />
          with <span className="text-[#FF785A] underline">Cnex</span>
        </h1>
        <p className="absolute top-[500px] pl-20 text-[#B6B8B9]">
          Order.Preorder.and Book - Your Ultimate Destination for Female
          Products and Services
        </p>
      </div>

      <div className="absolute flex top-[560px] pl-20 gap-5">
        <img src={Apple} alt="" />
        <img src={Google} alt="" />
      </div>

      {/*  wave deign in right side  */}
      <div className=" absolute h-[560px]  w-[620px] w -bottom-[118px] overflow-x-hidden -right-60 bg-[#082D4A] bg-opacity-45  rounded-tl-full"></div>

      <div className="absolute top-[270px] left-[1000px]  ">
        <div className="rounded-full p-2 ">
          <img src={Mobile} alt="" />
        </div>
      </div>
      <div className="hidden lg:inline-flex absolute w-[1294px] h-[136px] px-10 py-[30px] bg-sky-950 rounded-lg shadow justify-between items-center ml-20 top-[790px]">
    <div className="flex-col justify-center items-center gap-3">
        <div className="self-stretch text-center text-white text-[32px] font-semibold font-['Be Vietnam Pro'] leading-10">200+</div>
        <div className="self-stretch text-center text-white text-base font-normal font-['Be Vietnam Pro'] leading-normal">Clients Worldwide</div>
    </div>
    <div className="w-[152px] flex-col justify-center items-center gap-3">
        <div className="self-stretch text-center text-white text-[32px] font-semibold font-['Be Vietnam Pro'] leading-10">100+</div>
        <div className="self-stretch text-center text-white text-base font-normal font-['Be Vietnam Pro'] leading-normal">Client Satisfaction</div>
    </div>
    <div className="w-[152px] flex-col justify-center items-center gap-3">
        <div className="self-stretch text-center text-white text-[32px] font-semibold font-['Be Vietnam Pro'] leading-10">99K+</div>
        <div className="self-stretch text-center text-white text-base font-normal font-['Be Vietnam Pro'] leading-normal">Numbers of Sales</div>
    </div>
    <div className="w-[152px] flex-col justify-center items-center gap-3">
        <div className="text-center text-white text-[32px] font-semibold font-['Be Vietnam Pro']">24H</div>
        <div className="text-center text-white text-base font-normal font-['Inter'] leading-normal">Team Support</div>
    </div>
</div>

        
    </section>
  );
};

export default Section;
