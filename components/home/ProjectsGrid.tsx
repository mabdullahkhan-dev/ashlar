'use client';
import { useState } from 'react';
import Link from 'next/link';
import Kicker from '@/components/shared/Kicker';
import ScrollReveal from '@/components/shared/ScrollReveal';
import { projects, projectGradients } from '@/lib/data';

interface ProjectsGridProps {
  preview?: boolean;
  showFilters?: boolean;
}

const filters = ['all', 'turnkey', 'design', 'pmc'];

export default function ProjectsGrid({ preview = false, showFilters = false }: ProjectsGridProps) {
  const [active, setActive] = useState('all');
  const list = preview
    ? projects.slice(0, 5)
    : active === 'all'
      ? projects
      : projects.filter(p => p.type === active);

  return (
    <section className="py-[130px]" style={{ background: preview ? 'var(--color-bg-raised)' : 'var(--color-bg-base)' }}>
      <div className="max-w-[1280px] mx-auto px-14 max-md:px-6">
        {/* Header */}
        <div className="flex justify-between items-end flex-wrap gap-6 mb-12">
          <div>
            <ScrollReveal>
              <Kicker>Selected Work</Kicker>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <h2 className="font-serif font-semibold text-[clamp(32px,4vw,54px)] text-text-primary mt-5 leading-[1.05]">
                Homes we've<br /><em className="not-italic italic text-copper-deep">delivered.</em>
              </h2>
            </ScrollReveal>
          </div>

          {/* Filters or link */}
          {showFilters ? (
            <ScrollReveal delay={2}>
              <div className="flex gap-0.5 flex-wrap">
                {filters.map(f => (
                  <button
                    key={f}
                    onClick={() => setActive(f)}
                    className={`text-[10px] font-bold tracking-[2px] uppercase px-[18px] py-[10px] border cursor-none transition-all duration-200 ${
                      active === f
                        ? 'bg-text-primary text-bg-base border-text-primary'
                        : 'bg-transparent text-text-secondary border-border hover:border-copper hover:text-text-primary'
                    }`}
                  >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          ) : (
            <ScrollReveal delay={2}>
              <Link
                href="/projects"
                className="text-[11px] font-semibold tracking-[2px] uppercase text-text-primary cursor-none inline-flex items-center gap-2 group transition-colors duration-250 hover:text-copper"
              >
                View all <span className="transition-transform duration-250 group-hover:translate-x-[5px]">→</span>
              </Link>
            </ScrollReveal>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-6 max-md:grid-cols-2 max-sm:grid-cols-1 gap-0.5">
          {list.map((p, i) => {
            const spanClass =
              p.size === 'big'  ? 'col-span-3 max-md:col-span-1' :
              p.size === 'wide' ? 'col-span-4 max-md:col-span-2 max-sm:col-span-1' :
              'col-span-2 max-md:col-span-1';

            const aspectClass =
              p.size === 'big'  ? 'aspect-[3/2]' :
              p.size === 'wide' ? 'aspect-[2/1]' :
              'aspect-square';

            return (
              <div
                key={p.id}
                className={`relative overflow-hidden cursor-none group ${spanClass} ${aspectClass} max-md:aspect-[4/3]`}
              >
                {/* Background */}
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{ background: projectGradients[(p.id - 1) % projectGradients.length] }}
                >
                  {/* Blueprint lines overlay */}
                  <svg className="absolute inset-0 w-full h-full opacity-[0.15]" viewBox="0 0 400 300" preserveAspectRatio="none">
                    <rect x="40" y="34" width="320" height="232" fill="none" stroke="#C48A45" strokeWidth="0.8" />
                    <line x1="40" y1="120" x2="360" y2="120" stroke="#C48A45" strokeWidth="0.5" />
                    <line x1="170" y1="34" x2="170" y2="266" stroke="#C48A45" strokeWidth="0.5" />
                    <line x1="265" y1="120" x2="265" y2="266" stroke="#C48A45" strokeWidth="0.5" />
                  </svg>
                </div>

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 z-10 transition-opacity duration-400 group-hover:opacity-90"
                  style={{
                    background: 'linear-gradient(to top, rgba(15,13,11,0.88), rgba(15,13,11,0.1) 55%, transparent)',
                    opacity: 0.55,
                  }}
                />

                {/* Project number */}
                <span className="absolute top-[22px] right-6 font-serif text-[13px] z-20" style={{ color: 'rgba(240,234,224,0.45)' }}>
                  0{p.id}
                </span>

                {/* Meta */}
                <div
                  className="absolute left-0 right-0 bottom-0 p-7 z-20 translate-y-2 opacity-85 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-[5px] h-[5px] rounded-full bg-copper-light inline-block" />
                    <span className="text-[10px] font-bold tracking-[2px] uppercase text-copper-light">{p.stat}</span>
                  </div>
                  <div className="font-serif font-semibold text-[22px] text-text-primary leading-[1.1] mb-1">{p.title}</div>
                  <div className="text-[12px]" style={{ color: 'rgba(240,234,224,0.55)' }}>{p.location}</div>
                </div>

                {/* Left border on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-copper opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-30" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
