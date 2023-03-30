import React from "react";
import Benefits from "../components/Benefits";
import Testimonial from "../components/Testimonial";
import Hero from "../components/Hero";
import SectionWrapper from "../hoc/SectionWrapper";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Testimonial />
      <Services />
    </>
  );
};

export default SectionWrapper(Home, "");
