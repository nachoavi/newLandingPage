import type { Metadata } from "next";
import { Anton, Archivo_Narrow, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Grain } from "@/components/grain";

const anton = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const archivo = Archivo_Narrow({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ignacio San Martín // Software Architect",
  description:
    "Software Architect. Sistemas diseñados con criterio humano, oficio técnico y precisión arquitectónica.",
  metadataBase: new URL("https://ignaciosanmartin.dev"),
  openGraph: {
    title: "Ignacio San Martín // Software Architect",
    description:
      "Software Architect. Sistemas diseñados con criterio humano, oficio técnico y precisión arquitectónica.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${archivo.variable} ${jetbrains.variable} dark`}
    >
      <body className="bg-background text-on-background font-body selection:bg-tertiary selection:text-background overflow-x-hidden antialiased">
        <Grain />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
