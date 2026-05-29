"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { SplitText } from "../anim/split-text";
import { Reveal } from "../anim/reveal";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("done");
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setStatus("idle"), 3000);
    }, 1400);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) bg-tertiary text-background relative overflow-hidden"
    >
      <div className="max-w-(--spacing-container-max) mx-auto border-4 border-background p-8 md:p-16 lg:p-24 relative bg-tertiary">
        <div className="absolute top-4 right-4 font-mono text-[12px] flex items-center gap-2">
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="w-2 h-2 bg-background rounded-full"
          />
          [SIGNAL: 100%]
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <Reveal>
              <span className="font-mono text-[12px] block mb-4 tracking-[0.3em]">
                /05 // OPEN_CHANNEL
              </span>
            </Reveal>

            <h2 className="font-display uppercase text-[clamp(56px,9vw,128px)] leading-[0.85] mb-8">
              <SplitText text="INITIATE" inView className="block" />
              <SplitText text="COLLAB" inView delay={0.15} className="block" />
              <SplitText text="_01" inView delay={0.3} className="inline-block" />
            </h2>

            <Reveal delay={0.2}>
              <p className="text-[18px] mb-10 font-bold max-w-md leading-relaxed">
                ¿Listo para estabilizar tu visión? Conectate al protocolo
                para consultoría arquitectónica y desarrollo de sistemas.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col gap-3 font-mono text-[13px] max-w-md">
                {[
                  ["STATUS", "AVAILABLE"],
                  ["SLOTS", "02 REMAINING"],
                  ["TZ", "UTC-03"],
                  ["EMAIL", "luis17.sanmartin@gmail.com"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex justify-between border-b-2 border-background py-2"
                  >
                    <span className="opacity-70">{k}:</span>
                    <span className="font-bold">{v}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <Field label="USER_IDENTIFICATION" name="email" type="email" placeholder="name@domain.com" />
              <Field label="ORGANIZATION" name="org" type="text" placeholder="Optional" />

              <div className="space-y-2">
                <label className="font-mono text-[12px] block tracking-widest font-bold">
                  PROJECT_SCOPE
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Describí los requerimientos arquitectónicos..."
                  className="w-full bg-transparent border-2 border-background p-4 font-mono text-[13px] placeholder:text-background/50 focus:bg-background focus:text-tertiary focus:outline-none transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ x: 4, y: -4 }}
                whileTap={{ x: 0, y: 0 }}
                disabled={status !== "idle"}
                className="w-full bg-background text-tertiary font-display text-[28px] md:text-[36px] py-5 md:py-6 leading-none transition-shadow hover:shadow-[-8px_8px_0px_0px_rgba(0,0,0,0.5)] disabled:opacity-60"
              >
                {status === "idle" && "TRANSMIT_DATA →"}
                {status === "sending" && "TRANSMITTING..."}
                {status === "done" && "SUCCESS // LOGGED ✓"}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className="space-y-2">
      <label className="font-mono text-[12px] block tracking-widest font-bold">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={type === "email"}
        className="w-full bg-transparent border-2 border-background p-4 font-mono text-[13px] placeholder:text-background/50 focus:bg-background focus:text-tertiary focus:outline-none transition-all"
      />
    </div>
  );
}
