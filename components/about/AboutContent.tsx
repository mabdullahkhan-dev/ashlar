import Kicker from '@/components/shared/Kicker';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { credentials, commitments } from '@/lib/data';

export default function AboutContent() {
  return (
    <section className="pt-[170px] pb-[130px]" style={{ background: 'var(--color-bg-base)' }}>
      <div className="max-w-[1280px] mx-auto px-14 max-md:px-6">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-20 items-center">

          {/* Left */}
          <div>
            <ScrollReveal>
              <Kicker>About Ashlar</Kicker>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2 className="font-serif font-semibold text-[clamp(34px,4.5vw,56px)] text-text-primary mt-5 mb-7 leading-[1.05]">
                Built on precision.<br />
                Delivered with <em className="not-italic italic text-copper-deep">integrity.</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p className="text-[15px] text-text-secondary leading-[1.9] mb-[18px]">
                <strong className="text-text-primary font-semibold">Ashlar Construction Engineering was founded on a single conviction:</strong>{' '}
                homeowners deserve a professional who is accountable for the whole project — not a contractor who appears when it suits him.
              </p>
              <p className="text-[15px] text-text-secondary leading-[1.9] mb-[18px]">
                We work with private residential clients across Lahore. Every project receives senior-level oversight from first brief to final handover.
              </p>
              <p className="text-[15px] text-text-secondary leading-[1.9]">
                Our principals bring experience from multi-billion-rupee infrastructure programs, high-rise commercial developments, and large-scale industrial construction — applied to your home with the same discipline.
              </p>
            </ScrollReveal>

            {/* Credentials */}
            <ScrollReveal delay={3}>
              <div className="mt-9 border-t border-border">
                {credentials.map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center py-4 border-b border-border">
                    <span className="text-[11px] font-bold tracking-[2px] uppercase text-text-dim">{label}</span>
                    <span className="font-serif text-[18px] font-semibold text-text-primary">{value}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — dark panel */}
          <ScrollReveal delay={2}>
            <div
              className="relative overflow-hidden p-14 max-md:p-10"
              style={{ background: 'var(--color-bg-card)', border: '1px solid var(--color-border-bright)' }}
            >
              {/* Copper glow */}
              <div
                className="absolute -top-[40%] -right-[20%] w-[400px] h-[400px] pointer-events-none"
                style={{ background: 'radial-gradient(circle,rgba(196,138,69,0.09),transparent 70%)' }}
              />

              <div className="relative z-10">
                <Kicker light>Our Standard</Kicker>
                <div className="font-serif font-semibold text-[clamp(36px,4.5vw,58px)] text-text-primary leading-[1.05] mt-6 mb-4">
                  No detail<br /><em className="not-italic italic text-copper-light">delegated away.</em>
                </div>
                <p className="text-[14px] text-text-secondary leading-[1.8] mb-9">
                  Three commitments that hold on every project, regardless of size.
                </p>
                <div className="flex flex-col">
                  {commitments.map(({ n, title, desc }) => (
                    <div key={n} className="flex gap-4 py-4 border-t border-white/[0.07]">
                      <span className="font-serif text-[14px] text-copper-light flex-shrink-0 pt-0.5">{n}</span>
                      <div>
                        <b className="font-serif text-[15px] text-text-primary font-semibold block mb-1">{title}</b>
                        <span className="text-[13px] text-text-secondary leading-[1.6]">{desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
