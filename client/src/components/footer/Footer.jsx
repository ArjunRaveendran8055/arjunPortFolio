import { color } from "framer-motion";
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
const Footer = () => {
  return (
    <footer className="self-stretch bg-level-1 flex flex-row items-start justify-start pt-[71px] px-[72px] pb-20 box-border gap-[24px] max-w-full text-left text-base text-black font-paragraph-16 mq450:pt-[46px] mq450:pb-[52px] mq450:box-border mq1275:flex-wrap mq1275:pl-9 mq1275:pr-9 mq1275:box-border">
      <div className="h-[422px] w-[1440px] relative bg-level-1 hidden max-w-full" />
      <div className="w-[746px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border max-w-full text-light-grey">
        <div className="flex flex-col items-start justify-start sm:gap-10 lg:gap-20 max-w-full ">
          <div className="w-[131px] flex flex-col items-start justify-start sm:gap-5 lg:gap-[32px_0px]">
            <h1 className="text-white font-enriq">aRjuN rAveeNdraN</h1>
            <div className="flex flex-row items-start justify-start gap-[0px_16px]">
              <FaInstagram
                size={30}
                color="violet"
                className="hover:cursor-pointer"
              />
              <IoLogoTwitter size={30} color="lightblue" />
              <BsLinkedin size={30} color="blue" />
            </div>
          </div>
          <div className="relative leading-[150%] z-[1]">
            Copyright @ 2024 • Arjun Raveendran. React (MerN)
          </div>
        </div>
      </div>
      <div className="w-[196px] flex flex-col items-start justify-start text-gray-light">
        <div className="self-stretch h-12 relative leading-[150%] flex items-center shrink-0 z-[1]">
          Home
        </div>
        <div className="self-stretch h-12 relative leading-[150%] flex items-center shrink-0 z-[1]">
          Skills
        </div>
        <div className="self-stretch h-12 relative leading-[150%] flex items-center shrink-0 z-[1]">
          Projects
        </div>
        <div className="self-stretch h-12 relative leading-[150%] flex items-center shrink-0 z-[1]">
          Technologies Fimiliar With
        </div>
        <div className="self-stretch h-12 relative leading-[150%] flex items-center shrink-0 z-[1]">
          Contact Me
        </div>
      </div>
      <div className="w-[196px] flex flex-col items-start justify-start text-gray-light">
        <div className="self-stretch h-12 relative leading-[150%] flex items-center shrink-0 z-[1]">
          <MdEmail />
          <span>arjunravi1212@gmail.com</span>
        </div>
        <div className="self-stretch h-12 relative leading-[150%] flex items-center shrink-0 z-[1]">
          <MdEmail />
          <span>rithwikdancer@gmail.com</span>
        </div>
        <div className="self-stretch h-12 relative leading-[150%] flex items-center shrink-0 z-[1]">
          <FaInstagram /> arju_n.ravee_ndran
        </div>
      </div>
    </footer>
  );
};

export default Footer;
