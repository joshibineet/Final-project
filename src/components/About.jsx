import React from "react";
import first from "../assets/About/Image.png";
import second from "../assets/About/Image1.png";
import Third from "../assets/About/Image2.png";
import fourth from "../assets/About/Image3.png";
import fifth from "../assets/About/Image4.png";
import sixth from "../assets/About/Image5.png";
import seventh from "../assets/About/Image6.png";
import eight from "../assets/About/Image7.png";
import Leftside from "../assets/Leftside.png";
import fast from "../assets/logo/fast.png";
import easy from "../assets/logo/easy.png";
import legal from "../assets/logo/legal.png";
import affordable from "../assets/logo/affordable.png";
import Booking from "../assets/logo/Booking.png";
import delivery from "../assets/logo/delivery.png";
import filter from "../assets/logo/filter.png";
import order from "../assets/logo/order.png";
import payment from "../assets/logo/payment.png";
import search from "../assets/logo/search.png";

const About = () => {
  return (
    <>
      <div className="max-w-full sm:w-[full] sm:h-[1000px] flex-col justify-center items-center gap-10 sm:gap-[60px] mt-8 sm:mt-32 px-4 sm:px-24 sm:pr-[150px]">
        <div className="h-auto sm:h-40 flex-col justify-start items-center gap-4 sm:gap-6 flex">
          <div className="flex items-center gap-2">
            <div className="w-3.5 sm:w-7 h-0 sm:h-0 border border-[#FF785A]"></div>
            <div className="text-[#FF785A] text-sm sm:text-base font-normal font-[Be Vietnam Pro] leading-tight sm:leading-normal mr-4 sm:mr-10">
              ABOUT US
            </div>
          </div>
          <div className="text-center">
            <span className="text-[#FF785A] text-lg sm:text-5xl font-semibold font-[Be Vietnam Pro] underline leading-tight sm:leading-[56px]">
              Pioneering Female
            </span>
            <span className="text-zinc-900 text-lg sm:text-5xl font-semibold font-[Be Vietnam Pro] leading-tight sm:leading-[56px]">
              -Centric Solutions <br /> for the Modern Woman
            </span>
          </div>
        </div>

        {/* For large devices */}
        <div className="hidden absolute sm:flex  gap-8 mt-20 ">
          <div className="flex flex-row sm:flex sm:flex-col sm:justify-start sm:items-start sm:gap-6">
            <img className="w-80 h-[320px] rounded-2xl" src={first} />
            <img className="w-80 h-[320px] rounded-2xl" src={second} />
          </div>
          <div className="flex flex-col justify-start items-start gap-6">
            <div className="flex justify-start items-start gap-6">
              <img className="w-80 h-[320px] rounded-2xl" src={Third} />
              <img className="w-80  h-[320px] rounded-2xl" src={fourth} />
            </div>
            <img className="w-[660px] h-[320px] rounded-2xl " src={fifth} />
          </div>
          <div className="flex flex-col gap-[13px]  ">
            <img className="w-72 h-[212px] rounded-2xl" src={sixth} />
            <img className="w-72 h-[212px] rounded-2xl" src={seventh} />
            <img className="w-73 h-[212px] rounded-2xl" src={eight} />
          </div>
        </div>

        {/* For small devices */}
        <div className=" sm:hidden flex flex-col gap-8 mt-4 ml-11">
          <div className="w-96 flex-col justify-start items-start gap-[12.80px] flex">
            <div className="justify-start items-start gap-[12.79px] inline-flex">
              <div className="flex-col justify-start items-start gap-[12.80px] inline-flex">
                <div className="w-[153.60px] h-[157.87px] flex-col justify-center items-center flex">
                  <img
                    className="w-[153.60px] h-[157.87px] rounded-lg"
                    src={first}
                  />
                </div>
                <div className="w-[153.60px] h-[187.73px] flex-col justify-center items-center flex">
                  <img
                    className="w-[153.60px] h-[187.73px] rounded-lg"
                    src={second}
                  />
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-[12.80px] inline-flex">
                <div className="w-[153.60px] h-[110.93px] justify-center items-center inline-flex">
                  <img
                    className="w-[153.60px] h-[110.93px] rounded-lg"
                    src={sixth}
                  />
                </div>
                <div className="w-[153.60px] h-[110.93px] justify-center items-center inline-flex">
                  <img
                    className="w-[153.60px] h-[110.93px] rounded-lg"
                    src={eight}
                  />
                </div>
                <div className="w-[153.60px] h-[110.93px] justify-center items-center inline-flex">
                  <img
                    className="w-[153.60px] h-[110.93px] rounded-lg"
                    src={seventh}
                  />
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[12.80px] flex">
              <div className="justify-start items-start gap-[12.80px] inline-flex">
                <div className="w-[153.60px] h-[157.87px] flex-col justify-center items-center inline-flex">
                  <img
                    className="w-[153.60px] h-[157.87px] rounded-lg"
                    src={Third}
                  />
                </div>
                <div className="w-[153.60px] h-[157.87px] flex-col justify-center items-center inline-flex">
                  <img
                    className="w-[153.60px] h-[157.87px] rounded-lg"
                    src={fourth}
                  />
                </div>
              </div>
              <div className="w-80 h-[187.73px] justify-center items-center inline-flex">
                <img className="w-80 h-[187.73px] rounded-lg" src={fifth} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*....Our story.....*/}

      <div className="absolute  sm:w-full h-20 sm:h-[738px] sm:mt-[10px] pr-[10px] mt-[1400px] pb-[120px] bg-white flex-col justify-center items-center inline-flex top-[450px] sm:top-[1880px] pl-12 ">
        <div className="h-[558px] flex-col justify-center items-center flex">
          <div className="self-stretch h-[558px] flex-col justify-start items-start gap-[30px] flex">
            <div className="self-stretch text-center hidden sm:flex gap-4 justify-center ">
              <span className="text-zinc-900 text-5xl font-semibold font-[Be Vietnam Pro] leading-[56px]">
                Our{" "}
              </span>
              <span className="text-[#FF785A] text-5xl font-semibold font-[Be Vietnam Pro] underline leading-[56px]">
                Story
              </span>
            </div>
            <div className="self-stretch justify-start sm:items-start sm:gap-6 sm:inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-6 inline-flex ml-8">
                <img
                  className="w-[496px] grow shrink basis-0 p-2.5 hidden sm:flex rounded-2xl"
                  src={Leftside}
                />
              </div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex mr-20 ">
                <div className="self-stretch h-[398px] flex-col justify-start items-start  gap-7 flex mt-2">
                  <div class="hidden sm:flex self-stretch text-zinc-900 text-base font-semibold font-['Be Vietnam Pro']  leading-normal tracking-wider">
                    At the beginning, it was just the two of them, working out
                    of a small office space. They were determined to provide
                    personalized service to their clients and build lasting
                    relationships. They worked tirelessly, often working long
                    hours and weekends to ensure that their clients' needs were
                    met.
                  </div>
                  <div className="sm:hidden  sm:h-[100px] text-zinc-900 text-base font-['Be Vietnam Pro'] leading-normal text-start  mt-44 sm:mt-0 sm:w-full w-[360px]   sm:tracking-wider  pl-4  tracking-wide">
                    At the beginning, it was just the two of them, working out
                    of a small office space. They were determined to provide
                    personalized service to their clients and build lasting
                    relationships. They worked tirelessly, often working long
                    hours and weekends to ensure that their clients' needs were
                    met.
                  </div>

                  <div className="self-stretch text-zinc-900 hidden sm:flex text-base font-semibold font-['Be Vietnam Pro'] leading-normal tracking-wider">
                    Their hard work paid off, and soon their business began to
                    grow. They hired additional staff members and expanded their
                    service offerings to include property management and real
                    estate investments
                  </div>
                  <div className="self-stretch text-zinc-900 hidden sm:flex text-base font-semibold font-['Be Vietnam Pro'] leading-normal tracking-wider">
                    Over the years, their business has continued to grow, and
                    they have helped countless clients buy, sell, and manage
                    their real estate investments. Today, their business is a
                    respected name in the real estate industry, known for its
                    exceptional service and commitment to its clients.
                  </div>
                  <div className="self-stretch text-zinc-900 hidden sm:flex text-base font-semibold font-['Be Vietnam Pro'] leading-normal tracking-wider">
                    As they look to the future, John and Jane remain dedicated
                    to their clients and to providing the best possible service
                    in the real estate industry. They are excited to continue to
                    grow and evolve their business, and to help even more
                    clients achieve their real estate goals.
                  </div>
                </div>
                <div className="sm:mb-3 w-36 h-[50px] sm:px-6 sm:py-[13px]  bg-sky-950 rounded-lg justify-center items-center gap-2.5 inline-flex hover:bg-[#FF785A] cursor-pointer">
                  <div className=" text-white text-base font-medium font-['Be Vietnam Pro'] leading-normal">
                    Get in touch
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*........why cnex....... */}

      <div className="w-full h-auto mt-[740px] pb-[60px] bg-sky-950 flex-col justify-center items-center inline-flex">
        <div className="flex-col justify-center items-center flex">
          <div className="flex-col justify-start items-center gap-[60px] flex">
            <div className="text-center mt-16">
              <span className="text-white text-5xl font-semibold font-['Be Vietnam Pro'] leading-[56px]">
                Why{" "}
              </span>
              <span className="text-[#FF785A] text-5xl font-semibold font-['Be Vietnam Pro'] underline leading-[56px]">
                Cnex ?{" "}
              </span>
            </div>
            <div className="grid grid-cols-4  gap-8 pb-[60px] bg-sky-950 justify-center items-center px-[90px]">
              <div className="bg-[#062237] rounded-lg flex flex-col justify-start items-center p-[25px] h-72">
                <div className="text-center text-white font-medium font-['Be Vietnam Pro'] text-2xl leading-[60px]">
                  <img src={fast} alt="" className="ml-2" />
                  Fast
                </div>
                <div className="text-center text-stone-300 font-normal font-['Be Vietnam Pro'] text-base leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.Pariatur ducimus itaque modi dolores consectetur
                  suscipit.
                </div>
              </div>
              <div className="bg-[#062237] rounded-lg flex flex-col justify-start items-center p-[25px] h-72">
                <div className="text-center text-white font-normal font-['Be Vietnam Pro'] text-2xl leading-[60px]">
                  <img src={easy} alt="" />
                  Easy
                </div>
                <div className="text-center text-stone-300 font-normal font-['Be Vietnam Pro'] text-base leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.Pariatur ducimus itaque modi dolores consectetur
                  suscipit.
                </div>
              </div>
              <div className="bg-[#062237] rounded-lg flex flex-col justify-start items-center p-[25px] h-72">
                <div className="text-center text-white font-medium font-['Be Vietnam Pro'] text-2xl leading-[60px]">
                  <img src={affordable} alt="" className="ml-9" />
                  Affordable
                </div>
                <div className="text-center text-stone-300 font-normal font-['Be Vietnam Pro'] text-base leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.Pariatur ducimus itaque modi dolores consectetur
                  suscipit.
                </div>
              </div>
              <div className="bg-[#062237] rounded-lg flex flex-col justify-start items-center p-[25px] h-72">
                <div className="text-center text-white font-normal font-['Be Vietnam Pro'] text-2xl leading-[60px]">
                  <img src={legal} alt="" className="ml-14" />
                  Legal Support
                </div>
                <div className="text-center text-stone-300 font-normal font-['Be Vietnam Pro'] text-base leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.Pariatur ducimus itaque modi dolores consectetur
                  suscipit.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*.........Experience the difference........*/}

        <div className=" flex-col  justify-start items-center gap-[60px] inline-flex">
          <div className="flex-col justify-start items-center gap-6 flex">
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex mt-12 ml-40">
              <div className="w-[26px] h-[0px] border-2 border-[#FF785A] "></div>
              <div className="text-[#FF785A] text-base font-normal font-['Be Vietnam Pro'] leading-normal ">
                FEATURE HIGHLIGHTS{" "}
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-4 flex">
              <div>
                <span className="text-[#FF785A] text-5xl font-semibold font-['Be Vietnam Pro'] underline leading-[56px]">
                  Experience
                </span>
                <span className="text-white text-5xl font-semibold font-['Be Vietnam Pro'] leading-[56px]">
                  {" "}
                  the Difference
                </span>
              </div>
              <div className="text-zinc-500 text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                Discover a World of Female-Centric Products and Services
              </div>
            </div>
          </div>
          <div className="flex  flex-wrap justify-center items-center gap-[40px]">
            <div className="w-[420px] h-[300px] p-10 bg-[#062237] rounded-lg flex-col justify-center items-center  inline-flex">
              <div className="w-10 h-10 relative"></div>
              <img src={Booking} alt="" className="mb-10" />

              <div className="h-[130px] flex-col justify-start items-center gap-4 flex">
                <div className="self-stretch text-center text-white text-2xl font-medium font-['Be Vietnam Pro'] leading-loose">
                  Booking Appointments
                </div>
                <div className="self-stretch text-center text-stone-300 text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                  Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </div>
              </div>
            </div>
            <div className="w-[420px] h-[300px] p-10 bg-[#062237] rounded-lg flex-col justify-center items-center inline-flex">
              <div className="w-10 h-10 relative"></div>
              <img src={order} alt="" className="mb-10" />
              <div className="h-[130px] flex-col justify-start items-center gap-4 flex">
                <div className="self-stretch text-center text-white text-2xl font-medium font-['Be Vietnam Pro'] leading-loose">
                  Ordering and Pre-ordering
                </div>
                <div className="self-stretch text-center text-stone-300 text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                  Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </div>
              </div>
            </div>
            <div className="w-[420px] h-[300px] p-10 bg-[#062237] rounded-lg flex-col justify-center items-center  inline-flex">
              <div className="w-10 h-10 relative"></div>
              <img src={search} alt="" className="mb-10" />
              <div className="h-[130px] flex-col justify-start items-center gap-4 flex">
                <div className="self-stretch text-center text-white text-2xl font-medium font-['Be Vietnam Pro'] leading-loose">
                  Searching for Product
                </div>
                <div className="self-stretch text-center text-stone-300 text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                  Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </div>
              </div>
            </div>
            <div className="w-[420px] h-[300px] p-10 bg-[#062237] rounded-lg flex-col justify-center items-center  inline-flex">
              <div className="w-10 h-10 relative"></div>
              <img src={filter} alt="" className="mb-10" />
              <div className="h-[130px] flex-col justify-start items-center gap-4 flex">
                <div className="self-stretch text-center text-white text-2xl font-medium font-['Be Vietnam Pro'] leading-loose">
                  Filtering products
                </div>
                <div className="self-stretch text-center text-stone-300 text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                  Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </div>
              </div>
            </div>
            <div className="w-[420px] h-[300px] p-10 bg-[#062237] rounded-lg flex-col justify-center items-center  inline-flex">
              <div className="w-10 h-10 relative"></div>
              <img src={delivery} alt="" className="mb-10" />
              <div className="h-[130px] flex-col justify-start items-center gap-4 flex">
                <div className="self-stretch text-center text-white text-2xl font-medium font-['Be Vietnam Pro'] leading-loose">
                  Delivery Service
                </div>
                <div className="self-stretch text-center text-stone-300 text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                  Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </div>
              </div>
            </div>
            <div className="w-[420px] h-[300px] p-10 bg-[#062237] rounded-lg flex-col justify-center items-center  inline-flex">
              <div className="w-10 h-10 relative"></div>
              <img src={payment} alt="" className="mb-10" />
              <div className="h-[130px] flex-col justify-start items-center gap-4 flex">
                <div className="self-stretch text-center text-white text-2xl font-medium font-['Be Vietnam Pro'] leading-loose">
                  Payments
                </div>
                <div className="self-stretch text-center text-stone-300 text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                  Dorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
