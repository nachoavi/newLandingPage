"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SplitText } from "../anim/split-text";
import { Magnetic } from "../anim/magnetic";

function useUtcClock() {
  const [time, setTime] = useState("--:--:--");
  useEffect(() => {
    const update = () => {
      const d = new Date();
      const hh = d.getUTCHours().toString().padStart(2, "0");
      const mm = d.getUTCMinutes().toString().padStart(2, "0");
      const ss = d.getUTCSeconds().toString().padStart(2, "0");
      setTime(`${hh}:${mm}:${ss}`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const time = useUtcClock();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="min-h-screen flex flex-col justify-center px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) relative overflow-hidden border-b-2 border-outline pt-24"
    >
      <motion.div
        style={{ y: gridY }}
        className="absolute inset-0 grid-bg pointer-events-none"
        aria-hidden
      />

      {/* Top-right HUD */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className="absolute top-28 right-(--spacing-margin-mobile) md:right-(--spacing-margin-desktop) font-mono text-[12px] text-outline text-right hidden sm:block"
      >
        [UTC] <span className="text-tertiary">{time}</span>
      </motion.div>

      <motion.div style={{ y: titleY, opacity: fade }} className="max-w-(--spacing-container-max) mx-auto w-full relative z-10">
        <h1 className="font-display uppercase mb-10 leading-[0.88] tracking-tighter text-[clamp(56px,11vw,160px)]">
          <SplitText text="IGNACIO" as="span" delay={0.1} className="block" />
          <SplitText text="SAN MARTÍN" as="span" delay={0.35} className="block text-stroke" />
          <span className="block text-tertiary mt-2 md:mt-4">
            <SplitText text="SOFTWARE" as="span" delay={0.65} />
            <span className="cursor-block ml-2 align-middle" />
          </span>
        </h1>

        <div className="max-w-2xl border-l-4 border-tertiary pl-6 md:pl-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-[18px] leading-relaxed mb-8 text-on-surface-variant"
          >
            Senior Software Architect. Diseño sistemas con criterio humano y precisión
            quirúrgica — donde el oficio, la experiencia y la arquitectura limpia
            mandan por sobre el ruido.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap gap-4"
          >
            <Magnetic>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-on-background text-background font-mono text-[12px] px-8 py-4 hard-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                INITIATE_COLLAB
                <span aria-hidden>→</span>
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#lab"
                className="inline-flex items-center gap-3 border-2 border-outline text-on-background font-mono text-[12px] px-8 py-4 hover:bg-surface-variant transition-colors"
              >
                VIEW_ARCHIVE
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-(--spacing-margin-mobile) md:left-(--spacing-margin-desktop) font-mono text-[12px] text-outline"
      >
        STATUS: <span className="text-tertiary">AVAILABLE</span>
      </motion.div>
    </section>
  );
}
