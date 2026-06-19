import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { FeaturedBooks } from "@/components/FeaturedBooks";
import { AuthorSection } from "@/components/AuthorSection";
import { VisionSection } from "@/components/VisionSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <FeaturedBooks />
        <AuthorSection />
        <VisionSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CategoriesSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
