"use client";

import { motion } from "motion/react";
import { Reveal } from "../anim/reveal";

const BELIEFS = [
  {
    n: "01",
    h: "Los conceptos antes que el código.",
    p: "Si no sabes qué es el DOM, no vas a entender React. Si no entiendes transacciones, Postgres te va a sorprender feo. Los atajos no existen — solo deuda postergada.",
  },
  {
    n: "02",
    h: "La IA es herramienta, no autor.",
    p: "La uso todos los días. También sé cuándo me está mintiendo. La diferencia entre un dev que aprovecha la IA y uno que la sufre es saber cuándo apagarla.",
  },
  {
    n: "03",
    h: "El código se lee más de lo que se escribe.",
    p: "Optimizo para la persona que va a leer esto en seis meses, especialmente si soy yo. Nombres claros, funciones cortas, decisiones explícitas en comentarios cuando hace falta.",
  },
  {
    n: "04",
    h: "Si rompe en producción, es mi problema.",
    p: "No importa de quién es el bug. Mi nombre estuvo cerca del código. Aprendo del incidente, mejoro el sistema, y sigo.",
  },
  {
    n: "05",
    h: "Lo simple es lo difícil.",
    p: "Cualquiera puede agregar una capa de abstracción. Saber cuándo NO hacerlo — y borrar las que ya no aportan — es el trabajo real.",
  },
];

export function Vision() {
  return (
    <section
      id="vision"
      className="py-24 md:py-32 px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) bg-background relative overflow-hidden border-b-2 border-outline"
    >
      <div className="max-w-(--spacing-container-max) mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
          <Reveal>
            <div className="font-mono text-[12px] text-tertiary mb-6">— 04 / Creencias</div>
            <h2 className="font-display uppercase text-[clamp(40px,6vw,80px)] leading-[0.88]">
              Lo que creo,
              <br />
              <span className="italic normal-case lowercase">por escrito.</span>
            </h2>
            <p className="mt-8 text-[15px] text-on-surface-variant leading-relaxed max-w-sm">
              Cinco cosas que defiendo. No son universales — son las mías. Si
              alguna no te hace sentido, mejor: conversemos.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          {BELIEFS.map((b, i) => (
            <motion.div
              key={b.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="border-t-2 border-outline py-10"
            >
              <div className="flex items-baseline gap-6 mb-4">
                <span className="font-mono text-[14px] text-tertiary">{b.n}</span>
                <h3 className="font-display uppercase text-[clamp(22px,2.6vw,36px)] leading-[1.1]">
                  {b.h}
                </h3>
              </div>
              <p className="text-[16px] leading-relaxed text-on-surface-variant pl-12">
                {b.p}
              </p>
            </motion.div>
          ))}

          <div className="border-t-2 border-outline pt-10 font-mono text-[12px] text-outline">
            — Ignacio. La Unión, Chile.
            <br />
            <span className="italic normal-case lowercase text-[14px]">
              (revisado por última vez en 2026)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
