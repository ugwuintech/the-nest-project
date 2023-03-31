import React from "react";
import Carousel from "./Carousel";
import SectionWrapper from "../hoc/SectionWrapper";
const Hero = () => {
  return (
    <section className="relative w-full">
      <Carousel />
    </section>
  );
};

export default SectionWrapper(Hero, "");
