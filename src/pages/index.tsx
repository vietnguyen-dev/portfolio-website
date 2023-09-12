import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import { Navbar } from "@/components/navbar";
import Hero from "@/components/hero";
import Experience from "@/components/experience";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <main className={`${inter.className} xl:w-3/4 xl:mx-auto`}>
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
    </main>
  );
}
