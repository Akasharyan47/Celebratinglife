import React from "react";
import AboutAreaFour from "../components/AboutAreaFour";
import BannerFour from "../components/BannerFour";
import AboutAreaFive from "../components/AboutAreaFive";
import BlogAreaFour from "../components/BlogAreaFour";
import BrandAreaOne from "../components/BrandAreaOne";
import CareerAreaOne from "../components/CareerAreaOne";
import ContactAreaFour from "../components/ContactAreaFour";
import CounterAreaFour from "../components/CounterAreaFour";
import FaqAreaTwo from "../components/FaqAreaTwo";
import FooterThree from "../components/FooterThree";
import NavbarThree from "../components/NavbarThree";
import ProjectAreaOne from "../components/ProjectAreaOne";
import ServiceAreaFour from "../components/ServiceAreaFour";
import TeamAreaTwo from "../components/TeamAreaTwo";
import TestimonialThree from "../components/TestimonialThree";
import NavbarFour from "../components/NavbarFour";

const HomeFour = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavbarThree />
     

      {/* Banner Four */}
      <BannerFour />

     
      <AboutAreaFive /> 
      
 
      <FaqAreaTwo />

      {/* Team Area Two */}
      <TeamAreaTwo />

      {/* Career Area One */}
      <CareerAreaOne />

      {/* Project Area One */}
      <ProjectAreaOne />

      {/* Contact Area Four */}
      <ContactAreaFour />

      {/* Testimonial Three */}
      <TestimonialThree />

      {/* Counter Area Four */}
      <CounterAreaFour />

      {/* Blog Area Four */}
      {/* <BlogAreaFour /> */}

      {/* Brand Area One */}
      <BrandAreaOne />

      {/* Footer Three */}
      <FooterThree />
    </>
  );
};

export default HomeFour;