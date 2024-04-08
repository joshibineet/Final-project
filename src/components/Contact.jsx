import React, { useState } from "react";
import Apple from "../assets/Apple.png";
import Google from "../assets/Google.png";
import CTA from "../assets/cta.png";

const Contact = () => {

  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [disable, setDisable] = useState('typing');

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submit action
    console.log(formValue); // Log the form values to the console
    setDisable('submitted'); // Update the state to disable the form
  }

  return (
    <>
      {/*.....Cta section........*/}
      <div className="relative sm:w-full sm:h-[555px] sm:py-[120px] sm:mt-28 mt-[320px] bg-black flex justify-center items-center">
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
                <span className="font-be-vietnam-pro relative text-white sm:text-5xl font-medium leading-[56px]">
                  Join the{" "}
                </span>
                <span
                  className="font-be-vietnam-pro relative text-[#FF785A] sm:text-5xl font-medium underline leading-[56px]"
                >
                  CNEX Community
                </span>
                <span className=" relative sm:bottom-0 bottom-10 sm:left-0 left-32 font-be-vietnam-pro text-white sm:text-5xl font-medium sm:leading-[56px]">
                  {" "}
                  <br /> Today!
                </span>
              </div>
              <div className="sm:w-[608px] sm:flex hidden relative sm:bottom-0 bottom-10 text-center text-stone-300 text-base font-normal font-['Be Vietnam Pro'] leading-normal">
                Download CNEX now to explore a world of female-centric products
                and services, and empower yourself with every purchase and
                booking.
              </div>
            </div>
            <div className="flex justify-start items-center gap-[14.28px]">
              <img
                className="sm:w-[171.36px] h-[40px] sm:h-[50.81px] sm:bottom-0 bottom-8 relative"
                src={Apple}
                alt="Download from Apple Store"
              />
              <img
                className="sm:w-[171.36px] h-[40px] sm:bottom-0 bottom-8 relative sm:h-[50.38px]"
                src={Google}
                alt="Download from Google Play"
              />
            </div>
          </div>
        </div>
      </div>

      {/*....contact....*/}

      <div className=" hidden w-[1440px] h-[861px] bg-white flex-col justify-center items-center  sm:inline-flex" id="contact">
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
            <div className="px-[50px] bg-white flex-col justify-start items-start gap-[60px] flex">
      <form onSubmit={handleSubmit}>
        <div className="flex-col justify-start items-start gap-6 flex">
          {/* Name Input */}
          <div className="relative w-[392px] right-14 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-black text-2xl font-medium font-['Be_Vietnam_Pro'] leading-loose">
              Name
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <input
                type="text"
                name="name"
                className="w-[392px] border-none focus:outline-none"
                placeholder="Your Name"
                value={formValue.name}
                onChange={handleInput}
              />
              <div className="w-[392px] h-px bg-zinc-400"></div>
            </div>
          </div>
          {/* Email Input */}
          <div className="absolute ml-[540px] w-[392px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-zinc-900 text-2xl font-medium font-['Be_Vietnam_Pro'] leading-loose">
              Email
            </div>
            <div className="h-[33px] flex-col justify-start items-start gap-2 flex">
              <input
                type="email"
                name="email"
                className="w-[392px] border-none focus:outline-none"
                placeholder="Your Email"
                value={formValue.email}
                onChange={handleInput}
              />
              <div className="w-[392px] h-px bg-zinc-400"></div>
            </div>
          </div>
          {/* Phone Number Input */}
          <div className="relative right-14 w-[392px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-zinc-900 text-2xl font-medium font-['Be_Vietnam_Pro'] leading-loose">
              Phone number
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <input
                type="text"
                name="phone"
                className="w-[392px] border-none focus:outline-none"
                placeholder="Your Phone Number"
                value={formValue.phone}
                onChange={handleInput}
              />
              <div className="w-[392px] h-px bg-zinc-400"></div>
            </div>
          </div>
          {/* Subject Input */}
          <div className="absolute ml-[540px] mt-[129px] w-[392px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch text-zinc-900 text-2xl font-medium font-['Be_Vietnam_Pro'] leading-loose">
              Subject
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <input
                type="text"
                name="subject"
                className="w-[392px] border-none focus:outline-none"
                placeholder="Subject"
                value={formValue.subject}
                onChange={handleInput}
              />
              <div className="w-[392px] h-px bg-zinc-400"></div>
            </div>
          </div>
          {/* Message Input */}
          <div className="relative right-14 h-[89px] flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch text-zinc-900 text-2xl font-medium font-['Be_Vietnam_Pro'] leading-loose">
              Message
            </div>
            <div className="flex-col justify-start items-start gap-2 flex">
              <textarea
                name="message"
                className="w-[780px] h-[60px] border-none focus:outline-none"
                placeholder="Your message"
                value={formValue.message}
                onChange={handleInput}
              ></textarea>
              <div className="w-[780px] h-px bg-zinc-400"></div>
            </div>
          </div>
          {/* Submit Button */}
          <div className="px-6 py-[13px] right-14 relative mt-16 bg-sky-950 rounded-lg justify-center items-center gap-1 inline-flex hover:bg-[#FF785A] cursor-pointer">
            <button
              type="submit"
              className="text-white text-base font-medium font-['Be_Vietnam_Pro'] leading-normal"
              disabled={formValue.name.length === 0 ||
                        formValue.email.length === 0 ||
                        formValue.phone.length === 0 ||
                        formValue.subject.length === 0 ||
                        formValue.message.length === 0 ||
                        disable === 'submitted'
              }
            >
              Get in touch
            </button>
          </div>
        </div>
      </form>
    </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
