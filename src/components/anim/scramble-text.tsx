"use client";

import { useEffect, useState, useRef } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

interface ScrambleTextProps {
  text: string;
  className?: string;
  interval?: number;
  hoverable?: boolean;
}

export function ScrambleText({
  text,
  className = "",
  interval = 50,
  hoverable = false,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef(0);
  const queueRef = useRef<{ from: string; to: string; start: number; end: number; char?: string }[]>(
    []
  );
  const rafRef = useRef<number | null>(null);
  const resolveRef = useRef<(() => void) | null>(null);

  const scramble = (next: string) => {
    const oldText = display;
    const length = Math.max(oldText.length, next.length);
    queueRef.current = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = next[i] || "";
      const start = Math.floor(Math.random() * 20);
      const end = start + Math.floor(Math.random() * 20);
      queueRef.current.push({ from, to, start, end });
    }
    cancelAnimationFrame(rafRef.current ?? 0);
    frameRef.current = 0;
    const update = () => {
      let output = "";
      let complete = 0;
      for (let i = 0; i < queueRef.current.length; i++) {
        const { from, to, start, end } = queueRef.current[i];
        let char = queueRef.current[i].char;
        if (frameRef.current >= end) {
          complete++;
          output += to;
        } else if (frameRef.current >= start) {
          if (!char || Math.random() < 0.28) {
            char = CHARS[Math.floor(Math.random() * CHARS.length)];
            queueRef.current[i].char = char;
          }
          output += `​${char}`;
        } else {
          output += from;
        }
      }
      setDisplay(output);
      if (complete === queueRef.current.length) {
        resolveRef.current?.();
      } else {
        frameRef.current++;
        rafRef.current = requestAnimationFrame(update);
      }
    };
    update();
  };

  useEffect(() => {
    scramble(text);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <span
      className={className}
      onMouseEnter={hoverable ? () => scramble(text) : undefined}
    >
      {display}
    </span>
  );
}
