import Kicker from '@/components/shared/Kicker';
import ScrollReveal from '@/components/shared/ScrollReveal';

const values = [
  {
    n: '01',
    title: 'One point of accountability',
    desc: 'Design, cost, and construction sit under a single contract. When something needs fixing, there\'s one number to call — and no one to pass the blame to.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-copper fill-none" strokeWidth="1.4">
        <path d="M9 12l2 2 4-4M7.8 4.7a3.4 3.4 0 001.9-.8 3.4 3.4 0 014.4 0 3.4 3.4 0 002 .8 3.4 3.4 0 013.1 3.1 3.4 3.4 0 00.8 2 3.4 3.4 0 010 4.4 3.4 3.4 0 00-.8 1.9 3.4 3.4 0 01-3.1 3.1 3.4 3.4 0 00-2 .8 3.4 3.4 0 01-4.4 0 3.4 3.4 0 00-1.9-.8 3.4 3.4 0 01-3.1-3.1 3.4 3.4 0 00-.8-1.9 3.4 3.4 0 010-4.4 3.4 3.4 0 00.8-2 3.4 3.4 0 013.1-3.1z" />
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Honest cost from day one',
    desc: 'A detailed, quantity-based estimate before a single brick is laid. You see where every rupee goes — no surprise invoices, no scope creep without your sign-off.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-copper fill-none" strokeWidth="1.4">
        <path d="M9 7h6m-6 4h6m-6 4h4M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Weekly, transparent reporting',
    desc: 'Photo documentation, cost tracking, and schedule updates every week. You always know exactly where your project stands — and where your money went.',
    icon: (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-copper fill-none" strokeWidth="1.4">
        <circle cx="12" cy="12" r="3" />
        <path d="M2.5 12C3.7 7.9 7.5 5 12 5s8.3 2.9 9.5 7c-1.2 4.1-5 7-9.5 7s-8.3-2.9-9.5-7z" />
      </svg>
    ),
  },
];

export default function ValuesSection() {
  return (
    <section className="py-[130px]" style={{ background: 'var(--color-bg-raised)' }}>
      <div className="max-w-[1280px] mx-auto px-14 max-md:px-6">
        <div className="mb-16 max-w-[720px]">
          <ScrollReveal>
            <Kicker>Why Ashlar</Kicker>
          </ScrollReveal>
          <ScrollReveal delay={1}>
            <h2 className="font-serif font-semibold text-[clamp(32px,4vw,54px)] text-text-primary mt-5 leading-[1.05]">
              Three reasons the right<br />
              clients <em className="not-italic italic text-copper-deep">choose us.</em>
            </h2>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={2}>
          <div className="border border-border divide-y divide-border">
            {values.map(({ n, title, desc, icon }) => (
              <div
                key={n}
                className="flex items-start gap-8 px-10 py-10 transition-colors duration-300 hover:bg-bg-card group max-md:px-6 max-md:flex-col max-md:gap-5 overflow-hidden"
              >
                <span className="font-serif text-[13px] text-copper font-medium tracking-[1px] w-8 flex-shrink-0 pt-1">{n}</span>
                <div
                  className="w-10 h-10 border border-copper flex items-center justify-center flex-shrink-0"
                  style={{ borderRadius: '50%' }}
                >
                  {icon}
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-[24px] text-text-primary mb-3 leading-[1.1] group-hover:text-copper transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-[14px] text-text-secondary leading-[1.85]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
