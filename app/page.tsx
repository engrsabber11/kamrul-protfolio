import AboutSection from "@/components/about-section";
import ArticlesSection from "@/components/articles-section";
import ContactSection from "@/components/contact-section";
import EducationSection from "@/components/education-section";
import ExperienceSection from "@/components/experience-section";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Navigation from "@/components/navigation";
import SkillsSection from "@/components/skills-section";
import SpeakingSection from "@/components/speaking-section";
import ThesisSection from "@/components/thesis-section";
import TrainingSection from "@/components/training-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <SpeakingSection />
        <ThesisSection />
        <ArticlesSection />
        <TrainingSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
