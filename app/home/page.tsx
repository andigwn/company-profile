"use client";

import HeroSection from "../components/sections/hero-section";
import WhyChooseSection from "../components/sections/why-choose-section";
import CTASection from "../components/sections/cta-section";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection />
      <WhyChooseSection />
      <CTASection />
    </div>
  );
}
