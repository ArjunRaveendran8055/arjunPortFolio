import React from "react";
import Form from "./Form";
import Footer from "./Footer";

const FooterMain = ({ footerRef }) => {
  return (
    <div ref={footerRef} className="sm:px-2 lg:px-28">
      <Form />
      <Footer />
    </div>
  );
};

export default FooterMain;
