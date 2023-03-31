import React from "react";
import { slide1, slide2, slide3 } from "../assets";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
// import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousel = () => {
  return (
    <>
      <Slider {...settings}>
        <div className="flex flex-row gap-10 lg:gap-28 mt-3 overflow-hidden carousel">
          <div
            // variants={slideIn("left", "tween", 0.2, 1)}
            className="flex lg:w-[500px] w-[150px] flex-col"
          >
            <h1 className={`${styles.heroHeadText}`}>
              Marvel <span className="text-primary">Travel.</span>
            </h1>
            <h1 className={`${styles.heroHeadText}`}>
              Exploring the <br />
              magic of <br /> technology <br /> & travel
            </h1>
            <p className={`${styles.heroSubText}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              possimus id fuga, repudiandae, o fficia perferendis odit
              consequuntur at eligendi exercitationem nulla incidunt? Quia
              quidem hic ipsam nobis! Omnis, aspernatur est.
            </p>
            <button className="button bg-primary w-[150px] mt-4">
              Book Now
            </button>
          </div>
          <div
          // variants={slideIn("right", "tween", 0.2, 1)}
          >
            <img src={slide1} alt="slider image" className="mt-5" />
          </div>
        </div>

        <div className="flex flex-row gap-10 lg:gap-28 overflow-hidden mt-3 carousel">
          <div
            // variants={slideIn("left", "tween", 0.2, 1)}
            className="flex lg:w-[500px] w-[150px] flex-col"
          >
            <h1 className={`${styles.heroHeadText}`}>
              Explore the world in style with{" "}
              <span className="text-primary">Marvel</span> Travel.
            </h1>
            <p className={`${styles.heroSubText}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              possimus id fuga, repudiandae, o fficia perferendis odit
              consequuntur at eligendi exercitationem nulla incidunt? Quia
              quidem hic ipsam nobis! Omnis, aspernatur est.
            </p>
            <button className="button bg-primary w-[150px] mt-4">
              Book Now
            </button>
          </div>
          <div
          // variants={slideIn("right", "tween", 0.2, 1)}
          >
            <img src={slide2} alt="slider image" className="mt-5" />
          </div>
        </div>

        <div className="flex flex-row gap-10 lg:gap-28 overflow-hidden mt-3 carousel">
          <div
            // variants={slideIn("left", "tween", 0.2, 1)}
            className="flex lg:w-[500px] w-[150px] flex-col"
          >
            <h1 className={`${styles.heroHeadText}`}>
              Easy and fun travel with{" "}
              <span className="text-primary">Marvel.</span>
            </h1>
            <p className={`${styles.heroSubText}`}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita
              possimus id fuga, repudiandae, o fficia perferendis odit
              consequuntur at eligendi exercitationem nulla incidunt? Quia
              quidem hic ipsam nobis! Omnis, aspernatur est.
            </p>
            <button className="button bg-primary w-[150px] mt-4">
              Book Now
            </button>
          </div>
          <div
          // variants={slideIn("right", "tween", 0.2, 1)}
          >
            <img src={slide3} alt="slider image" className="mt-5" />
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Carousel;
