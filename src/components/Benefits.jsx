import React from "react";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { BsHeadset } from "react-icons/bs";
import { RiCarLine } from "react-icons/ri";
import { TbCurrencyDollarOff } from "react-icons/tb";
import { SiFoursquarecityguide } from "react-icons/si";
import { fadeIn, slideIn } from "../utils/motion";
import { motion } from "framer-motion";
import { benefits } from "../constants";

const Benefits = () => {
  const BenefitCard = ({ index, title, image, text }) => {
    return (
      <div className="xs:w-[300px] w-full">
        {image == "" ? (
          <motion.div
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className="w-full bg-white h-full flex justify-evenly  flex-col"
          >
            <div className="ml-5  my-5">
              <p className="font-black lg:text-[30px] sm:text-[20px] xs:text-[16px] text-[16px] ">
                {title}
              </p>
              <p>{text}</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
            className="w-full bg-white h-full flex justify-evenly  flex-col"
          >
            <img src={image} alt={title} className="w-full" />
            <div className="mx-5  my-5">
              <p className="font-black lg:text-[30px] sm:text-[20px] xs:text-[16px] text-[16px] ">
                {title}
              </p>
              <p>{text}</p>
            </div>
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <div>
      <motion.h1
        variants={fadeIn("", "", 0.05, 1)}
        className={`${styles.sectionHeadText} text-center`}
      >
        Why Choose Us?
      </motion.h1>

      <div className="mt-10 ml-0 lg:ml-20 flex flex-wrap gap-10 ">
        {benefits.map((benefit, index) => (
          <BenefitCard key={benefit.title} index={index} {...benefit} />
        ))}
      </div>

      {/* <div className="flex lg:flex-row flex-col-reverse gap-10">
        <div className="flex flex-col lg:w-[500px] w-[250px]">
          <div className="flex flex-row mb-10">
            <div className="icon mr-2">
              <BsHeadset size="3em" className="icon" />
            </div>
            <motion.div variants={slideIn("right", "", 0.1, 1)}>
              <h1 className={`${styles.sectionHeadText}`}>24/7 Services</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                porro, explicabo excepturi molestias sequi repellat illum{" "}
              </p>
            </motion.div>
          </div>

          <div className="flex flex-row mb-10">
            <div className="icon mr-2">
              <RiCarLine size="3em" className="icon" />
            </div>
            <motion.div variants={slideIn("right", "", 0.2, 1)}>
              <h1 className={`${styles.sectionHeadText}`}>Airport Car</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                porro, explicabo excepturi molestias sequi repellat illum{" "}
              </p>
            </motion.div>
          </div>

          <div className="flex flex-row mb-10">
            <div className="icon mr-2">
              <TbCurrencyDollarOff size="3em" className="icon" />
            </div>
            <motion.div variants={slideIn("right", "", 0.3, 1)}>
              <h1 className={`${styles.sectionHeadText}`}>Special Discount</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                porro, explicabo excepturi molestias sequi repellat illum{" "}
              </p>
            </motion.div>
          </div>

          <div className="flex flex-row mb-10">
            <div className="icon mr-2">
              <SiFoursquarecityguide size="3em" className="icon" />
            </div>
            <motion.div variants={slideIn("right", "", 0.4, 1)}>
              <h1 className={`${styles.sectionHeadText}`}>Your Guide</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                porro, explicabo excepturi molestias sequi repellat illum{" "}
              </p>
            </motion.div>
          </div>
        </div>
        <div className="image">
          <img src={benefits} alt="benefits image" />
        </div>
  </div>}*/}
    </div>
  );
};

export default SectionWrapper(Benefits, "");
