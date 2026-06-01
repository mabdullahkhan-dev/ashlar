import Hero from '@/components/home/Hero';
import MarqueeTicker from '@/components/home/MarqueeTicker';
import VideoSection from '@/components/home/VideoSection';
import ValuesSection from '@/components/home/ValuesSection';
import ServicesAccordion from '@/components/home/ServicesAccordion';
import ProcessSection from '@/components/home/ProcessSection';
import StatsGrid from '@/components/shared/StatsGrid';
import ProjectsGrid from '@/components/home/ProjectsGrid';
import Testimonial from '@/components/home/Testimonial';
import FAQSection from '@/components/home/FAQSection';
import CtaBanner from '@/components/shared/CtaBanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeTicker />
      <VideoSection />
      <ValuesSection />
      <ServicesAccordion preview />
      <ProcessSection />
      <StatsGrid />
      <ProjectsGrid preview />
      <Testimonial />
      <FAQSection />
      <CtaBanner
        heading={
          <>
            Build it once.<br />
            <em className="not-italic italic" style={{ color: 'var(--color-copper-light)' }}>
              Build it right.
            </em>
          </>
        }
        body="Tell us about your project. We'll arrange a site visit and return a detailed scope — no commitment."
      />
    </>
  );
}
