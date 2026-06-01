import ScrollReveal from '@/components/shared/ScrollReveal';

export default function Testimonial() {
  return (
    <section className="py-[130px]" style={{ background: 'var(--color-bg-base)' }}>
      <div className="max-w-[1280px] mx-auto px-14 max-md:px-6">
        <ScrollReveal>
          <div className="max-w-[900px] mx-auto text-center">
            <div
              className="font-serif text-[90px] text-copper leading-[0.5] h-12 mb-6"
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <p className="font-serif font-medium text-[clamp(22px,3vw,38px)] text-text-primary leading-[1.35] mb-10">
              We hired Ashlar after a contractor left us with half a house and a pile of excuses. The difference was the{' '}
              <em className="not-italic italic text-copper-deep">weekly report</em>{' '}
              — for the first time, we knew exactly where our money was going.
            </p>
            <div className="flex items-center justify-center gap-3">
              <span className="inline-block w-8 h-px bg-border" />
              <span className="text-[12px] font-bold tracking-[2px] uppercase text-text-secondary">
                A. Khan&nbsp;&nbsp;·&nbsp;&nbsp;
                <span className="text-text-dim font-medium normal-case tracking-normal">
                  2 Kanal Residence, DHA Phase 6
                </span>
              </span>
              <span className="inline-block w-8 h-px bg-border" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
