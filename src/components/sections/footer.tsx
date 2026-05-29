"use client";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-background border-t-2 border-outline relative">
      <div className="px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) py-16 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-6">
          <div className="font-display uppercase text-[clamp(36px,7vw,96px)] leading-[0.9]">
            Ignacio
            <br />
            <span className="text-stroke">San Martín</span>
          </div>
          <div className="font-mono text-[12px] text-outline mt-6 max-w-md leading-relaxed">
            Esta página la armé yo, sin templates. Si algo se ve raro en tu pantalla, escribime
            — me interesa saberlo.
          </div>
        </div>

        <div className="md:col-span-3 md:col-start-8 font-mono text-[12px] text-on-surface-variant leading-relaxed">
          <div className="text-outline mb-2">COLOFÓN</div>
          <ul className="space-y-1">
            <li>Next.js + Tailwind</li>
            <li>Anton, Archivo Narrow, JetBrains Mono</li>
            <li>Animaciones con Motion</li>
            <li>Hosteada en Vercel</li>
          </ul>
        </div>

        <div className="md:col-span-2 md:col-start-11 font-mono text-[12px] text-on-surface-variant leading-relaxed">
          <div className="text-outline mb-2">METADATOS</div>
          <ul className="space-y-1">
            <li>v.2026</li>
            <li>—</li>
            <li>© {year}</li>
          </ul>
        </div>
      </div>

      <div className="px-(--spacing-margin-mobile) md:px-(--spacing-margin-desktop) py-4 border-t border-outline-variant flex flex-col md:flex-row justify-between gap-2 font-mono text-[11px] text-outline">
        <span>— Hecho a mano en La Unión, Chile.</span>
        <span>↑ <a href="#top" className="hover:text-tertiary">Volver arriba</a></span>
      </div>
    </footer>
  );
}
