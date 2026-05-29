"use client";

import { motion } from "motion/react";
import { Reveal } from "../anim/reveal";

const STACK = [
  { code: "01", name: "TYPESCRIPT", glyph: "TS" },
  { code: "02", name: "NEXT_JS", glyph: "▲" },
  { code: "03", name: "POSTGRES", glyph: "≣" },
  { code: "04", name: "AWS", glyph: "☁" },
  { code: "05", name: "RUST", glyph: "⚙" },
  { code: "06", name: "DOCKER", glyph: "⎈" },
  { code: "07", name: "GRAPHQL", glyph: "◆" },
  { code: "08", name: "VERCEL", glyph: "△" },
];

export function Stack() {
  return (
    <section
      id="protocol"
      className="relative border-b-2 border-outline bg-background overflow-hidden"
    >
      <div className="py-24 md:py-32 px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop)">
        <Reveal className="mb-12 md:mb-20">
          <div className="flex items-baseline gap-4 border-l-4 border-tertiary pl-6">
            <span className="font-mono text-[12px] text-tertiary">/03</span>
            <h2 className="font-display uppercase text-[clamp(40px,7vw,84px)] leading-[0.85]">
              THE STACK
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 mb-16">
          {STACK.map((item, i) => (
            <motion.div
              key={item.code}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{
                duration: 0.5,
                delay: (i % 4) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4 }}
              className="technical-border aspect-square p-4 md:p-5 flex flex-col justify-between hover:bg-tertiary hover:text-background hover:border-tertiary transition-colors group cursor-default"
            >
              <span className="font-mono text-[12px] opacity-60 group-hover:opacity-100">
                {item.code}
              </span>
              <div className="flex flex-col">
                <span className="font-display text-[32px] md:text-[40px] leading-none mb-2 group-hover:scale-110 transition-transform origin-left">
                  {item.glyph}
                </span>
                <span className="font-mono text-[11px] md:text-[12px] tracking-wider">
                  {item.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              k: "// CORE_METHODOLOGY",
              v: "Cada línea de código es una decisión arquitectónica. Priorizo protocolos de 'Reduced Complexity' para que el rendimiento no comprometa la estabilidad del sistema.",
            },
            {
              k: "// DATA_INTEGRITY",
              v: "La seguridad no es una capa: es el cimiento. Encriptación endurecida en cada punto de transacción, garantizando entornos zero-trust para todas las operaciones SaaS.",
            },
          ].map((card, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="p-8 md:p-10 bg-surface-container-high border-2 border-outline hover:border-tertiary transition-colors relative overflow-hidden group">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-tertiary/10 rounded-full blur-3xl group-hover:bg-tertiary/30 transition-colors duration-700" />
                <h4 className="font-mono text-[12px] mb-4 text-tertiary relative">{card.k}</h4>
                <p className="text-[17px] leading-relaxed text-on-surface-variant relative">
                  {card.v}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
