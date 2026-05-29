"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useState, useEffect } from "react";

const NAV = [
  { label: "Trabajo", href: "#lab" },
  { label: "Herramientas", href: "#protocol" },
  { label: "Creencias", href: "#vision" },
  { label: "Contacto", href: "#contact" },
];

export function Header() {
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(19,19,19,0)", "rgba(19,19,19,0.85)"]
  );
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const [active, setActive] = useState<string>("Trabajo");

  useEffect(() => {
    const ids = NAV.map((n) => n.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const found = NAV.find((n) => n.href === `#${e.target.id}`);
            if (found) setActive(found.label);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      style={{ backgroundColor: bg }}
      className="fixed top-0 left-0 w-full z-40 backdrop-blur-md"
    >
      <motion.div
        style={{ opacity: borderOpacity }}
        className="absolute bottom-0 left-0 w-full h-px bg-outline"
      />
      <div className="flex justify-between items-center px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) py-4">
        <motion.a
          href="#top"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(24px,3vw,32px)] uppercase tracking-tight leading-none"
        >
          IGNACIO<span className="text-tertiary">.</span>SM
        </motion.a>

        <nav className="hidden md:flex gap-8 items-center">
          {NAV.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`font-mono text-[12px] tracking-wide transition-colors relative ${
                active === item.label
                  ? "text-tertiary"
                  : "text-on-surface-variant hover:text-on-background"
              }`}
            >
              {item.label}
              {active === item.label && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-tertiary"
                />
              )}
            </motion.a>
          ))}
        </nav>

        <motion.a
          href="mailto:luis17.sanmartin@gmail.com"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hidden sm:inline-block font-mono text-[12px] text-on-surface-variant hover:text-tertiary transition-colors"
        >
          escribime →
        </motion.a>
      </div>
    </motion.header>
  );
}
