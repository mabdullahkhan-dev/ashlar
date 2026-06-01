import Link from 'next/link';
import { footerServices, footerCompany } from '@/lib/data';

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/ashlar.pk',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/ashlar.pk',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/ashlar-pk',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/923391280001',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-bg-base border-t border-border">
      <div className="max-w-[1280px] mx-auto px-14 max-md:px-6">
        {/* Top grid */}
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-12 py-20 border-b border-border">
          {/* Brand col */}
          <div>
            <div className="flex items-end mb-[18px]">
              <span className="font-serif font-bold text-[17px] tracking-[4px] uppercase text-text-primary leading-none">
                Ashlar
              </span>
              <span className="w-[5px] h-[5px] rounded-sm bg-copper ml-[3px] mb-[2px] inline-block" />
            </div>
            <p className="text-[13px] text-text-dim leading-[1.7] max-w-[260px] mb-6">
              Construction Engineering & Project Management. One firm, from the first drawing to the last brick.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-text-dim hover:text-copper transition-colors duration-200 cursor-none"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services col */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[3px] uppercase text-text-dim mb-5">
              Services
            </h4>
            <ul className="flex flex-col gap-3 list-none">
              {footerServices.map(s => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-[13px] text-text-secondary hover:text-copper-light transition-colors duration-200 cursor-none"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company col */}
          <div>
            <h4 className="text-[10px] font-bold tracking-[3px] uppercase text-text-dim mb-5">
              Company
            </h4>
            <ul className="flex flex-col gap-3 list-none">
              {footerCompany.map(c => (
                <li key={c}>
                  <Link
                    href={`/${c.toLowerCase()}`}
                    className="text-[13px] text-text-secondary hover:text-copper-light transition-colors duration-200 cursor-none"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-center flex-wrap gap-3 py-7">
          <span className="text-[11px] text-text-dim tracking-[0.5px]">
            © 2026 Ashlar Construction Engineering
          </span>
          <span className="text-[11px] tracking-[0.5px]" style={{ color: 'rgba(196,138,69,0.55)' }}>
            PEC Registered Consulting Firm · Lahore
          </span>
        </div>
      </div>
    </footer>
  );
}
