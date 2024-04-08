import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import Download from "./Download";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <nav className="sticky top-0  z-50 bg-white w-full h-20 shadow-md flex justify-between py-4  sm:pl-12 xl:pl-16 xl:pr-[88px]">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="sm:h-10 sm:mr-4 h-10 ml-7 " />
        </div>

        {/*  For large device  */}
        <div>
          <ul className="navbar hidden md:flex  items-center  py-2 gap-5 ">
            <li className="nav text-[#082D4A] font-semibold">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="nav text-[#082D4A] font-semibold">
              <Link to="about" smooth={true} duration={500}>
                About us
              </Link>
            </li>
            <li className="nav text-[#082D4A] font-semibold">
              <Link to="faq" smooth={true} duration={500}>
                FAQ
              </Link>
            </li>
            <li className="nav text-[#082D4A] font-semibold ">
              <Link to="contact" smooth={true} duration={500}>
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/*For Mobile device */}
        <ul
          className={
            !nav
              ? "hidden"
              : " absolute text-white top-0 left-0 w-full h-96 bg-[#062237] flex flex-col justify-center items-center"
          }
        >
          <li className="nav py-6 text-2xl">Home</li>
          <li className="nav py-6 text-2xl">About us</li>
          <li className="nav py-6 text-2xl">FAQ</li>
          <li className="nav py-6 text-2xl">Contact us</li>
        </ul>

        <button
          onClick={() => setShowModal(true)}
          className="bg-[#082D4A] hover:bg-[#FF785A] text-white font-bold py-2 px-4 rounded-lg"
        >
          Download Now
        </button>
        {showModal && <Download onClose={() => setShowModal(false)} />}

        {/* Hamburger*/}
        <div
          onClick={handleClick}
          className="md:hidden  z-10 md:text-white mt-2 text-2xl"
        >
          {!nav ? (
            <FaBars className="cursor-pointer mr-2" />
          ) : (
            <FaTimes className="text-white mr-2 cursor-pointer" />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
