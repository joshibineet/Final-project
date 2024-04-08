import React, { useState } from "react";
import Testi1 from "../assets/Testi1.png";
import Testi2 from "../assets/Testi2.png";
import Testilogo from "../assets/Testilogo.png";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import "../components/Testimonial.css"


const Testimonial = () => {
  const feedbackData = [
    {
      background: Testi1,
      profile:Testilogo,
      messageTop: "“They did an amazing work for our home”",
      messageMiddle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur justo vitae sapien",
      messageBottom: "JOHN CARTER, NEW YORK",
    },
    {
      background: Testi2,
      profile:Testilogo,
      messageTop: "“Another feedback message”",
      messageMiddle:
        "Another Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur justo vitae sapien",
      messageBottom: "JANE DOE, LOS ANGELES",
    },
    {
      background: Testi1,
      profile:Testilogo,
      messageTop: "“They did an amazing work for our home”",
      messageMiddle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur justo vitae sapien",
      messageBottom: "JOHN CARTER, NEW YORK",
    },
    {
      background: Testi2,
      profile:Testilogo,
      messageTop: "“Another feedback message”",
      messageMiddle:
        "Another Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur justo vitae sapien",
      messageBottom: "JANE DOE, LOS ANGELES",
    },

    // Add more feedback data as needed
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleLeftButtonClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleRightButtonClick = () => {
    if (startIndex < feedbackData.length - 2) {
      setStartIndex(startIndex + 1);
    }
  };
  
  
  
  return (
    <>
      

            <div className="faq">
      <div className="testimonial">
        <div className="bg-red-400 relative sm:right-0 right-9 top-3 w-8 h-[2px] sm:mt-[10px]"> </div>
        <p className="about_us text-red-400 font-medium ml-2">TESTIMONIAL</p>
      </div>
      <div className="what_our">
        <p className="customer_say  text-5xl">
         <span className="font-semibold"> What our</span>&nbsp;<span className="cnex_color font-semibold text-red-400">Customers say</span>
        </p>
        <div className="left_right sm:mt-0 mt-3">
          <button className="left_button sm:left-0 left-[180px] relative" onClick={handleLeftButtonClick}>
            <FaArrowLeft alt="left arrow" className="sm:ml-3 ml-2" />
          </button>
          <button className="right_button relative sm:left-0 left-[90px]" onClick={handleRightButtonClick}>
            <FaArrowRight alt="right arrow" className="sm:ml-3 ml-2" />
          </button>
        </div>
      </div>
      <div className="hr_underline">
        <hr className=""/>
      </div>
      <div className="feedback_slider">
        {feedbackData
          .slice(startIndex, startIndex + 2)
          .map((feedback, index) => (
            <div key={index} className="feedback_card">
              <img
                className="feedback_background"
                src={feedback.background}
                alt=""
              />
              <div className="feedback_message">
                <div className="w-32 h-12 rounded-full bg-red-400 "></div>
                <img src={feedback.profile} alt="" className="absolute rounded-full ml-[6px] mt-[3px]"/>
                <div className="message_paragraph">
                  <p className="message_top">{feedback.messageTop}</p>
                  <p className="message_middle">{feedback.messageMiddle}</p>
                  <div className="message_bottom">
                  <div className="bg-red-400 w-4 h-[2px] mt-[7px]"> </div>
                    
                    <p className="messager_name ml-2">{feedback.messageBottom}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

     
    </div>
            
    </>
  );
};

export default Testimonial;
