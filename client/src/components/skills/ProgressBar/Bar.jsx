import React from "react";
import { motion } from "framer-motion";
const Bar = ({ item }) => {
  return (
    <div className="progress-bar flex flex-row h-2 justify-around  text-white text-2xl">
      <div className="h-2 basis-4/6 rounded-r-full ">
        <motion.div
          className="bg-white h-full rounded-full flex items-start justify-start"
          initial={{ transformOrigin: screenLeft, scaleX: "0%" }}
          whileInView={{ scaleX: `${item.percent}` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 2 }}
        ></motion.div>
      </div>
      <span>{item.percent}</span>
    </div>
  );
};

export default Bar;
