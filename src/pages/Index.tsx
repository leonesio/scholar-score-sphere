
import React from "react";
import Navbar from "@/components/Navbar";
import { HeroSection, HeroSectionDuplicate } from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <HeroSectionDuplicate />
        <FeaturesSection />
        <BenefitsSection />
        <TestimonialsSection />
        <PricingSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
