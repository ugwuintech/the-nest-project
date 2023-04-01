import React from "react";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { BsHeadset } from "react-icons/bs";
import { RiCarLine } from "react-icons/ri";
import { TbCurrencyDollarOff } from "react-icons/tb";
import { SiFoursquarecityguide } from "react-icons/si";
import { benefits } from "../assets";
import { fadeIn, slideIn } from "../utils/motion";
import { motion } from "framer-motion";

const Benefits = () => {
  return (
    <div>
      <motion.h1
        variants={fadeIn("", "", 0.05, 1)}
        className={`${styles.sectionHeadText} text-center`}
      >
        Why Choose Us?
      </motion.h1>

      <div className="flex lg:flex-row flex-col-reverse gap-10">
        <div className="flex flex-col lg:w-[500px] w-[250px]">
          <div className="flex flex-row mb-10">
            <div className="icon mr-2">
              <BsHeadset size="3em" className="icon" />
            </div>
            <motion.div variants={slideIn("right", "", 0.1, 1)}>
              <h1 className={`${styles.sectionSubText}`}>24/7 Services</h1>
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
              <h1 className={`${styles.sectionSubText}`}>Airport Car</h1>
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
              <h1 className={`${styles.sectionSubText}`}>Special Discount</h1>
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
              <h1 className={`${styles.sectionSubText}`}>Your Guide</h1>
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
      </div>
    </div>
  );
};

export default SectionWrapper(Benefits, "");
