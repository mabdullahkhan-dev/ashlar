import { stats } from '@/lib/data';

interface StatsGridProps {
  bg?: string;
}

export default function StatsGrid({ bg }: StatsGridProps) {
  return (
    <section className="py-[110px]" style={{ background: bg ?? 'var(--color-bg-base)' }}>
      <div className="max-w-[1280px] mx-auto px-14 max-md:px-6">
        <div className="grid grid-cols-4 max-md:grid-cols-2 gap-x-0 divide-x max-md:divide-x-0 divide-border">
          {stats.map(({ value, label }) => (
            <div key={label} className="px-8 first:pl-0 last:pr-0 max-md:px-6 max-md:py-8 max-md:border-b max-md:border-border odd:max-md:border-r odd:max-md:border-border last:max-md:border-b-0 [&:nth-child(2)]:max-md:border-b">
              <div className="font-serif font-semibold text-[clamp(48px,5.5vw,72px)] leading-none tracking-[-0.02em] text-text-primary">
                {value.includes('+') || value.includes('%') || value.includes('B') ? (
                  <>
                    <span>{value.replace(/[+%]|B\+?/g, (m) => '')}</span>
                    <span className="text-copper">{value.match(/[+%]|B\+?/)?.[0]}</span>
                  </>
                ) : (
                  value
                )}
              </div>
              <div className="text-[11px] font-bold tracking-[2px] uppercase text-text-dim mt-4 pt-4 border-t border-border">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
