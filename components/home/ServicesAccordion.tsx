'use client';
import { useState } from 'react';
import Link from 'next/link';
import Kicker from '@/components/shared/Kicker';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { services } from '@/lib/data';

interface ServicesAccordionProps {
  preview?: boolean;
}

export default function ServicesAccordion({ preview = false }: ServicesAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);
  const list = preview ? services.slice(0, 3) : services;

  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i));

  return (
    <section className="py-[130px]" style={{ background: 'var(--color-bg-base)' }}>
      <div className="max-w-[1280px] mx-auto px-14 max-md:px-6">
        {/* Header */}
        <div className="flex justify-between items-end flex-wrap gap-6 mb-6">
          <div>
            <ScrollReveal>
              <Kicker>What We Do</Kicker>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2 className="font-serif font-semibold text-[clamp(32px,4vw,54px)] text-text-primary mt-5 leading-[1.05]">
                {preview ? (
                  <>Three services,<br />one accountable team.</>
                ) : (
                  <>Integrated services.<br /><em className="not-italic italic text-copper-deep">A single contract.</em></>
                )}
              </h2>
            </ScrollReveal>
            {!preview && (
              <ScrollReveal delay={2}>
                <p className="text-[16px] text-text-secondary max-w-[540px] leading-[1.85] mt-4">
                  You don't manage the seams between design, cost, and construction. We do — because we're the only firm in the room.
                </p>
              </ScrollReveal>
            )}
          </div>
          {preview && (
            <ScrollReveal delay={2}>
              <Link
                href="/services"
                className="text-[11px] font-semibold tracking-[2px] uppercase text-text-primary cursor-none inline-flex items-center gap-2 group transition-colors duration-250 hover:text-copper"
              >
                All services <span className="transition-transform duration-250 group-hover:translate-x-[5px]">→</span>
              </Link>
            </ScrollReveal>
          )}
        </div>

        {/* Accordion list */}
        <div className="border-t border-border">
          {list.map((svc, i) => (
            <div key={svc.n} className="border-b border-border cursor-none">
              {/* Row trigger */}
              <div
                className="grid grid-cols-[80px_1fr_auto] max-sm:grid-cols-[40px_1fr_auto] gap-6 max-sm:gap-3 py-9 transition-transform duration-400 md:hover:translate-x-3 cursor-none"
                onClick={() => toggle(i)}
              >
                <span className="font-serif text-[16px] text-copper font-medium">{svc.n}</span>
                <span
                  className={`font-serif font-semibold text-[clamp(24px,3vw,40px)] leading-[1.05] transition-colors duration-300 ${
                    open === i ? 'text-copper-deep' : 'text-text-primary'
                  }`}
                >
                  {svc.name}
                </span>
                <span
                  className={`w-[34px] h-[34px] flex items-center justify-center border text-[16px] text-text-dim transition-all duration-350 ${
                    open === i
                      ? 'rotate-45 bg-copper border-copper text-bg-base'
                      : 'border-border hover:border-copper hover:text-copper'
                  }`}
                  style={{ borderRadius: '50%' }}
                >
                  +
                </span>
              </div>

              {/* Body */}
              <div className={`accordion-body ${open === i ? 'open' : ''}`}>
                <div className="grid grid-cols-[80px_1.2fr_1fr] max-md:grid-cols-1 gap-8 max-md:gap-5 pb-10">
                  <div />
                  <p className="text-[15px] text-text-secondary leading-[1.85]">{svc.desc}</p>
                  <ul className="flex flex-col gap-[9px] list-none">
                    {svc.scope.map(item => (
                      <li
                        key={item}
                        className="text-[13px] font-medium text-text-primary flex items-center gap-3"
                      >
                        <span className="inline-block w-[14px] h-px bg-copper flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
