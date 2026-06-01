import Link from 'next/link';
import Kicker from '@/components/shared/Kicker';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-40 pb-20 relative">
      <div className="max-w-[1280px] mx-auto px-14 max-md:px-6 w-full">
        <div className="grid grid-cols-12 gap-6 items-center">

          {/* ── Left col ── */}
          <div className="col-span-7 max-lg:col-span-12 flex flex-col justify-center pr-12 max-lg:pr-0">
            <div className="mb-12">
              <Kicker>Construction Engineering</Kicker>
              <span className="ml-4 text-[11px] font-semibold tracking-[1px] text-text-dim">Lahore, Pakistan</span>
            </div>

            <h1 className="font-serif font-semibold text-[clamp(54px,8.5vw,128px)] leading-[0.96] tracking-[-0.025em] text-text-primary mb-0">
              <span className="block overflow-hidden">
                <span className="block" style={{ animation: 'fade-up 1.1s cubic-bezier(0.16,1,0.3,1) 0.1s both' }}>
                  One firm.
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="block" style={{ animation: 'fade-up 1.1s cubic-bezier(0.16,1,0.3,1) 0.22s both' }}>
                  From the first drawing
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="block" style={{ animation: 'fade-up 1.1s cubic-bezier(0.16,1,0.3,1) 0.34s both' }}>
                  to the last{' '}
                  <em className="not-italic text-copper-deep italic font-semibold">brick.</em>
                </span>
              </span>
            </h1>

            <div
              className="flex justify-between items-end mt-16 flex-wrap gap-10 max-sm:flex-col max-sm:items-start max-sm:gap-9"
              style={{ animation: 'fade-up 1s cubic-bezier(0.16,1,0.3,1) 0.5s both' }}
            >
              <p className="text-[16px] text-text-secondary leading-[1.8] max-w-[380px]">
                Design, cost, and construction under{' '}
                <strong className="text-text-primary font-semibold">one contract</strong>{' '}
                — so no one can pass the blame, and nothing falls between the gaps.
              </p>

              <div className="flex items-center gap-7 flex-wrap">
                <Link
                  href="/contact"
                  className="text-[11px] font-bold tracking-[2px] uppercase px-10 py-[18px] bg-text-primary text-bg-base cursor-none transition-colors duration-250 hover:bg-copper-deep hover:text-bg-base whitespace-nowrap"
                >
                  Start a Project
                </Link>
                <Link
                  href="/projects"
                  className="text-[11px] font-semibold tracking-[2px] uppercase text-text-primary cursor-none inline-flex items-center gap-2 group transition-all duration-250 hover:text-copper hover:border-copper whitespace-nowrap px-10 py-[18px] border border-border"
                >
                  See our work
                  <span className="transition-transform duration-250 group-hover:translate-x-[5px]">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* ── Right col — Blueprint panel ── */}
          <div
            className="col-span-5 max-lg:hidden relative h-[580px]"
            style={{ animation: 'fade-in 1.2s ease 0.3s both' }}
          >
            <div
              className="absolute inset-0 border border-border-bright"
              style={{ background: 'var(--color-bg-card)' }}
            >
              {/* Blueprint SVG */}
              <svg
                viewBox="0 0 480 580"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer frame */}
                <rect x="32" y="28" width="416" height="524" stroke="#C48A45" strokeWidth="0.6" strokeOpacity="0.25" />
                {/* Inner rooms */}
                <rect x="56" y="52" width="180" height="140" stroke="#C48A45" strokeWidth="0.5" strokeOpacity="0.35" />
                <rect x="56" y="212" width="180" height="120" stroke="#C48A45" strokeWidth="0.5" strokeOpacity="0.35" />
                <rect x="56" y="352" width="180" height="170" stroke="#C48A45" strokeWidth="0.5" strokeOpacity="0.35" />
                <rect x="256" y="52" width="168" height="200" stroke="#C48A45" strokeWidth="0.5" strokeOpacity="0.35" />
                <rect x="256" y="272" width="168" height="130" stroke="#C48A45" strokeWidth="0.5" strokeOpacity="0.35" />
                <rect x="256" y="422" width="168" height="100" stroke="#C48A45" strokeWidth="0.5" strokeOpacity="0.35" />
                {/* Dimension lines */}
                <line x1="32" y1="20" x2="448" y2="20" stroke="#C48A45" strokeWidth="0.4" strokeOpacity="0.2" />
                <line x1="32" y1="14" x2="32" y2="26" stroke="#C48A45" strokeWidth="0.4" strokeOpacity="0.2" />
                <line x1="448" y1="14" x2="448" y2="26" stroke="#C48A45" strokeWidth="0.4" strokeOpacity="0.2" />
                <line x1="22" y1="28" x2="22" y2="552" stroke="#C48A45" strokeWidth="0.4" strokeOpacity="0.2" />
                <line x1="16" y1="28" x2="28" y2="28" stroke="#C48A45" strokeWidth="0.4" strokeOpacity="0.2" />
                <line x1="16" y1="552" x2="28" y2="552" stroke="#C48A45" strokeWidth="0.4" strokeOpacity="0.2" />
                {/* Grid lines */}
                <line x1="236" y1="28" x2="236" y2="552" stroke="#C48A45" strokeWidth="0.4" strokeOpacity="0.12" strokeDasharray="4 6" />
                <line x1="32" y1="192" x2="448" y2="192" stroke="#C48A45" strokeWidth="0.4" strokeOpacity="0.12" strokeDasharray="4 6" />
                <line x1="32" y1="332" x2="448" y2="332" stroke="#C48A45" strokeWidth="0.4" strokeOpacity="0.12" strokeDasharray="4 6" />
                {/* Door arcs */}
                <path d="M56 192 Q96 192 96 152" stroke="#C48A45" strokeWidth="0.5" strokeOpacity="0.3" fill="none" />
                <path d="M256 272 Q296 272 296 232" stroke="#C48A45" strokeWidth="0.5" strokeOpacity="0.3" fill="none" />
                {/* Cross markers */}
                <line x1="143" y1="116" x2="155" y2="128" stroke="#C48A45" strokeWidth="0.5" strokeOpacity="0.4" />
                <line x1="155" y1="116" x2="143" y2="128" stroke="#C48A45" strokeWidth="0.5" strokeOpacity="0.4" />
                <line x1="335" y1="148" x2="347" y2="160" stroke="#C48A45" strokeWidth="0.5" strokeOpacity="0.4" />
                <line x1="347" y1="148" x2="335" y2="160" stroke="#C48A45" strokeWidth="0.5" strokeOpacity="0.4" />
                {/* Ghost number */}
                <text x="340" y="530" fontFamily="Cormorant Garamond, serif" fontSize="96" fill="#C48A45" fillOpacity="0.06" fontWeight="700">01</text>
              </svg>

              {/* Glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
                style={{ background: 'radial-gradient(circle,rgba(196,138,69,0.1),transparent 70%)' }}
              />

              {/* Stat chips */}
              <div className="absolute bottom-6 left-6 flex flex-col gap-3">
                {[
                  { val: '24+', lbl: 'Projects' },
                  { val: '4B+', lbl: 'Value Managed' },
                ].map(({ val, lbl }) => (
                  <div
                    key={lbl}
                    className="flex items-center gap-3 px-4 py-2 border border-border backdrop-blur-sm"
                    style={{ background: 'rgba(15,13,11,0.85)' }}
                  >
                    <span className="font-serif font-semibold text-2xl text-copper">{val}</span>
                    <span className="text-[10px] font-bold tracking-[2px] uppercase text-text-dim">{lbl}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
