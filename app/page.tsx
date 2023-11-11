import EarlyAccessSection from "@/components/EarlyAccessSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ProductiveSection from "@/components/ProductiveSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <Hero />

      <FeaturesSection />

      <ProductiveSection />

      <TestimonialsSection />

      <EarlyAccessSection />

      <Footer />
    </>
  );
}
