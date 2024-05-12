import React from "react";

const NameEmailMessage = () => {
  return (
    <form className="m-0 flex-1 flex flex-col items-end justify-start gap-[40px_0px] min-w-[342px] max-w-full mq450:min-w-full mq750:gap-[40px_0px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px]">
        <div className="relative text-base leading-[150%] font-paragraph-16 text-white text-left">
          Name
        </div>
        <input
          className="[border:none] [outline:none] bg-level-1 self-stretch h-[50px] relative min-w-[250px]"
          type="text"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px]">
        <div className="relative text-base leading-[150%] font-paragraph-16 text-white text-left">
          Email
        </div>
        <input
          className="[border:none] [outline:none] bg-level-1 self-stretch h-[50px] relative min-w-[250px]"
          type="text"
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px]">
        <div className="relative text-base leading-[150%] font-paragraph-16 text-white text-left">
          Message
        </div>
        <input
          className="[border:none] [outline:none] bg-level-1 self-stretch h-[100px] relative min-w-[250px]"
          type="text"
        />
      </div>
      <button className="cursor-pointer [border:none] p-6 bg-difblue self-stretch overflow-hidden flex flex-row items-center justify-center hover:bg-blueviolet-100">
        <b className="relative text-lg leading-[150%] uppercase font-paragraph-16 text-white text-center">
          SEND MAIL
        </b>
      </button>
    </form>
  );
};

export default NameEmailMessage;
