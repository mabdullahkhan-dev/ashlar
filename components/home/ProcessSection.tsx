'use client';
import Kicker from '@/components/shared/Kicker';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { processSteps } from '@/lib/data';

interface ProcessSectionProps {
  altHeading?: React.ReactNode;
}

export default function ProcessSection({ altHeading }: ProcessSectionProps) {
  return (
    <section className="py-[130px] relative overflow-hidden" style={{ background: 'var(--color-bg-raised)' }}>
      {/* Ghost watermark */}
      <div
        className="absolute font-serif font-bold pointer-events-none select-none top-[-5%] right-[-3%] leading-none"
        style={{
          fontSize: 'clamp(140px,22vw,300px)',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(196,138,69,0.05)',
        }}
      >
        04
      </div>

      <div className="max-w-[1280px] mx-auto px-14 max-md:px-6 relative z-10">
        <div className="mb-16">
          <ScrollReveal>
            <Kicker>How We Work</Kicker>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="font-serif font-semibold text-[clamp(32px,4vw,54px)] text-text-primary mt-5 leading-[1.05]">
              {altHeading ?? (
                <>A process built for<br /><em className="not-italic italic text-copper-deep">no surprises.</em></>
              )}
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-px bg-border border border-border">
          {processSteps.map((step, i) => (
            <ScrollReveal key={step.n} delay={(i % 4 + 1) as 1 | 2 | 3 | 4}>
              <div className="process-step group relative overflow-hidden px-8 py-11 max-md:px-6 transition-colors duration-400 cursor-default"
                   style={{ background: 'var(--color-bg-raised)' }}>
                {/* Top bar */}
                <span className="absolute top-0 left-0 h-[2px] w-0 bg-copper transition-all duration-700 group-hover:w-full" />
                <div className="font-serif font-semibold text-[64px] leading-none mb-5 text-white/[0.05] group-hover:text-copper/20 transition-colors duration-400">
                  {step.n}
                </div>
                <h3 className="font-serif font-semibold text-[22px] text-text-primary mb-3">{step.title}</h3>
                <p className="text-[13px] text-text-secondary leading-[1.8]">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .process-step:hover { background: var(--color-bg-base) !important; }
      `}</style>
    </section>
  );
}
