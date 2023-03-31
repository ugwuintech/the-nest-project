import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { service1, service2, service3 } from "../assets";
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

const Services = () => {
  return (
    <div>
      {" "}
      <h1 className={`${styles.sectionHeadText} mb-3 text-center`}>
        What Can We Do For You?
      </h1>
      <Slider {...settings}>
        <div className="carousel">
          <a
            href="#"
            class="h-full bg-white border border-gray-200 rounded-3xl xs:w-[320px] w-full shadow"
          >
            <img
              src={service1}
              alt="service image"
              className="w-full max-h-250px rounded-t-3xl"
            />
            <p
              class="tracking-wider mt-3 lg:text-[20px] sm:text-[18px]
              xs:text-[10px] text-[18px] mx-5 text-center"
            >
              Get affordable flights from wherever you are
            </p>
            <button className="button bg-primary w-[150px] mt-4 mx-20 mb-10">
              Details
            </button>
          </a>
        </div>

        <div className="carousel">
          <a
            href="#"
            class="h-full bg-white border border-gray-200 rounded-3xl xs:w-[320px] w-full shadow"
          >
            <img
              src={service2}
              alt="service image"
              className="w-full max-h-250px rounded-t-3xl"
            />
            <p
              class="tracking-wider mt-3 lg:text-[20px] sm:text-[18px]
              xs:text-[10px] text-[18px] mx-5 text-center"
            >
              Find Suitable accomodation for you
            </p>
            <button className="button bg-primary w-[150px] mt-4 mx-20 mb-10">
              Details
            </button>
          </a>
        </div>

        <div className="carousel">
          <a
            href="#"
            class="h-full bg-white border border-gray-200 rounded-3xl xs:w-[320px] w-full shadow"
          >
            <img
              src={service3}
              alt="service image"
              className="w-full max-h-250px rounded-t-3xl"
            />
            <p
              class="tracking-wider mt-3 lg:text-[20px] sm:text-[18px]
              xs:text-[10px] text-[18px] mx-5 text-center"
            >
              Get the most exciting holiday packages
            </p>
            <button className="button bg-primary w-[150px] mt-4 mx-20 mb-10">
              Details
            </button>
          </a>
        </div>

        <div className="carousel">
          <a
            href="#"
            class="h-full bg-white border border-gray-200 rounded-3xl xs:w-[320px] w-full shadow"
          >
            <img
              src={service1}
              alt="service image"
              className="w-full max-h-250px rounded-t-3xl"
            />
            <p
              class="tracking-wider mt-3 lg:text-[20px] sm:text-[18px]
              xs:text-[10px] text-[18px] mx-5 text-center"
            >
              Get affordable flights from wherever you are
            </p>
            <button className="button bg-primary w-[150px] mt-4 mx-20 mb-10">
              Details
            </button>
          </a>
        </div>

        <div className="carousel">
          <a
            href="#"
            class="h-full bg-white border border-gray-200 rounded-3xl xs:w-[320px] w-full shadow"
          >
            <img
              src={service2}
              alt="service image"
              className="w-full max-h-250px rounded-t-3xl"
            />
            <p
              class="tracking-wider mt-3 lg:text-[20px] sm:text-[18px]
              xs:text-[10px] text-[18px] mx-5 text-center"
            >
              Get affordable flights from wherever you are
            </p>
            <button className="button bg-primary w-[150px] mt-4 mx-20 mb-10">
              Details
            </button>
          </a>
        </div>
      </Slider>
    </div>
  );
};

export default SectionWrapper(Services, "");
