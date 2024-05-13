import React from "react";
import { easeInOut, easeOut, motion } from "framer-motion";
import heroImage from "../../assets/images/arjunHero2.jpeg";
import { BackgroundBeams } from "../../ui/background-beams";

const Hero = ({ heroRef }) => {
  return (
    <section ref={heroRef} className="mt-[80px] w-[100vw]">
      <div
        className=" flex sm:flex-col lg:flex-row sm:h-[95vh] 
      h-[100vh] bg-black text-white sm:p-0 md:px-20 xl:px:20 xl:py-14 lg:px-2 md:py-10 lg:py-1 lg:gap-3"
      >
        <div
          className="flex sm:basis-3/5  lg:basis-1/2 sm:order-2 lg:order-1  
        sm:justify-center lg:justify-normal lg:items-start"
        >
          <div
            className="flex flex-col basis-3/5 h-2/3 sm:justify-center sm:items-center 
          lg:justify-normal lg:items-start sm:gap-5 lg:gap-12 lg:mt-[35px] xl:mt-[175px] xl:ml-[100px] lg:ml-0"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7 }}
            >
              <span>
                <p className=" text-3xl md:text-5xl lg:3xl font-enriq-600 mt-[80px] font-bold">
                  Hi, Im{" "}
                </p>
              </span>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <span>
                <p className="text-3xl md:text-5xl text-white font-bold">
                  Arjun Raveendran
                </p>
              </span>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -75 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: 1.3 }}
            >
              <span>
                <p
                  className="animate-typing overflow-hidden whitespace-nowrap border-r-5 border-r-white 
                 sm:pl-1 sm:pr-5 md:pr-7 sm:text-xl md:text-3xl lg:text-2xl xl:text-3xl text-white font-bold"
                >
                  [MERN STACK DEVELOPER]
                </p>
              </span>
            </motion.div>
          </div>
        </div>
        <div className="flex sm:basis-2/5 lg:basis-1/2 sm:order-1 lg:order-2 items-center justify-center sm:p-2 lg:p-0">
          <motion.img src={heroImage} alt="" className=" sm:w-full md:w-[75%] lg:w-[50%] rounded-t-full" 
          variants={{
            hidden: { opacity: 0, scale: .9 },
            visible: { opacity: 1, scale: 1 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 2, ease: eval }}
          />
        </div>
      </div>
      <BackgroundBeams/>
    </section>
  );
};

export default Hero;


