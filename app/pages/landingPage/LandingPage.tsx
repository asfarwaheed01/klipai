import AboutusSection from "@/app/components/LandingPage/AboutusSection/AboutusSection";
import BenefitsSection from "@/app/components/LandingPage/BenefitsSection/BenefitsSection";
import HeroSection from "@/app/components/LandingPage/HeroSection/HeroSection";
import PartnersSection from "@/app/components/LandingPage/PartnersSection/PartnersSection";
import Navbar from "@/app/components/Layout/Navbar/Navbar";
import React from "react";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutusSection />
      <BenefitsSection />
      <PartnersSection />
    </>
  );
};

export default LandingPage;
