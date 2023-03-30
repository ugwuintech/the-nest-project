import React from "react";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { BsFacebook, BsTwitter, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { styles } from "../styles";

const Footer = () => {
  return (
    <div className="bg-footer text-white w-full h-full py-8 px-16">
      <div className=" w-full h-full">
        <div className="flex justify-between items-center flex-row mb-5">
          <h3 className="text-white text-[10px] lg:text-[16px]">
            Connect with us :
          </h3>

          <div className="icons flex flex-row  gap-3">
            <BsTwitter color="#2A9FE1" size="1.5em" />
            <BsFacebook color="#2A9FE1" size="1.5em" />
            <BsInstagram color="#2A9FE1" size="1.5em" />
            <BsWhatsapp color="#2A9FE1" size="1.5em" />
          </div>
        </div>
        <hr className="border-[1px]  border-white" />
        <div className="flex lg:flex-row flex-col justify-between ">
          <div className="flex flex-col mt-6 lg:w-[450px] w-[250px] mb-10">
            <h1 className={`${styles.sectionHeadText}`}>Marvel Travel</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              molestiae tempore ab corrupti cum? Nihil ab laboriosam delectus,
              ducimus molestiae cumque, dolore perspiciatis ex, necessitatibus
              quisquam quia consequuntur laborum quas.
            </p>
          </div>
          {/* second div */}

          <div className="flex lg:flex-row flex-col justify-between mt-12  gap-10">
            <div className="flex flex-col">
              <h3 className={`${styles.sectionSubText}`}>Services</h3>
              <a href="">Overview</a>
              <a href="">Features</a>
              <a href="">Resources</a>
              <a href="">Pricing</a>
            </div>

            <div className="flex flex-col">
              <h3 className={`${styles.sectionSubText}`}>Company</h3>
              <a href="">About Us</a>
              <a href="">Contact</a>
              <a href="">Blog</a>
              <a href="">News</a>
            </div>

            <div className="flex flex-col">
              <h3 className={`${styles.sectionSubText}`}>Legal</h3>
              <a href="">Terms & Services</a>
              <a href="">Privacy</a>
              <a href="">Support</a>
              <a href="">License</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
