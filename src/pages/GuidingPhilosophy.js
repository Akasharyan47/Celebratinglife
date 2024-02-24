import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import NavBar from "../components/NavbarThree";
import PricingAreaOne from "../components/PricingAreaOne";
import ServiceAreaGroup from "../components/ServiceAreaGroup";
import Guiding_Philosophy from "../components/Guiding_Philosophy"
import FooterThree from "../components/FooterThree";

const GuidingPhilosophy = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Guiding Philosophy"} />

      {/* Service Area One
      <ServiceAreaGroup />

      {/* Pricing Area One
      <PricingAreaOne />   */}
      <Guiding_Philosophy />


      {/* Footer One */}
      <FooterThree />
    </>
  );
};

export default GuidingPhilosophy;