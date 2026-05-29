"use client";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-surface-container-lowest border-t-2 border-outline relative overflow-hidden">
      <div className="border-b-2 border-outline py-10 px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop)">
        <div className="font-display uppercase text-[clamp(40px,8vw,120px)] leading-[0.9]">
          IGNACIO<br />
          <span className="text-stroke">SAN MARTÍN</span>
        </div>
      </div>

      <div className="px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-mono text-[12px] text-on-surface-variant">
          © {year} IGNACIO_SM // PROTOCOL ACTIVE
        </div>
        <div className="flex gap-6 md:gap-8 font-mono text-[12px]">
          {[
            ["GITHUB", "https://github.com"],
            ["LINKEDIN", "https://linkedin.com"],
            ["X", "https://x.com"],
            ["EMAIL", "mailto:luis17.sanmartin@gmail.com"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-tertiary border-b border-transparent hover:border-tertiary transition-colors"
            >
              {label} ↗
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
