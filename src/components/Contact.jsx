import React from "react";
import Apple from "../assets/Apple.png";
import Google from "../assets/Google.png";
import CTA from "../assets/cta.png";

const Contact = () => {
  return (
    <>
      {/*.....Cta section........*/}
      <div className="relative w-full h-[555px] py-[120px] mt-28 bg-black flex justify-center items-center">
        <img
          src={CTA}
          className="absolute top-0 left-0 h-full w-full opacity-50 z-0"
          alt="cta"
        />
        <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-60 z-10"></div>{" "}
        {/* Dark overlay */}
        <div className="z-20 flex flex-col justify-center items-center h-full w-full">
          <div className="flex flex-col justify-start items-center gap-6">
            <div className="flex flex-col justify-start items-center gap-3.5">
              <div className="self-stretch text-center">
                <span className="font-be-vietnam-pro text-white text-5xl font-medium leading-[56px]">
                  Join the{" "}
                </span>
                <span
                  className="font-be-vietnam-pro text-[#FF785A] text-5xl font-medium underline leading-[56px]"
                >
                  CNEX Community
                </span>
                <span className="font-be-vietnam-pro text-white text-5xl font-medium leading-[56px]">
                  {" "}
                  <br /> Today!
                </span>
              </div>
              <div className="w-[608px] text-center text-stone-300 text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                Download CNEX now to explore a world of female-centric products
                and services, and empower yourself with every purchase and
                booking.
              </div>
            </div>
            <div className="flex justify-start items-center gap-[14.28px]">
              <img
                className="w-[171.36px] h-[50.81px]"
                src={Apple}
                alt="Download from Apple Store"
              />
              <img
                className="w-[171.36px] h-[50.38px]"
                src={Google}
                alt="Download from Google Play"
              />
            </div>
          </div>
        </div>
      </div>

      {/*....contact....*/}

      <div className="w-[1440px] h-[861px] bg-white flex-col justify-center items-center inline-flex">
        <div className="h-[621px] bg-white flex-col justify-center items-center flex">
          <div className="bg-white flex-col justify-start items-center gap-[60px] flex">
            <div className="h-[136px] flex-col justify-start items-center gap-4 flex">
              <div className="self-stretch justify-start items-center gap-2.5 inline-flex ml-40">
                <div className="w-[26px] h-[0px] bg-[#FF785A] border-2 border-[#FF785A]"></div>
                <div className="text-[#FF785A] text-base font-medium font-['Be_Vietnam_Pro'] leading-normal">
                  Reach Out to Us
                </div>
              </div>
              <div className="self-stretch text-center">
                <span className="text-[#FF785A] text-5xl font-medium font-['Be_Vietnam_Pro'] underline leading-[56px]">
                  Connect
                </span>
                <span className="text-zinc-900 text-5xl font-medium font-['Be_Vietnam_Pro'] leading-[56px]">
                  {" "}
                  with Us
                </span>
              </div>
              <div className="self-stretch text-zinc-400 text-base font-normal font-['Be_Vietnam_Pro'] leading-normal">
                Fill out the form below, and we'll get back to you as soon as
                possible.
              </div>
            </div>
            <div className="px-[52px] bg-white flex-col justify-start items-start gap-[60px] flex">
              <div className="flex-col justify-start items-start gap-6 flex">
                <div className="justify-start items-center gap-32 inline-flex">
                  <div className="w-[392px] flex-col justify-start items-start gap-6 inline-flex">
                    <div className="self-stretch text-black text-2xl font-medium font-['Be_Vietnam_Pro'] leading-loose">
                      Name
                    </div>
                    <div className="flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch text-zinc-500 text-base font-normal font-['Be_Vietnam_Pro'] leading-normal">
                        <input
                          type="text"
                          className="w-[392px] border-none focus:outline-none"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="w-[392px] h-px bg-zinc-400"></div>
                    </div>
                  </div>
                  <div className="w-[392px] flex-col justify-start items-start gap-6 inline-flex">
                    <div className="self-stretch text-zinc-900 text-2xl font-medium font-['Be_Vietnam_Pro'] leading-loose">
                      Email
                    </div>
                    <div className="h-[33px] flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch text-zinc-500 text-base font-normal font-['Be_Vietnam_Pro'] leading-normal">
                        <input
                          type="text"
                          className="w-[392px] border-none focus:outline-none"
                          placeholder="Your Email"
                        />
                      </div>
                      <div className="w-[392px] h-px bg-zinc-400"></div>
                    </div>
                  </div>
                </div>
                <div className="justify-start items-center gap-32 inline-flex">
                  <div className="w-[392px] flex-col justify-start items-start gap-6 inline-flex">
                    <div className="self-stretch text-zinc-900 text-2xl font-medium font-['Be_Vietnam_Pro'] leading-loose">
                      Phone number
                    </div>
                    <div className="flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch text-zinc-500 text-base font-normal font-['Be_Vietnam_Pro'] leading-normal">
                        <input
                          type="text"
                          className="w-[392px] border-none focus:outline-none"
                          placeholder="Your Phone Number"
                        />
                      </div>
                      <div className="w-[392px] h-px bg-zinc-400"></div>
                    </div>
                  </div>
                  <div className="w-[392px] flex-col justify-start items-start gap-6 inline-flex">
                    <div className="self-stretch text-zinc-900 text-2xl font-medium font-['Be_Vietnam_Pro'] leading-loose">
                      Subject
                    </div>
                    <div className="flex-col justify-start items-start gap-2 flex">
                      <div className="self-stretch text-zinc-500 text-base font-normal font-['Be_Vietnam_Pro'] leading-normal">
                        <input
                          type="text"
                          className="w-[392px] border-none focus:outline-none"
                          placeholder="service name"
                        />
                      </div>
                      <div className="w-[392px] h-px bg-zinc-400"></div>
                    </div>
                  </div>
                </div>
                <div className="h-[89px] flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch text-zinc-900 text-2xl font-medium font-['Be_Vietnam_Pro'] leading-loose">
                    Message
                  </div>
                  <div className="flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch text-zinc-500 text-base font-normal font-['Be_Vietnam_Pro'] leading-normal">
                      <input
                        type="text"
                        className="w-[392px] border-none focus:outline-none"
                        placeholder=" Kindly explain your needed service you are interested
                      in..."
                      />
                    </div>
                    <div className="w-[912px] h-px bg-zinc-400"></div>
                  </div>
                </div>
              </div>
              <div className="px-6 py-[13px] bg-sky-950 rounded-lg justify-center items-center gap-1 inline-flex hover:bg-red-400 cursor-pointer ">
                <div className="text-white text-base font-medium font-['Be_Vietnam_Pro'] leading-normal ">
                  Get in touch
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
