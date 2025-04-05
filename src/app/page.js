import Footer from "@/sections/Footer";
import HeroSection from "@/sections/HeroSection";
import Menubar from "@/sections/MenuBar";
import ServicesSection from "@/sections/ServiceSection";
import TechStackSection from "@/sections/TechStackSection";
import ContactSection from "@/sections/ContactSection";

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
