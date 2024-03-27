import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-[1440px] h-[861px] mt-24 bg-white flex-col justify-center items-center inline-flex">
        <div className="h-[621px] bg-white flex-col justify-center items-center flex">
          <div className="bg-white flex-col justify-start items-center gap-[60px] flex">
            <div className="h-[136px] flex-col justify-start items-center gap-4 flex">
              <div className="self-stretch justify-start items-center gap-2.5 inline-flex ml-40">
                <div className="w-[26px] h-[0px] bg-red-400 border-2 border-red-400"></div>
                <div className="text-red-400 text-base font-medium font-['Be_Vietnam_Pro'] leading-normal">
                  Reach Out to Us
                </div>
              </div>
              <div className="self-stretch text-center">
                <span className="text-red-400 text-5xl font-medium font-['Be_Vietnam_Pro'] underline leading-[56px]">
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
                      <input type="text" className="w-[392px] border-none focus:outline-none" placeholder="Your Name"/>
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
                      <input type="text" className="w-[392px] border-none focus:outline-none" placeholder="Your Email"/>
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
                      <input type="text" className="w-[392px] border-none focus:outline-none" placeholder="Your Phone Number"/>
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
                      <input type="text" className="w-[392px] border-none focus:outline-none" placeholder="service name"/>
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
                    <input type="text" className="w-[392px] border-none focus:outline-none" placeholder=" Kindly explain your needed service you are interested
                      in..."/>
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
