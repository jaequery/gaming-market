"use client";

import { useEffect, useRef } from "react";

// One IntersectionObserver fades up every card in the grid with a 40ms stagger.
export function RevealGrid({ className, children }: { className: string; children: React.ReactNode }) {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const grid = ref.current;
    if (!grid) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = Array.from(grid.querySelectorAll<HTMLElement>("[data-reveal]"));
    grid.classList.add("is-armed");

    const observer = new IntersectionObserver(
      (entries) => {
        const entering = entries.filter((e) => e.isIntersecting);
        entering.forEach((entry, i) => {
          const el = entry.target as HTMLElement;
          el.style.transitionDelay = `${i * 40}ms`;
          el.classList.add("is-in");
          observer.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <ul ref={ref} className={className}>
      {children}
    </ul>
  );
}
