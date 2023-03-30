import React from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";

const Services = () => {
  return (
    <div>
      {" "}
      <h1 className={`${styles.sectionHeadText}`}>What Can We Do For You?</h1>
    </div>
  );
};

export default SectionWrapper(Services, "");
