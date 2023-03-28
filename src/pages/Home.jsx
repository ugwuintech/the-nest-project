import React from "react";
import Benefits from "../components/Benefits";
import Testimonial from "../components/Testimonial";
import Hero from "../components/Hero";
import SectionWrapper from "../hoc/SectionWrapper";

const Home = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Testimonial />
    </>
  );
};

export default SectionWrapper(Home, "");
