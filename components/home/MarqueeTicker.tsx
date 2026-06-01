import { marqItems } from '@/lib/data';

export default function MarqueeTicker() {
  const doubled = [...marqItems, ...marqItems];
  return (
    <div
      className="marquee-wrap py-[18px] overflow-hidden"
      style={{ background: 'var(--color-bg-card)', borderTop: '1px solid var(--color-copper)', borderBottom: '1px solid var(--color-copper)' }}
    >
      <div className="marquee-track flex items-center whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center text-[11px] font-bold tracking-[3px] uppercase text-text-secondary px-8"
          >
            {item}
            <span className="ml-8 inline-block w-1 h-1 rounded-full bg-copper flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
