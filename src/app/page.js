import ContactSection from "@/sections/ContactSection";
import Footer from "@/sections/Footer";
import HeroSection from "@/sections/HeroSection";
import Menubar from "@/sections/Navbar";
import ServicesSection from "@/sections/ServiceSection";
import TechStackSection from "@/sections/TechStackSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Menubar />

      <HeroSection />

      <ServicesSection />

      <TechStackSection />

      <ContactSection />

      <Footer />
    </main>
  );
}
