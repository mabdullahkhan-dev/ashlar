'use client';
import { useState } from 'react';
import Kicker from '@/components/shared/Kicker';
import ScrollReveal from '@/components/shared/ScrollReveal';

const faqs = [
  {
    q: 'What services does Ashlar offer?',
    a: 'We provide Architectural Design, Grey Structure construction, Turnkey Construction, and Renovation & Remodeling. All services are delivered under one contract so you have a single point of accountability from the first drawing to the final handover.',
  },
  {
    q: 'What is grey structure, and why does quality matter?',
    a: 'Grey structure is everything from the foundation to the roof slab — the load-bearing skeleton of your building. Cutting corners here cannot be fixed later. We use A+ quality materials, certified contractors, and structural testing at every milestone so your building stands for generations.',
  },
  {
    q: 'Do you handle authority approvals and building permits?',
    a: 'Yes. Approvals coordination is part of our Architectural Design service. We prepare the required drawings and liaise with the relevant authorities on your behalf so you do not have to navigate the process alone.',
  },
  {
    q: 'Can you manage a renovation on a property I already own?',
    a: 'Absolutely. Our Renovation & Remodeling service covers everything from a single room refresh to a full structural remodel. We assess the condition of the existing structure, define a clear scope, estimate costs transparently, and manage the contractors from start to finish.',
  },
  {
    q: 'How do you protect my budget during construction?',
    a: 'Every contractor invoice is checked against actual work completed before you release a payment. We provide weekly cost and progress reports, and every variation from the original scope is documented and approved by you in writing before work proceeds.',
  },
  {
    q: 'Do I need to be on site every day?',
    a: 'No. That is precisely what we are there for. Our team provides daily site supervision and sends you a structured progress update each week. You stay informed without being pulled away from your life.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i));

  return (
    <section className="py-[130px]" style={{ background: 'var(--color-bg-raised)' }}>
      <div className="max-w-[1280px] mx-auto px-14 max-md:px-6">
        <div className="grid grid-cols-[1fr_1.6fr] max-lg:grid-cols-1 gap-16 max-lg:gap-10">
          {/* Left — sticky heading */}
          <div className="max-lg:pb-0">
            <ScrollReveal>
              <Kicker>FAQ</Kicker>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2 className="font-serif font-semibold text-[clamp(32px,4vw,54px)] text-text-primary mt-5 leading-[1.05]">
                Questions<br />
                <em className="not-italic italic text-copper-deep">answered.</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={2}>
              <p className="text-[15px] text-text-secondary leading-[1.85] mt-4 max-w-[360px]">
                Everything you want to know before starting your project.
              </p>
            </ScrollReveal>
          </div>

          {/* Right — accordion */}
          <div className="border-t border-border">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-border">
                <button
                  className="w-full flex justify-between items-center gap-6 py-7 text-left cursor-none"
                  onClick={() => toggle(i)}
                >
                  <span
                    className={`font-serif font-medium text-[clamp(17px,1.8vw,21px)] leading-[1.25] transition-colors duration-300 ${
                      open === i ? 'text-copper-deep' : 'text-text-primary'
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-[30px] h-[30px] flex items-center justify-center border text-[15px] text-text-dim transition-all duration-350 ${
                      open === i
                        ? 'rotate-45 bg-copper border-copper text-bg-base'
                        : 'border-border hover:border-copper hover:text-copper'
                    }`}
                    style={{ borderRadius: '50%' }}
                  >
                    +
                  </span>
                </button>
                <div className={`accordion-body ${open === i ? 'open' : ''}`}>
                  <p className="text-[15px] text-text-secondary leading-[1.85] pb-7 max-w-[640px]">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
