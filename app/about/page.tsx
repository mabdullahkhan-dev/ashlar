import AboutContent from '@/components/about/AboutContent';
import StatsGrid from '@/components/shared/StatsGrid';
import CtaBanner from '@/components/shared/CtaBanner';

export const metadata = {
  title: 'About — Ashlar Construction Engineering',
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <StatsGrid bg="var(--color-bg-raised)" />
      <CtaBanner
        heading={
          <>
            Let&apos;s talk about<br />
            <em className="not-italic italic" style={{ color: 'var(--color-copper-light)' }}>your project.</em>
          </>
        }
        body="A site visit and an honest scope cost you nothing. Start there."
      />
    </>
  );
}
