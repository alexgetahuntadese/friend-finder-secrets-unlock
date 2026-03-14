import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScrollProgress from "@/components/ScrollProgress";
import PageLoader from "@/components/PageLoader";
import FloatingCTA from "@/components/FloatingCTA";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const FacilitiesSection = lazy(() => import("@/components/FacilitiesSection"));
const RoomsSection = lazy(() => import("@/components/RoomsSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const GallerySection = lazy(() => import("@/components/GallerySection"));
const LocalGuideSection = lazy(() => import("@/components/LocalGuideSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const SectionFallback = () => <div className="py-24" />;

const Index = () => {
  return (
    <PageLoader>
      <main className="overflow-x-hidden">
        <ScrollProgress />
        <Navbar />
        <HeroSection />
        <FloatingCTA />
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FacilitiesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <RoomsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <section id="testimonials">
            <TestimonialsSection />
          </section>
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <GallerySection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <LocalGuideSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Footer />
        </Suspense>
      </main>
    </PageLoader>
  );
};

export default Index;
