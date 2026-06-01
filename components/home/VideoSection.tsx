import Kicker from '@/components/shared/Kicker';
import ScrollReveal from '@/components/shared/ScrollReveal';

export default function VideoSection() {
  return (
    <section className="py-[130px]" style={{ background: 'var(--color-bg-base)' }}>
      <div className="max-w-[1280px] mx-auto px-14 max-md:px-6">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-16 items-start">
          {/* Text */}
          <div>
            <ScrollReveal>
              <Kicker>Inside Ashlar</Kicker>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2 className="font-serif font-semibold text-[clamp(32px,4vw,54px)] text-text-primary mt-5 mb-5 leading-[1.05]">
                See how we build,<br />
                <em className="not-italic italic text-copper-deep">before you trust us to.</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p className="text-[16px] text-text-secondary leading-[1.85] max-w-[520px]">
                A walk through our process, our standards, and the homes we've delivered — so you know exactly who you're working with before the first meeting.
              </p>
            </ScrollReveal>
          </div>

          {/* Video frame */}
          <ScrollReveal delay={2}>
            <div
              className="relative overflow-hidden border border-border"
              style={{ aspectRatio: '16/9', background: 'var(--color-bg-card)' }}
            >
              {/* Placeholder — swap for <iframe> when video ID is ready */}
              <div className="absolute inset-0 flex flex-col items-center justify-center cursor-none group">
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg,rgba(196,138,69,0.07),transparent 60%)' }}
                />
                <div
                  className="relative z-10 w-[84px] h-[84px] flex items-center justify-center border border-white/20 transition-all duration-300 group-hover:bg-copper/85 group-hover:border-copper group-hover:scale-105"
                  style={{ background: 'rgba(15,13,11,0.6)', backdropFilter: 'blur(16px)' }}
                >
                  <svg className="w-6 h-6 fill-text-primary ml-1" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="relative z-10 mt-6 text-[11px] font-bold tracking-[3px] uppercase text-text-dim">
                  Watch the Film
                </div>
                <div className="relative z-10 mt-2 font-serif text-xl text-text-primary">
                  The Ashlar Standard
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
