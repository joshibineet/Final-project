import React from "react";
const Review = () => {
  return (
    <>
      
      <div className="absolute hidden sm:top-[680px] sm:flex w-[1295px] bg-gradient-to-b from-[#082d4a] to-[#0e4e75] justify-between py-8  px-16 rounded-md shadow-2xl  ml-[87px] z-10 ">
    <div className="text-center md:text-left">
        <h2 className="text-3xl font-medium text-white ml-7 mb-2">200+</h2>
        <p className="text-white">Clients Worldwide</p>
    </div>

    <div className="text-center md:text-left">
        <h2 className="text-3xl font-medium text-white ml-7 mb-2">100+</h2>
        <p className="text-white">Client Satisfaction</p>
    </div>

    <div className="text-center md:text-left">
        <h2 className="text-[25px] font-medium text-white ml-7 mb-2">99 <span className="absolute mt-[3px]">K+</span></h2>
        <p className="text-white">Numbers of Sales</p>
    </div>

    <div className="text-center md:text-left">
        <h2 className="text-[25px] font-medium text-white ml-5 mb-2">24 <span className="absolute mt-[3px]">H</span></h2>
        <p className="text-white">Team Support</p>
    </div>
</div>


    </>
  );
};

 export default Review;
