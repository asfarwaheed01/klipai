import HeroSection from "@/app/components/LandingPage/HeroSection/HeroSection";
import Navbar from "@/app/components/Layout/Navbar/Navbar";
import React from "react";
import dynamic from "next/dynamic";

const AboutusSection = dynamic(
  () => import("@/app/components/LandingPage/AboutusSection/AboutusSection"),
  {
    loading: () => <div className="h-96 bg-gray-50 animate-pulse"></div>,
  }
);

const BenefitsSection = dynamic(
  () => import("@/app/components/LandingPage/BenefitsSection/BenefitsSection"),
  {
    loading: () => <div className="h-96 bg-gray-50 animate-pulse"></div>,
  }
);

const PartnersSection = dynamic(
  () => import("@/app/components/LandingPage/PartnersSection/PartnersSection"),
  {
    loading: () => <div className="h-48 bg-gray-50 animate-pulse"></div>,
  }
);

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
