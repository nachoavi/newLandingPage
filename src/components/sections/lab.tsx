"use client";

import { motion } from "motion/react";
import { Reveal } from "../anim/reveal";

const FEATURED = {
  year: "2025",
  role: "Tech lead + backend",
  title: "Proyecto destacado",
  body:
    "Acá va el caso real que más te enorgullezca. Cliente, dolor que tenía, qué construiste, qué pasó después. Sin metáforas, sin 'transformamos la industria'. Datos concretos: latencia bajó X, costo bajó Y, el equipo creció de A a B.",
  tags: ["Postgres", "Node", "AWS"],
  link: "#",
};

const SECONDARY = [
  {
    year: "2024",
    title: "Algo que shippeaste el año pasado",
    body:
      "Una línea sobre qué hacía y por qué lo recordás. Si fue un MVP que después escaló, mejor.",
    tags: ["Next.js", "Stripe"],
  },
  {
    year: "2023",
    title: "El side-project que no abandonaste",
    body:
      "Lo personal que sigue vivo. La gente conecta más con esto que con el roadmap del trabajo.",
    tags: ["Rust", "CLI"],
  },
];

export function Lab() {
  return (
    <section
      id="lab"
      className="py-24 md:py-32 px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) bg-surface-container-lowest border-b-2 border-outline relative overflow-hidden"
    >
      <Reveal className="mb-16 md:mb-24 max-w-3xl">
        <div className="font-mono text-[12px] text-tertiary mb-6">— 02 / Trabajo</div>
        <h2 className="font-display uppercase text-[clamp(40px,7vw,96px)] leading-[0.88]">
          Cosas que <span className="italic normal-case lowercase">construí</span>
          <br />
          y siguen en pie.
        </h2>
      </Reveal>

      {/* Featured — asymmetric, takes 8/12 cols */}
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-20 lg:mb-32 group"
      >
        <div className="lg:col-span-7 lg:col-start-1 aspect-[5/4] lg:aspect-[16/11] bg-surface relative overflow-hidden border-2 border-outline">
          <div className="absolute inset-0 bg-gradient-to-br from-tertiary/20 via-transparent to-tertiary/5" />
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute inset-0 flex items-end p-8">
            <span className="font-display text-[clamp(80px,12vw,200px)] text-stroke leading-none">
              01
            </span>
          </div>
        </div>

        <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-end gap-6">
          <div className="font-mono text-[12px] text-outline flex gap-6">
            <span>{FEATURED.year}</span>
            <span>{FEATURED.role}</span>
          </div>
          <h3 className="font-display uppercase text-[clamp(28px,3.5vw,48px)] leading-[0.95]">
            {FEATURED.title}
          </h3>
          <p className="text-[16px] leading-relaxed text-on-surface-variant">{FEATURED.body}</p>
          <div className="flex flex-wrap gap-2">
            {FEATURED.tags.map((t) => (
              <span key={t} className="font-mono text-[11px] text-on-surface-variant border border-outline-variant px-2 py-1">
                {t}
              </span>
            ))}
          </div>
          <a
            href={FEATURED.link}
            className="inline-flex items-center gap-2 font-mono text-[12px] mt-2 border-b border-on-background pb-1 self-start hover:text-tertiary hover:border-tertiary"
          >
            Leer caso completo →
          </a>
        </div>
      </motion.article>

      {/* Secondary — two side-by-side, different sizes */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        {SECONDARY.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            className={
              i === 0
                ? "md:col-span-7 border-t-2 border-outline pt-8"
                : "md:col-span-4 md:col-start-9 border-t-2 border-outline pt-8 md:mt-16"
            }
          >
            <div className="font-mono text-[12px] text-outline mb-3">— {p.year}</div>
            <h4 className="font-display uppercase text-[clamp(24px,3vw,40px)] leading-[1] mb-4">
              {p.title}
            </h4>
            <p className="text-[15px] leading-relaxed text-on-surface-variant mb-4 max-w-md">
              {p.body}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="font-mono text-[11px] text-on-surface-variant">
                  · {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      {/* Margin note — handwritten feel */}
      <div className="mt-20 max-w-md font-mono text-[13px] text-outline italic leading-relaxed">
        <span className="text-tertiary">*</span> No pongo screenshots porque la mayoría de
        lo que hago vive detrás de un login o de un NDA. Si querés ver código real,
        mandame un mensaje.
      </div>
    </section>
  );
}
