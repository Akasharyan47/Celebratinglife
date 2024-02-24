 
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ContactMain from "../components/ContactMain";
import FooterOne from "../components/FooterOne";
import NavBar from "../components/NavbarThree";
import Modi_Community from "../components/Modi_Community.js"
import Demo from "./demo.jsx"
import FooterThree from "../components/FooterThree.js";

const ModiCommunity = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"ModiCommunity"} />
      {/* <Demo /> */}

      {/* Contact Main */}
      {/* <ContactMain /> */}
      <Modi_Community />

      {/* Footer One */}
      <FooterThree/>
    </>
  );
};

export default ModiCommunity;
