interface KickerProps {
  children: React.ReactNode;
  light?: boolean;
}

export default function Kicker({ children, light }: KickerProps) {
  return (
    <span
      className={`inline-flex items-center gap-3 text-[10px] font-bold tracking-[4px] uppercase ${
        light ? 'text-copper-light' : 'text-copper'
      }`}
    >
      <span
        className={`inline-block w-6 h-px flex-shrink-0 ${
          light ? 'bg-copper-light' : 'bg-copper'
        }`}
      />
      {children}
    </span>
  );
}
