import ServicesAccordion from '@/components/home/ServicesAccordion';
import ProcessSection from '@/components/home/ProcessSection';
import CtaBanner from '@/components/shared/CtaBanner';

export const metadata = {
  title: 'Services — Ashlar Construction Engineering',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesAccordion />
      <ProcessSection
        altHeading={
          <>From brief to <em className="not-italic italic text-copper-deep">handover.</em></>
        }
      />
      <CtaBanner
        heading={
          <>
            One firm.<br />
            <em className="not-italic italic" style={{ color: 'var(--color-copper-light)' }}>Every stage.</em>
          </>
        }
        body="Whether you need full turnkey delivery or independent oversight of your existing contractor — start the conversation."
      />
    </>
  );
}
