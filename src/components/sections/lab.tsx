"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef } from "react";
import { ScrambleText } from "../anim/scramble-text";
import { Reveal } from "../anim/reveal";

const PROJECTS = [
  {
    id: "001",
    status: "STABLE",
    title: "NEURAL_DOCK",
    description: "Automated deployment engine for distributed AI models across edge nodes.",
    tags: ["PY", "TORCH"],
    accent: "from-tertiary/30 to-transparent",
  },
  {
    id: "002",
    status: "STABLE",
    title: "VAULT_CORE",
    description: "End-to-end encrypted infrastructure for financial data processing.",
    tags: ["RUST", "WASM"],
    accent: "from-tertiary/20 to-transparent",
  },
  {
    id: "003",
    status: "BETA",
    title: "ORBIT_OS",
    description: "Real-time geospatial analysis for global supply chain logistics.",
    tags: ["NEXTJS", "GLSL"],
    accent: "from-tertiary/40 to-transparent",
  },
  {
    id: "004",
    status: "STABLE",
    title: "VOID_CSS",
    description: "Design system and component library built for technical interfaces.",
    tags: ["UI", "CSS"],
    accent: "from-tertiary/25 to-transparent",
  },
];

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[number]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", transformPerspective: 1200 }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-surface-container-low border-2 border-outline relative overflow-hidden"
    >
      <div className="p-4 font-mono text-[12px] flex justify-between items-center">
        <span className="text-outline">ID:{project.id}</span>
        <span className={project.status === "STABLE" ? "text-tertiary" : "text-error"}>
          {project.status}
        </span>
      </div>

      <div className="aspect-[4/3] relative overflow-hidden bg-surface border-y-2 border-outline">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-[96px] md:text-[120px] text-stroke opacity-25 group-hover:opacity-80 group-hover:text-tertiary group-hover:[-webkit-text-stroke:0] transition-all duration-700">
            {project.id}
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <h3 className="font-display uppercase text-[36px] leading-none mb-4">
          <ScrambleText text={project.title} hoverable />
        </h3>
        <p className="font-mono text-[13px] text-on-surface-variant mb-6 leading-relaxed normal-case tracking-normal">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="px-2 py-1 bg-surface-container-highest text-[11px] font-mono tracking-wider"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Lab() {
  return (
    <section
      id="lab"
      className="py-24 md:py-32 px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) bg-surface-container-lowest border-b-2 border-outline relative overflow-hidden"
    >
      <Reveal className="flex flex-wrap items-end justify-between mb-12 md:mb-20 border-b-2 border-outline pb-4 gap-4">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[12px] text-tertiary">/02</span>
          <h2 className="font-display uppercase text-[clamp(40px,7vw,84px)] leading-[0.85]">
            THE LAB
          </h2>
        </div>
        <span className="font-mono text-[12px] text-outline">
          [COUNT: 04 // RECENT_MODS]
        </span>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
