import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
const ContactUs = () => {
  return (
    <div>
      {" "}
      <motion.h1
        variants={slideIn("right", "tween", 0.1, 1)}
        className="font-black md:text-[40px] sm:text-[30px] xs:text-[20px] text-[30px] mb-2 text-center"
      >
        We Want To Keep In Touch With You
      </motion.h1>
      <motion.p
        variants={slideIn("left", "tween", 0.1, 1)}
        className="font-medium tracking-wider mt-3 lg:text-[20px] sm:text-[16px]
              xs:text-[10px] text-[16px] mx-10 mb-5 text-center "
      >
        Subscribe to our news letter and get our latest updates and offers as
        soon as possible.
      </motion.p>
      <div className=" flex lg:flex-row flex-col gap-5 items-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-5 w-[350px] lg:w-[500px] py-2 ml-0 lg:ml-52"
        />
        <button className="button bg-primary w-[150px]">Subscribe</button>
      </div>
    </div>
  );
};

export default SectionWrapper(ContactUs, "");
