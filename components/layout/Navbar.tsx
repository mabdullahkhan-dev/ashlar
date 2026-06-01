'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navLinks } from '@/lib/data';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      {/* ── Floating pill nav ── */}
      <div
        className="fixed left-0 right-0 z-50 flex justify-center px-6 transition-all duration-400"
        style={{ top: scrolled ? '14px' : '22px' }}
      >
        <nav
          className="flex items-center gap-2 rounded-full border pl-[22px] pr-[9px] py-[9px]"
          style={{
            background: 'rgba(15,13,11,0.72)',
            backdropFilter: 'blur(24px) saturate(160%)',
            WebkitBackdropFilter: 'blur(24px) saturate(160%)',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.45), inset 0 1px 1px rgba(255,255,255,0.05)',
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-end pr-2 cursor-none">
            <span className="font-serif font-bold text-base tracking-[3px] uppercase text-text-primary leading-none">
              Ashlar
            </span>
            <span className="w-[5px] h-[5px] rounded-sm bg-copper ml-[3px] mb-[2px] inline-block" />
          </Link>

          {/* Divider */}
          <span className="w-px h-5 bg-border mx-1" />

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-0.5 list-none">
            {navLinks.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`text-[11px] font-semibold tracking-[0.5px] px-[14px] py-2 rounded-full transition-all duration-250 cursor-none ${
                      active
                        ? 'text-text-primary bg-white/10'
                        : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.07]'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex text-[11px] font-bold tracking-[0.5px] px-5 py-[11px] rounded-full bg-copper text-bg-base cursor-none transition-colors duration-250 hover:bg-copper-deep whitespace-nowrap ml-1"
          >
            Start a Project
          </Link>

          {/* Burger */}
          <button
            className="flex md:hidden flex-col gap-[5px] bg-transparent border-0 cursor-none p-2"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-[1.5px] bg-text-primary transition-transform duration-300 ${menuOpen ? 'translate-y-[6.5px] rotate-45' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-text-primary transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-[1.5px] bg-text-primary transition-transform duration-300 ${menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
          </button>
        </nav>
      </div>

      {/* ── Mobile overlay ── */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center px-8 py-12 transition-opacity duration-400 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'rgba(15,13,11,0.95)',
          backdropFilter: 'blur(32px) saturate(160%)',
          WebkitBackdropFilter: 'blur(32px) saturate(160%)',
        }}
      >
        <ul className="list-none flex flex-col gap-1">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="font-serif font-semibold text-[clamp(40px,11vw,64px)] leading-[1.18] text-text-secondary hover:text-text-primary transition-colors duration-200 cursor-none"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/contact"
            className="text-[12px] font-bold tracking-[2px] uppercase text-copper cursor-none"
            onClick={() => setMenuOpen(false)}
          >
            Start a Project →
          </Link>
        </div>
      </div>
    </>
  );
}
