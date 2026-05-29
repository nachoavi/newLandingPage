"use client";

import { motion } from "motion/react";
import { Reveal } from "../anim/reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) bg-tertiary text-background relative overflow-hidden"
    >
      <div className="max-w-(--spacing-container-max) mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="font-mono text-[12px] mb-6 opacity-80">— 05 / Hablemos</div>
          </Reveal>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display uppercase text-[clamp(48px,9vw,140px)] leading-[0.86] mb-12"
          >
            Si tienes un<br />
            problema <span className="italic normal-case lowercase">técnico</span>,<br />
            escríbeme.
          </motion.h2>

          <Reveal delay={0.2}>
            <p className="text-[18px] leading-relaxed max-w-xl mb-12 font-medium">
              No tengo formulario. Los formularios se ignoran. Escríbeme un
              correo con el contexto — qué estás construyendo, en qué punto
              estás, qué te traba. Respondo en 24-48 horas si hace sentido
              para los dos.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <a
              href="mailto:luis17.sanmartin@gmail.com?subject=Hola%20Ignacio"
              className="inline-block font-display text-[clamp(28px,4vw,56px)] leading-none border-b-4 border-background hover:border-background/60 transition-colors"
            >
              luis17.sanmartin@gmail.com
            </a>
          </Reveal>
        </div>

        <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-8">
          <Reveal delay={0.2}>
            <div className="font-mono text-[12px] leading-relaxed">
              <div className="opacity-70 mb-1">DÓNDE ESTOY</div>
              <div className="text-[15px]">La Unión, Los Ríos, Chile</div>
              <div className="text-[14px] opacity-80">UTC-04 (CLT)</div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="font-mono text-[12px] leading-relaxed">
              <div className="opacity-70 mb-1">EN QUÉ ESTOY</div>
              <div className="text-[15px]">Aceptando proyectos para el próximo trimestre.</div>
              <div className="text-[14px] opacity-80 mt-1">
                Prefiero equipos pequeños. Backend o sistemas distribuidos.
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="font-mono text-[12px] leading-relaxed">
              <div className="opacity-70 mb-1">TAMBIÉN</div>
              <div className="flex flex-col gap-1 text-[14px]">
                <a href="https://github.com/nachoavi" className="border-b border-background/40 hover:border-background self-start">github / nachoavi</a>
                <a href="#" className="border-b border-background/40 hover:border-background self-start">linkedin</a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
