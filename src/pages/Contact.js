 
import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ContactMain from "../components/ContactMain";
import FooterOne from "../components/FooterOne";
import NavBar from "../components/NavbarThree";
import Demo from "./demo.jsx"

const Contact = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Contact"} />
      <Demo />

      {/* Contact Main */}
      {/* <ContactMain /> */}

      {/* Footer One */}
      {/* <FooterOne /> */}
    </>
  );
};

export default Contact;
