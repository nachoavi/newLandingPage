"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="min-h-screen flex flex-col justify-end px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) relative overflow-hidden border-b-2 border-outline pt-32 pb-16"
    >
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 grid-bg pointer-events-none"
        aria-hidden
      />

      <motion.div style={{ opacity: fade }} className="max-w-(--spacing-container-max) mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-[12px] text-outline mb-8"
        >
          ↳ Ignacio San Martín, La Unión / Chile
        </motion.div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.1 }}
          className="font-display uppercase mb-12 leading-[0.86] tracking-tighter text-[clamp(56px,12vw,180px)]"
        >
          Hago{" "}
          <span className="italic font-display text-tertiary normal-case lowercase tracking-tight">
            software
          </span>
          <br />
          que dura.
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:col-span-6 lg:col-span-5 text-[18px] leading-[1.55] text-on-surface-variant"
          >
            Trabajo con equipos chicos en proyectos que importan. Backend,
            arquitectura, y la parte aburrida que hace que un producto no se
            caiga el día que llega tracción.
            <br />
            <br />
            No vendo magia. Vendo decisiones técnicas que se sostienen en seis
            meses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="md:col-span-5 md:col-start-8 flex flex-col gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-between gap-3 border-b-2 border-on-background pb-3 text-[16px] hover:border-tertiary hover:text-tertiary transition-colors"
            >
              <span>Mandame un correo</span>
              <span className="font-mono text-[14px] group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#lab"
              className="group inline-flex items-center justify-between gap-3 border-b-2 border-outline-variant pb-3 text-[16px] text-on-surface-variant hover:border-tertiary hover:text-tertiary transition-colors"
            >
              <span>Mirá en qué ando</span>
              <span className="font-mono text-[14px] group-hover:translate-x-1 transition-transform">↓</span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
