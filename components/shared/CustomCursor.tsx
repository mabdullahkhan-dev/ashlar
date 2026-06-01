'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rx = useRef(0);
  const ry = useRef(0);
  const mx = useRef(0);
  const my = useRef(0);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    /* Hide on touch */
    if ('ontouchstart' in window) {
      dot.style.display  = 'none';
      ring.style.display = 'none';
      document.body.style.cursor = 'auto';
      return;
    }

    const onMove = (e: MouseEvent) => {
      mx.current = e.clientX;
      my.current = e.clientY;
      dot.style.left = mx.current + 'px';
      dot.style.top  = my.current + 'px';
    };

    const animate = () => {
      rx.current += (mx.current - rx.current) * 0.12;
      ry.current += (my.current - ry.current) * 0.12;
      ring.style.left = rx.current + 'px';
      ring.style.top  = ry.current + 'px';
      requestAnimationFrame(animate);
    };

    const bindHover = () => {
      document.querySelectorAll('a, button, [data-hover], input, select, textarea').forEach(el => {
        (el as HTMLElement).addEventListener('mouseenter', () => { dot.classList.add('hov'); ring.classList.add('hov'); });
        (el as HTMLElement).addEventListener('mouseleave', () => { dot.classList.remove('hov'); ring.classList.remove('hov'); });
      });
    };

    window.addEventListener('mousemove', onMove);
    requestAnimationFrame(animate);
    bindHover();

    const obs = new MutationObserver(bindHover);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <div id="cur-dot"  ref={dotRef}  />
      <div id="cur-ring" ref={ringRef} />
    </>
  );
}
