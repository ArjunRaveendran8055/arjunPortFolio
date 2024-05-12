import React from "react";
import NameEmailMessage from "./NameEmailMessage";

const Form = () => {
  return (
    <section className="w-full flex flex-row flex-wrap items-start justify-start sm:py-2 sm:px-3 lg:py-5 lg:px-20 box-border gap-[0px_24px] bg-dark max-w-full text-left text-36xl text-white font-paragraph-16 pb-4">
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px_0px] min-w-[342px] max-w-full mq450:min-w-full">
        <h1 className="m-0 self-stretch relative text-white   font-bold font-inherit mq450: text-6xl mq750:text-25xl">
          Let’s talk business
        </h1>
        <div className="self-stretch relative text-lg leading-[150%] text-light-grey">
          Now that you know a lot about me, let me know if you are interested to
          work with me.
        </div>
      </div>
      <NameEmailMessage />
    </section>
  );
};

export default Form;
