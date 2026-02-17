import Navbar from "@/react-app/components/Navbar";
import HeroSection from "@/react-app/components/HeroSection";
import AboutSection from "@/react-app/components/AboutSection";
import ServicesSection from "@/react-app/components/ServicesSection";
import TestimonialsSection from "@/react-app/components/TestimonialsSection";
import ContactSection from "@/react-app/components/ContactSection";
import Footer from "@/react-app/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
