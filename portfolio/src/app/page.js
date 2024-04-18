import Contact from "@/components/Contact";
import Estudios from "@/components/Estudios";
import Experiencia from "@/components/Experiencia";
import Hero from "@/components/Hero";
import Proyectos from "@/components/Proyectos";
import Tecnologias from "@/components/Tecnologias";
import Redes from "@/components/redes";


export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero></Hero>
      </main>
      <Tecnologias></Tecnologias>
      <Experiencia />
      <Proyectos></Proyectos>
      <Estudios></Estudios>
      <Contact></Contact>
      <Redes></Redes>
    </>
  );
}
