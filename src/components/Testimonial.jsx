import React from "react";
import Testi1 from "../assets/Testi1.png";
import Testi2 from "../assets/Testi2.png";
import Testilogo from "../assets/Testilogo.png";

const Testimonial = () => {
  return (
    <>
      <div className="w-[1440px] h-[719px] pt-[120px] pb-[60px] bg-white flex-col justify-center items-center inline-flex">
        <div className="h-[539px] flex-col justify-center items-center flex">
          <div className="flex-col justify-center items-center gap-[60px] flex">
            <div className="flex-col justify-start items-start gap-[30px] flex">
              <div className="justify-start items-end gap-[111px] inline-flex">
                <div className="w-[998px] flex-col justify-start items-start gap-4 inline-flex">
                  <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
                    <div className="w-[26px] h-[0px] bg-red-400 border-2 border-red-400"></div>
                    <div className="text-red-400 text-lg font-medium font-['Inter'] leading-relaxed">
                      TESTIMONIAL
                    </div>
                  </div>
                  <div className="w-[748px]">
                    <span className="text-zinc-900 text-5xl font-medium font-['Be Vietnam Pro'] leading-[56px]">
                      What our{" "}
                    </span>
                    <span className="text-red-400 text-5xl font-medium font-['Be Vietnam Pro'] underline leading-[56px]">
                      Customers say
                    </span>
                  </div>
                </div>
                <div className="justify-center items-center gap-[15px] flex">
                  <div className="w-[50px] h-[50px] p-2.5 origin-top-left -rotate-180 bg-white rounded-[25px] shadow justify-center items-center flex">
                    <div className="w-3.5 h-3.5 relative"></div>
                  </div>
                  <div className="w-[50px] h-[50px] p-2.5 bg-white rounded-[25px] shadow justify-center items-center flex">
                    <div className="w-3.5 h-3.5 relative"></div>
                  </div>
                </div>
              </div>
              <div className="w-[1224px] h-[0px] border border-zinc-300"></div>
            </div>
            <div className="self-stretch h-[351px] flex-col justify-start items-start gap-[129px] flex">
              <div className="justify-center items-start gap-[129px] inline-flex">
                <div className="flex-col justify-center items-center inline-flex">
                  <img
                    className="w-[496px] h-[351px] relative"
                    src={Testi1}
                  />
                  <div className="p-[30px] bg-white shadow flex-col justify-center items-center flex">
                    <div className="self-stretch justify-start items-start gap-3 inline-flex">
                      <div className="w-[50px] h-[50px] relative">
                        <div className="w-[50px] h-[50px] left-0 top-0 absolute bg-zinc-300 rounded-full"></div>
                        <div className="w-[50px] h-[50px] left-0 top-0 absolute bg-red-400 rounded-full"></div>
                        <img
                          className="w-[38px] h-[45px] left-[5.52px] top-[5.01px] absolute"
                          src={Testilogo}
                        />
                      </div>
                      <div className="flex-col justify-start items-start gap-5 inline-flex">
                        <div className="flex-col justify-start items-start gap-[5.71px] flex">
                          <div className="w-[220.58px] text-zinc-900 text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                            “They did an amazing work for our home”
                          </div>
                          <div className="w-[220.58px] text-slate-600 text-xs font-normal font-['Be Vietnam Pro'] leading-[18px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum efficitur justo vitae sapien
                          </div>
                        </div>
                        <div className="w-[220.58px] justify-start items-center gap-[7px] inline-flex">
                          <div className="w-[25.13px] h-[0px] border border-red-400"></div>
                          <div className="text-red-400 text-xs font-normal font-['Be Vietnam Pro'] leading-[18px]">
                            JOHN CARTER, NEW YORK
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-col justify-center items-center inline-flex">
                  <div className="w-[495px] h-[351px] justify-center items-center inline-flex">
                    <img
                      className="w-[495px] h-[351px]"
                      src={Testi2}
                    />
                  </div>
                  <div className="p-[30px] bg-white shadow flex-col justify-center items-center flex">
                    <div className="self-stretch justify-start items-start gap-3 inline-flex">
                      <div className="w-[50px] h-[50px] relative">
                        <div className="w-[50px] h-[50px] left-0 top-0 absolute bg-emerald-500 rounded-full"></div>
                        <div className="w-[50px] h-[50px] left-0 top-0 absolute bg-red-400 rounded-full"></div>
                        <img
                          className="w-[38px] h-[45px] left-[6px] top-[5.50px] absolute"
                          src={Testilogo}
                        />
                      </div>
                      <div className="self-stretch flex-col justify-center items-start gap-5 inline-flex">
                        <div className="flex-col justify-start items-start gap-[6.29px] flex">
                          <div className="w-[232.58px] text-blue-950 text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                            “They did an amazing work for our home”
                          </div>
                          <div className="w-[232.58px] text-slate-600 text-xs font-normal font-['Be Vietnam Pro'] leading-[18px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum efficitur justo vitae{" "}
                          </div>
                        </div>
                        <div className="w-[232.58px] justify-start items-center gap-[7px] inline-flex">
                          <div className="w-[27.73px] h-[0px] border-2 border-red-400"></div>
                          <div className="text-red-400 text-xs font-normal font-['Be Vietnam Pro'] leading-[18px]">
                            JOHN CARTER, NEW YORK
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
