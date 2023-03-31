import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { rebecca } from "../assets";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

const Testimonial = () => {
  return (
    <div>
      <h1 className={`${styles.sectionHeadText} text-center`}>
        Our Client's Feedback
      </h1>
      <div className="flex lg:flex-row flex-col gap-10">
        <div className="image">
          <img src={rebecca} alt="benefits image" />
        </div>
        <div className="flex flex-col lg:w-[500px] w-[250px]">
          <div>
            <h1 className=" tracking-wider lg:text-[40px] sm:text-[40px] xs:text-[25px] text-[30px] lg:leading-[68px]">
              Abena Rebecca
            </h1>
            <p>Tourist </p>
            <div className="ratings flex flex-row mt-3">
              <BsStarFill size="2em" className="icon" color="gold" />
              <BsStarFill size="2em" className="icon" color="gold" />
              <BsStarFill size="2em" className="icon" color="gold" />
              <BsStarFill size="2em" className="icon" color="gold" />
              <BsStar size="2em" className="icon" color="gold" />
            </div>
            <h2 className="tracking-wider mt-3 lg:text-[20px] sm:text-[18px] xs:text-[10px] text-[18px]">
              Marvel Travel has given me the most amazing travel experience I've
              had in a while. I will definitely recommend Marvel Travel to
              anyone
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Testimonial, "");
