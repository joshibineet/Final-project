import React from "react";
import styled from "styled-components";
import Banner1 from "../assets/Banner1.png";
import Apple from "../assets/Apple.png";
import Google from "../assets/Google.png";
import Banner2 from "../assets/Banner2.png";
import Banner3 from "../assets/Banner3.png";
import Banner4 from "../assets/Banner4.png";
import Spin1 from "../assets/newspin4.png";
import Spin2 from "../assets/newspin2.png";
import Spin3 from "../assets/newspin3.png";
import Spin4 from "../assets/newspin1.png";

const Herosection = () => {
  return (
    <Mainsection>
      <div className="hero-container" id="home">
        <div className="banner-1">
          <img className="hero-img" src={Banner1} alt="img" />
          <div className="text-box text-box1">
            <h1 className="font-semibold">
              <span className="text-[#FF785A]">Experience </span>the Future of Female Commerce with
              <span className="spn px-3 text-[#FF785A] ">Cnex</span>{" "}
            </h1>
            <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
              Order, Preorder, and Book - Your Ultimate Destination for female
              products and service
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              data-aos-delay="400"
              className="playstore"
            >
              <img src={Apple} alt="applestore" />
              <img src={Google} alt="applestore" />
            </div>
          </div>
        </div>

        {/* img 2 */}
        <div className="banner-2">
          <img className="hero-img h-[500px]" src={Banner2} alt="img" />
          <div className="text-box text-box2">
            <h1 className="font-semibold">
              Where<span className="bg text-[#FF785A]">Fashion </span>meets Femininity{" "}
            </h1>
            <p>Celebrate the essence of womanhood in every styling detail</p>
            <div className="playstore playstore-1">
              <img src={Apple} alt="applestore" />
              <img src={Google} alt="googlrstore" />
            </div>
          </div>
        </div>
        {/* img 3 */}
        <div className="banner-3">
          <img className="hero-img " src={Banner3} alt="img" />
          <div className="text-box text-box3">
            <h1 className="font-semibold">
              Radiate<span className="text-[#FF785A]">Confidence, </span>Radiate style{" "}
            </h1>
            <p>Look and feel best in every moment with chic fashion pieces</p>
            <div className="playstore">
              <img src={Apple} alt="applestore" />
              <img src={Google} alt="google" />
            </div>
          </div>
        </div>
        {/* img 4*/}
        <div className="banner-4">
          <img className="hero-img" src={Banner4} alt="img" />
          <div className="text-box text-box4">
            <h1 className="font-semibold">
              <span className="text-[#FF785A]">Fashion </span>redefined.
            </h1>
            <p>Celebrate the essence of womanhood in every styling detail</p>
            <div className="playstore">
              <img src={Apple} alt="applestore" />
              <img src={Google} alt="google" />
            </div>
          </div>
        </div>
        <div className="spin-products ">
          <div className="product1">
            <img
              className="spin-img"
              src={Spin1}
              alt="img-spin"
            />
          </div>
          <div className="product2">
            <img
              className="spin-img"
              src={Spin2}
              alt="img-spin"
            />
          </div>
          <div className="product3">
            <img
              className="spin-img"
              src={Spin3}
              alt="img-spin"
            />
          </div>
          <div className="product4">
            <img
              className="spin-img max-width"
              src={Spin4}
              alt="img-spin"
            />
          </div>
        </div>
        
      </div>
      
    </Mainsection>
  );
};

