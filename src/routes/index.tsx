import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/lara/Nav";
import { Hero } from "@/components/lara/Hero";
import {
  Arte,
  Looks,
  Produtos,
  AntesDeComprar,
  SobreLara,
  Comunidade,
  CtaFinal,
  Footer,
} from "@/components/lara/Sections";

const title = "Lara Thesca — Maquiagem artística com produtos acessíveis";
const description =
  "Looks criativos, maquiagem artística e produtos acessíveis com Lara Thesca. Sua beleza é uma tela, sua criatividade é o limite.";
const image = "https://growmoneydigital.com.br/alexandre/fran.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: image },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Arte />
        <Looks />
        <Produtos />
        <AntesDeComprar />
        <SobreLara />
        <Comunidade />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
