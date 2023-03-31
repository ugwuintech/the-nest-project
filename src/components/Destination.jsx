import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { europe, africa, germany } from "../assets";
import Slider from "react-slick";

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
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

const Destination = () => {
  return (
    <div>
      {" "}
      <h1 className={`${styles.sectionHeadText} mb-5 text-center`}>
        Choose Your Destination
      </h1>
      <Slider {...settings}>
        <div className="carousel">
          <a
            href="#"
            class="h-full bg-white border border-gray-200  xs:w-[320px] w-full shadow p-5"
          >
            <img
              src={europe}
              alt="service image"
              className="w-full max-h-300px"
            />
            <p
              class="tracking-wider mt-3 font-bold lg:text-[20px] sm:text-[18px]
              xs:text-[10px] text-[18px] mx-5 text-center"
            >
              Europe
            </p>
          </a>
        </div>

        <div className="carousel">
          <a
            href="#"
            class="h-full bg-white border border-gray-200 xs:w-[320px] w-full shadow p-5"
          >
            <img
              src={africa}
              alt="service image"
              className="w-full max-h-300px "
            />
            <p
              class="tracking-wider mt-3 font-bold lg:text-[20px] sm:text-[18px]
              xs:text-[10px] text-[18px] mx-5 text-center"
            >
              Africa
            </p>
          </a>
        </div>

        <div className="carousel">
          <a
            href="#"
            class="h-full bg-white border border-gray-200 xs:w-[320px] w-full shadow p-5"
          >
            <img
              src={germany}
              alt="service image"
              className="w-full max-h-300px "
            />
            <p
              class="tracking-wider mt-3 font-bold lg:text-[20px] sm:text-[18px]
              xs:text-[10px] text-[18px] mx-5 text-center"
            >
              Germany
            </p>
          </a>
        </div>

        <div className="carousel">
          <a
            href="#"
            class="h-full bg-white border border-gray-200 xs:w-[320px] w-full shadow p-5"
          >
            <img
              src={africa}
              alt="service image"
              className="w-full max-h-300px "
            />
            <p
              class="tracking-wider mt-3 font-bold lg:text-[20px] sm:text-[18px]
              xs:text-[10px] text-[18px] mx-5 text-center"
            >
              Africa
            </p>
          </a>
        </div>

        <div className="carousel">
          <a
            href="#"
            class="h-full bg-white border border-gray-200 xs:w-[320px] w-full shadow p-5"
          >
            <img
              src={europe}
              alt="service image"
              className="w-full max-h-300px "
            />
            <p
              class="tracking-wider mt-3 font-bold lg:text-[20px] sm:text-[18px]
              xs:text-[10px] text-[18px] mx-5 text-center"
            >
              Europe
            </p>
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default SectionWrapper(Destination, "");
