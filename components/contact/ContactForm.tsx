'use client';
import { useState } from 'react';

const steps = [
  { label: 'Step 1 — Your Details' },
  { label: 'Step 2 — Your Project' },
  { label: 'Step 3 — A Few Details' },
];

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  const inputCls = "font-sans text-[15px] text-text-primary bg-transparent border-0 border-b border-border py-3 outline-none transition-colors duration-250 focus:border-copper w-full placeholder:text-text-dim cursor-none";
  const selectCls = inputCls + " appearance-none";
  const labelCls = "text-[10px] font-bold tracking-[1.5px] uppercase text-text-dim block mb-1";

  return (
    <div
      className="relative overflow-hidden p-10 max-sm:p-6"
      style={{
        background: 'var(--color-bg-card)',
        border: '1px solid var(--color-border-bright)',
        borderTop: '2px solid var(--color-copper)',
      }}
    >
      {/* Copper top accent already via borderTop */}

      {!done ? (
        <>
          {/* Progress dots */}
          <div className="flex items-center gap-2.5 mb-9">
            {steps.map((_, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div
                  className={`w-[26px] h-[26px] flex items-center justify-center text-[11px] font-bold font-serif transition-all duration-300 ${
                    i === step
                      ? 'bg-copper border border-copper text-bg-base'
                      : i < step
                        ? 'bg-text-primary border border-text-primary text-bg-base'
                        : 'border border-border text-text-dim'
                  }`}
                  style={{ borderRadius: '50%' }}
                >
                  {i < step ? '✓' : i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="w-8 h-px transition-colors duration-300"
                    style={{ background: i < step ? 'var(--color-text-primary)' : 'var(--color-border)' }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="text-[10px] font-bold tracking-[3px] uppercase text-copper mb-6">
            {steps[step].label}
          </div>

          {/* Step 1 */}
          {step === 0 && (
            <div className="flex flex-col gap-[22px]">
              <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
                <div><label className={labelCls}>Full Name</label><input className={inputCls} type="text" placeholder="Ahmad Khan" /></div>
                <div><label className={labelCls}>Phone / WhatsApp</label><input className={inputCls} type="tel" placeholder="+92 300 0000000" /></div>
              </div>
              <div><label className={labelCls}>Email</label><input className={inputCls} type="email" placeholder="ahmad@example.com" /></div>
              <div className="flex justify-end mt-2">
                <button onClick={() => setStep(1)} className="text-[11px] font-bold tracking-[2px] uppercase px-8 py-[15px] bg-text-primary text-bg-base cursor-none transition-colors duration-250 hover:bg-copper-deep hover:text-bg-base">
                  Continue →
                </button>
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 1 && (
            <div className="flex flex-col gap-[22px]">
              <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
                <div>
                  <label className={labelCls}>Project Type</label>
                  <select className={selectCls}>
                    <option value="">Select…</option>
                    <option>New Construction</option>
                    <option>Renovation / Extension</option>
                    <option>Design Only</option>
                    <option>Grey Structure Only</option>
                    <option>Renovation / Remodeling</option>
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Plot Size</label>
                  <select className={selectCls}>
                    <option value="">Select…</option>
                    <option>5 Marla</option>
                    <option>10 Marla</option>
                    <option>1 Kanal</option>
                    <option>2 Kanal</option>
                    <option>Larger</option>
                  </select>
                </div>
              </div>
              <div><label className={labelCls}>Location</label><input className={inputCls} type="text" placeholder="DHA Phase 6, Lahore" /></div>
              <div>
                <label className={labelCls}>Approximate Budget</label>
                <select className={selectCls}>
                  <option value="">Select…</option>
                  <option>Under PKR 1 Crore</option>
                  <option>PKR 1–2 Crore</option>
                  <option>PKR 2–4 Crore</option>
                  <option>PKR 4–8 Crore</option>
                  <option>Above PKR 8 Crore</option>
                </select>
              </div>
              <div className="flex justify-between items-center mt-2">
                <button onClick={() => setStep(0)} className="text-[11px] font-semibold tracking-[1.5px] uppercase text-text-dim cursor-none transition-colors hover:text-text-primary bg-transparent border-0">← Back</button>
                <button onClick={() => setStep(2)} className="text-[11px] font-bold tracking-[2px] uppercase px-8 py-[15px] bg-text-primary text-bg-base cursor-none transition-colors duration-250 hover:bg-copper-deep hover:text-bg-base">Continue →</button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 2 && (
            <div className="flex flex-col gap-[22px]">
              <div>
                <label className={labelCls}>Tell us about your project</label>
                <textarea className={`${inputCls} resize-none h-[90px] leading-[1.6]`} placeholder="Timeline, requirements, or any specific concerns…" />
              </div>
              <div>
                <label className={labelCls}>How did you hear about us?</label>
                <select className={selectCls}>
                  <option value="">Select…</option>
                  <option>Referral</option>
                  <option>Google</option>
                  <option>Social Media</option>
                  <option>Previous Client</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex justify-between items-center mt-2">
                <button onClick={() => setStep(1)} className="text-[11px] font-semibold tracking-[1.5px] uppercase text-text-dim cursor-none transition-colors hover:text-text-primary bg-transparent border-0">← Back</button>
                <button onClick={() => setDone(true)} className="text-[11px] font-bold tracking-[2px] uppercase px-8 py-[15px] bg-copper text-bg-base cursor-none transition-colors duration-250 hover:bg-copper-deep">Submit Brief</button>
              </div>
            </div>
          )}
        </>
      ) : (
        /* Success */
        <div className="py-5">
          <div className="w-[52px] h-[52px] border border-copper flex items-center justify-center mb-6" style={{ borderRadius: '50%' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C48A45" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h3 className="font-serif text-[32px] font-semibold text-text-primary mb-3">Received. We'll be in touch.</h3>
          <p className="text-[14px] text-text-secondary leading-[1.8] max-w-[380px]">
            Your brief is with our team. We'll be in touch shortly to arrange a site visit.
          </p>
        </div>
      )}
    </div>
  );
}
