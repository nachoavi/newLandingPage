"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { SplitText } from "../anim/split-text";
import { Reveal } from "../anim/reveal";

export function Vision() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const blob = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section
      ref={ref}
      id="vision"
      className="min-h-screen py-24 md:py-32 px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) flex items-center bg-background relative overflow-hidden border-b-2 border-outline"
    >
      {/* Atmospheric blob */}
      <motion.div
        style={{ y: blob }}
        className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-tertiary/10 blur-[140px] rounded-full pointer-events-none"
        aria-hidden
      />

      <div className="max-w-4xl relative z-10">
        <Reveal>
          <span className="font-mono text-[12px] text-tertiary block mb-6 tracking-[0.3em]">
            [TRANSMISSION] /04
          </span>
        </Reveal>

        <h2 className="font-display uppercase mb-12 text-[clamp(48px,9vw,120px)] leading-[0.88]">
          <SplitText text="EL OFICIO" inView className="block" />
          <SplitText text="ESTÁ" inView delay={0.15} className="inline-block mr-6" />
          <SplitText text="VIVO." inView delay={0.25} className="inline-block text-tertiary" />
        </h2>

        <div className="space-y-8 text-on-surface leading-relaxed max-w-2xl">
          <Reveal delay={0.1}>
            <p className="text-[clamp(22px,2.4vw,32px)] font-light italic opacity-90 leading-snug">
              &ldquo;El código no se escribe con atajos. Se talla con criterio,
              experiencia y compromiso humano con la calidad.&rdquo;
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-[18px] leading-relaxed text-on-surface-variant">
              Construyo software que se siente como piedra. Pesado, permanente,
              silencioso. En una era de promesas vacías y atajos brillantes,
              vuelvo a lo fundamental: arquitectura limpia, decisiones
              defendibles, fundamentos sólidos. Los conceptos antes que el código.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-[18px] leading-relaxed text-on-surface-variant">
              Las herramientas vienen y van. El criterio técnico, el oficio y la
              capacidad de razonar sobre un sistema — eso es lo que perdura.
              Cada línea es una decisión humana. Cada arquitectura, un
              testimonio del talento de quien la pensó.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex items-center gap-4 pt-6 border-t-2 border-outline">
              <div className="w-12 h-12 bg-tertiary text-background flex items-center justify-center font-display text-[20px]">
                ISM
              </div>
              <div className="font-mono text-[12px] text-outline">
                <div className="text-on-background">— IGNACIO SAN MARTÍN</div>
                <div>BUENOS AIRES // 2026</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