const Mainsection = styled.section`
  //position: relative;
  overflow: hidden;

  .hero-container {
    position: relative;
    height: 90vh;
    z-index: -1;
  }
  .spin-products {
    position: relative;
    bottom: -16rem;
    right: -65rem;

    //background-color: rgba(0, 0, 255, 0.3);
    background-color: rgba(8, 45, 74, 0.5);
    border-radius: 40rem;
    width: 900px;
    height: 900px;
    animation: spin 12s linear infinite;
    z-index: 999;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(-14deg);
      }
      35% {
        transform: rotate(-90deg);
      }

      50% {
        transform: rotate(-90deg);
      }
      60% {
        transform: rotate(-170deg);
      }

      75% {
        transform: rotate(-170deg);
      }

      85% {
        transform: rotate(-270deg);
      }
      100% {
        transform: rotate(-270deg);
      }
    }

    .product1 {
      width: 500px;
      height: 600px;
      //margin: 10px;
      //background-color:red;
      margin-left: rem;
      margin-top: rem;
      transform: translateY(-108%);
      rotate: 82deg;
    }
    .product2 {
      width: 400px;
      height: 400px;
      margin: 10px;
      // background-color:red;
      margin-left: 30rem;
      margin-top: 1rem;
      transform: translateY(-30%);
      rotate: 140deg;
    }

    .product3 {
      width: 400px;
      height: 400px;
      margin: 10px;
      //background-color:red;
      margin-left: -10rem;
      margin-top: -20rem;
      rotate: 220deg;
      transform: translateY(5%);
    }
    .product4 {
      width: 500px;
      height: 500px;
      margin: 10px;
      //background-color:red;
      margin-top: -100rem;
      margin-left: -5rem;
      rotate: -2deg;
      transform: translateY(75%);
    }
  }

  .banner-1,
  .banner-2,
  .banner-3,
  .banner-4 {
    height: 90vh;
    width: 102%;
    position: absolute;
    z-index: 1;
    
    object-fit:cover;
  }

  img.hero-img {
    height: 90vh;
    width: 130%; //1440px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    filter: brightness(50%);
    overflow-x: hidden;
  }

  .text-box {
    width: 650px;
    position: absolute;
    font-size: 52px;
    font-weight: 500;
    line-height: 60px;
    letter-spacing: -2%;
    top: 250px;
    left: 100px;
    z-index: 1;
    animation: textup 12s linear infinite;
    transform: translateY(100px);

    h1 {
      color: white;

      span {
       
        padding-right: 1rem;
        text-decoration: underline;
      }
    }
    p {
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: #b6b8b9;
      margin-top: 1.5rem;
    }
  }

  .playstore {
    display: flex;
    .playstore-1 {
      animation: playstore 12s linear infinite;
      transform: translateX(100px);
    }

    img {
      width: 200px;
      height: auto;
      margin-top: 2rem;
      margin-right: 1rem;
    }
  }

  .banner-1 {
    animation: slide-1 12s linear infinite;
  }
  .banner-2 {
    animation: slide-2 12s linear infinite;
  }

  .banner-3 {
    animation: slide-3 12s linear infinite;
  }

  .banner-4 {
    animation: slide-4 12s linear infinite;
  }

  @keyframes slide-1 {
    0% {
      visibility: visible;
    }

    25% {
      visibility: hidden;
    }
    50% {
      visibility: hidden;
    }
    75% {
      visibility: hidden;
    }
    100% {
      visibility: visible;
    }
  }

  @keyframes slide-2 {
    0% {
      visibility: hidden;
    }

    25% {
      visibility: hidden;
    }
    50% {
      visibility: visible;
    }
    75% {
      visibility: hidden;
    }
    100% {
      visibility: hidden;
    }
  }

  @keyframes slide-3 {
    0% {
      visibility: hidden;
    }

    25% {
      visibility: hidden;
    }
    50% {
      visibility: hidden;
    }
    75% {
      visibility: visible;
    }
    100% {
      visibility: visible;
    }
  }
  @keyframes slide-4 {
    0% {
      visibility: hidden;
    }

    25% {
      visibility: hidden;
    }
    50% {
      visibility: hidden;
    }
    75% {
      visibility: hidden;
    }
    100% {
      visibility: visible;
    }
  }

  @keyframes playstore {
    10% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  .playstore-1 {
    animation-delay: 6s;
  }

  @keyframes textup {
    10% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  .text-box2 {
    animation-delay: 3s;
  }
  .text-box3 {
    animation-delay: 6s;
  }
  .text-box4 {
    animation-delay: 9s;
  }

  @media screen and (max-width:425px){
    .spin-products {
    display: none;
  }

  .text-box {
    width: 300px;
    position: absolute;
    font-size: 20px;
    font-weight: 500;
    line-height: 25px;
    //letter-spacing: -2%;
    top: 30px;
    left: 30px;
    z-index: 1;
    animation: textup 12s linear infinite;
    transform: translateY(100px);

    h1 {
      color: white;

      span {
       
        padding-right: 1rem;
        text-decoration: underline;
      }
    }
    p {
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: #b6b8b9;
      margin-top: 1rem;
    }
  }

  .playstore {
    display: flex;
    .playstore-1 {
      animation: playstore 12s linear infinite;
      transform: translateX(100px);
    }

    img {
      width: 150px;
      height: auto;
      margin-top: 1rem;
      margin-right: 1rem;
    }
  }

  .hero-container {
    position: relative;
    height: 30vh;
    z-index: -1;
    width: 100%;
    object-fit: cover;
  }

  


  .banner-1,
  .banner-2,
  .banner-3,
  .banner-4 {
    height: 30vh;
    width: 100%;
   // position: absolute;
    //z-index: 1;
    
    object-fit:cover;



    .hero-img {
    height: auto;
    width: 100%; //1440px;
    //position: absolute;
    //left: 50%;
   // top: 50%;
    //transform: translate(-50%, -50%);
    //z-index: -1;
    filter: brightness(50%);
    overflow-x: hidden;
    object-fit: cover;
  }

  }
}

@media screen and (max-width:1600px){

  img.hero-img {
    height: 90vh;
    width: 100%; //1440px;
    //position: absolute;
    //left: 50%;
   // top: 50%;
    //transform: translate(-50%, -50%);
    z-index: -1;
    filter: brightness(50%);
    overflow-x: hidden;
  }


}
    
  
`;

export default Herosection;
