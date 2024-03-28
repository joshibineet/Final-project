import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <>
      <nav className="sticky top-0 z-50 bg-white w-full shadow-md flex justify-between py-4  sm:pl-16 xl:pl-20 xl:pr-[88px]">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 mr-4 md:pl-2" />
        </div>
  
                  { /*  For large device  */  }
        <div>
          <ul className="navbar hidden md:flex  items-center  py-2 gap-5 ">
            <li className="nav text-[#082D4A] font-semibold">
              <a href="#">Home</a>
            </li>
            <li className="nav text-[#082D4A] font-semibold">
              <a href="#">About us</a>
            </li>
            <li className="nav text-[#082D4A] font-semibold">
              <a href="#">FAQ</a>
            </li>
            <li className="nav text-[#082D4A] font-semibold ">
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>

        {/*For Mobile device */}
        <ul className={!nav ? 'hidden' : " absolute text-white top-0 left-0 w-full h-96 bg-[#062237] flex flex-col justify-center items-center"}>
          <li className="nav py-6 text-2xl">Home</li>
          <li className="nav py-6 text-2xl">About us</li>
          <li className="nav py-6 text-2xl">FAQ</li>
          <li className="nav py-6 text-2xl">Contact us</li>
        </ul>

        <button className="bg-[#082D4A] hover:bg-[#FF785A] text-white font-bold py-2 px-4 rounded-lg  ">
          Download Now
        </button>

        {/* Hamburger*/}
        <div onClick={handleClick} className="md:hidden  z-10 md:text-white mt-2 text-2xl">
          {!nav ? <FaBars className="cursor-pointer mr-2" /> : <FaTimes className="text-white mr-2 cursor-pointer"/>}

        </div>
      </nav>
    </>
  );
};

export default Navbar;
