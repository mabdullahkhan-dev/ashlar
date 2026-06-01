import Link from 'next/link';

interface CtaBannerProps {
  heading: React.ReactNode;
  body: string;
  cta?: string;
}

export default function CtaBanner({
  heading,
  body,
  cta = 'Start a Project',
}: CtaBannerProps) {
  return (
    <section
      className="py-[120px] text-center relative overflow-hidden"
      style={{ background: 'var(--color-bg-base)' }}
    >
      {/* Radial copper glow — dead centre */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(196,138,69,0.13), transparent 70%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-14 max-md:px-6 relative z-10">
        <h2
          className="font-serif font-semibold leading-[1.0] tracking-[-0.02em] text-text-primary mb-6"
          style={{ fontSize: 'clamp(40px,6vw,82px)' }}
        >
          {heading}
        </h2>

        <p
          className="text-[15px] max-w-[460px] mx-auto mb-11 leading-[1.8]"
          style={{ color: 'rgba(240,234,224,0.5)' }}
        >
          {body}
        </p>

        <Link
          href="/contact"
          className="cta-btn inline-flex text-[11px] font-bold tracking-[2px] uppercase px-10 py-[18px] cursor-none transition-colors duration-250 whitespace-nowrap"
        >
          {cta}
        </Link>
      </div>

      <style>{`
        .cta-btn {
          background: var(--color-copper);
          color: var(--color-bg-base);
        }
        .cta-btn:hover {
          background: var(--color-copper-light);
        }
      `}</style>
    </section>
  );
}
