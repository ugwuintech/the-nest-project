import React from "react";
import Benefits from "../components/Benefits";
import Testimonial from "../components/Testimonial";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Destination from "../components/Destination";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <div className="bg-body bg-full">
      <Hero />
      <Benefits />
      <Testimonial />
      <Services />
      <Destination />
      <ContactUs />
    </div>
  );
};

export default Home;
