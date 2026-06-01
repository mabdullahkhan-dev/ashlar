import Kicker from '@/components/shared/Kicker';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { contactDetails } from '@/lib/data';

export default function ContactInfo() {
  return (
    <div>
      <ScrollReveal>
        <Kicker>Get in Touch</Kicker>
      </ScrollReveal>
      <ScrollReveal delay={1}>
        <h2 className="font-serif font-semibold text-[clamp(36px,5vw,62px)] text-text-primary mt-5 mb-5 leading-[1.02]">
          Start a<br /><em className="not-italic italic text-copper-deep">project.</em>
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={2}>
        <p className="text-[15px] text-text-secondary leading-[1.85] mb-11">
          Tell us about what you're building. We'll arrange a site visit and return a detailed scope and fee proposal.
        </p>
        <div className="border-t border-border">
          {contactDetails.map(({ label, value }) => (
            <div key={label} className="py-5 border-b border-border">
              <div className="text-[10px] font-bold tracking-[3px] uppercase text-text-dim mb-1.5">{label}</div>
              <div className="font-serif text-[19px] font-medium text-text-primary">{value}</div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
