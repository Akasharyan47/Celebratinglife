 
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ContactMain from "../components/ContactMain";
import FooterOne from "../components/FooterOne";
import NavBar from "../components/NavbarThree";
import Demo from "./demo.jsx"
import FooterThree from "../components/FooterThree.js";
import Why_ from "../components/Why_.js";

const Why = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Why"} />
      {/* <Demo /> */}

      {/* Contact Main */}
      {/* <ContactMain /> */}
      <Why_ />

      {/* Footer One */}
      <FooterThree />
    </>
  );
};

export default Why;
