import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { Lab } from "@/components/sections/lab";
import { Stack } from "@/components/sections/stack";
import { Vision } from "@/components/sections/vision";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Lab />
        <Stack />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
