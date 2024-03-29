import Estudios from "@/components/Estudios";
import Hero from "@/components/Hero";
import Proyectos from "@/components/Proyectos";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero></Hero>
      </main>
      <Proyectos></Proyectos>
      <Estudios></Estudios>
    </>
  );
}
