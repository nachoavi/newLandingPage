"use client";

import { motion } from "motion/react";
import { Reveal } from "../anim/reveal";

const TOOLS = [
  { name: "TypeScript", since: "desde 2019", note: "todavía discuto si vale la pena en proyectos chicos. casi siempre sí." },
  { name: "PostgreSQL", since: "siempre", note: "antes de buscar otra base, leí los docs de la que uso." },
  { name: "Next.js", since: "desde la 12", note: "tiene defectos. me los banco." },
  { name: "Node + Fastify", since: "lo que decida el equipo", note: "express si hay legacy. fastify si lo elijo yo." },
  { name: "Tailwind", since: "desde la v2", note: "sí, leí las críticas. no me convencieron." },
  { name: "Docker + AWS", since: "el día a día", note: "lo justo. no soy DevOps puro." },
  { name: "Rust", since: "en side projects", note: "para herramientas que tienen que ser rápidas y no fallar." },
  { name: "Git, terminal, neovim", since: "hace rato", note: "el IDE es opinión, no religión." },
];

export function Stack() {
  return (
    <section
      id="protocol"
      className="relative border-b-2 border-outline bg-background overflow-hidden"
    >
      <div className="py-24 md:py-32 px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop)">
        <Reveal className="mb-16 md:mb-20 max-w-3xl">
          <div className="font-mono text-[12px] text-tertiary mb-6">— 03 / Herramientas</div>
          <h2 className="font-display uppercase text-[clamp(40px,7vw,96px)] leading-[0.88]">
            Con lo que <span className="italic normal-case lowercase">trabajo</span>
            <br />
            todos los días.
          </h2>
          <p className="mt-8 text-[16px] text-on-surface-variant max-w-xl leading-relaxed">
            No es una lista de buzzwords. Son las herramientas que sé bien — y la
            opinión que tengo sobre cada una.
          </p>
        </Reveal>

        <div className="max-w-4xl">
          {TOOLS.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-12 gap-4 py-5 border-t border-outline-variant items-baseline group hover:bg-surface-container-low transition-colors"
            >
              <div className="col-span-1 font-mono text-[12px] text-outline">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="col-span-11 md:col-span-3 font-display uppercase text-[24px] md:text-[28px] leading-none group-hover:text-tertiary transition-colors">
                {tool.name}
              </div>
              <div className="col-span-6 md:col-span-2 font-mono text-[12px] text-outline col-start-2 md:col-start-auto">
                {tool.since}
              </div>
              <div className="col-span-12 md:col-span-6 text-[15px] text-on-surface-variant leading-relaxed">
                {tool.note}
              </div>
            </motion.div>
          ))}
          <div className="border-t border-outline-variant py-5 font-mono text-[12px] text-outline">
            *También uso lo que el proyecto necesite. La herramienta no es la respuesta — el criterio sí.
          </div>
        </div>
      </div>
    </section>
  );
}
