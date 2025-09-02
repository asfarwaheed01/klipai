import HeroSection from "@/app/components/LandingPage/HeroSection/HeroSection";
import Navbar from "@/app/components/Layout/Navbar/Navbar";
import React from "react";
import dynamic from "next/dynamic";
import AboutusSection from "@/app/components/LandingPage/AboutusSection/AboutusSection";
import BenefitsSection from "@/app/components/LandingPage/BenefitsSection/BenefitsSection";
import PartnersSection from "@/app/components/LandingPage/PartnersSection/PartnersSection";

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
