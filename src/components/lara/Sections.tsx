import { useState } from "react";
import { Reveal } from "./Reveal";
import { looks, products, categories, tips, testimonials } from "./data";
import aboutImg from "@/assets/about-lara.jpg";
import flatlay from "@/assets/products-flatlay.jpg";

export function Arte() {
  return (
    <section id="arte" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="eyebrow">A arte de se maquiar</p>
          <h2 className="text-editorial mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Maquiagem não é sobre esconder.
            <br />
            <span className="italic text-primary">É sobre criar.</span>
          </h2>
        </Reveal>
        <Reveal delay={120} className="space-y-6 text-muted-foreground md:pt-14">
          <p className="text-lg leading-relaxed">
            A Lara usa o rosto como suporte: cor, textura, forma e referência de arte entram no
            mesmo pincel. Um recorte gráfico vira gesto; um esfumado vira atmosfera.
          </p>
          <p className="leading-relaxed">
            Cada look nasce de um experimento — e quase sempre com o que já está na necessaire.
            Antes de indicar qualquer coisa, ela testa alternativas acessíveis para que qualquer
            pessoa consiga repetir sem esvaziar a conta.
          </p>
          <div className="grid gap-4 pt-2 sm:grid-cols-3">
            {[
              ["cor", "sem medo de errar"],
              ["textura", "gloss, mate, metal"],
              ["forma", "o rosto como tela"],
            ].map(([k, v]) => (
              <div key={k} className="grain-panel rounded-xl border border-border p-4">
                <p className="text-editorial text-2xl text-foreground">{k}</p>
                <p className="mt-1 text-sm">{v}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Looks() {
  return (
    <section id="looks" className="bg-foreground py-20 text-background md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-background/60">Galeria</p>
            <h2 className="text-editorial mt-3 text-4xl sm:text-5xl lg:text-6xl">
              Looks que viram <span className="italic">assunto</span>
            </h2>
          </div>
          <p className="hand text-2xl text-background/70">arraste, salve, recrie ✎</p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {looks.map((look, i) => (
            <Reveal key={look.id} delay={i * 90} className={i % 2 === 1 ? "md:translate-y-16" : ""}>

              <article className="group">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={look.image}
                    alt={`Look ${look.name} de maquiagem artística`}
                    width={900}
                    height={1200}
                    loading="lazy"
                    className="h-[24rem] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05] sm:h-[32rem]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] text-foreground">
                    {look.tag}
                  </span>
                  <span className="text-editorial absolute bottom-3 right-5 text-6xl text-background/70">
                    {look.number}
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap items-start justify-between gap-4">
                  <div className="max-w-md">
                    <h3 className="text-editorial text-3xl">{look.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-background/70">
                      {look.description}
                    </p>
                  </div>
                  <div className="flex gap-1.5 pt-2">
                    {look.palette.map((c) => (
                      <span
                        key={c}
                        className="h-6 w-6 rounded-full ring-1 ring-background/30"
                        style={{ backgroundColor: c }}
                        title={c}
                      />
                    ))}
                  </div>
                </div>
                <button className="mt-5 inline-flex items-center gap-2 border-b border-background/40 pb-1 text-xs uppercase tracking-[0.22em] transition-colors hover:border-background">
                  Ver detalhes
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Produtos() {
  const [active, setActive] = useState("todos");
  const list = active === "todos" ? products : products.filter((p) => p.category === active);

  return (
    <section id="produtos" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <Reveal className="grid items-end gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="eyebrow">Beleza sem preço absurdo</p>
          <h2 className="text-editorial mt-4 text-4xl sm:text-5xl lg:text-6xl">
            O look dos sonhos não precisa custar{" "}
            <span className="italic text-primary">uma fortuna.</span>
          </h2>
        </div>
        <img
          src={flatlay}
          alt="Flat lay de cosméticos acessíveis sobre fundo creme"
          width={1200}
          height={800}
          loading="lazy"
          className="h-48 w-full rounded-2xl object-cover md:h-56"
        />
      </Reveal>

      <div className="mt-10 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all duration-300 ${
              active === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border hover:border-foreground/40"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* PLACEHOLDER: dados fictícios — substituir por produtos, preços e avaliações reais. */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <Reveal key={p.name} delay={i * 70}>
            <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-editorial)]">
              <div className="grain-panel flex h-36 items-center justify-center rounded-xl bg-secondary text-xs uppercase tracking-[0.2em] text-muted-foreground">
                imagem [placeholder]
              </div>
              <p className="eyebrow mt-4">{p.category}</p>
              <h3 className="text-editorial mt-1 text-2xl">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.note}</p>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="font-medium">{p.price}</span>
                <span className="text-muted-foreground">Lara: {p.rating}</span>
              </div>
              <span className="mt-3 w-fit rounded-full bg-accent/15 px-3 py-1 text-xs uppercase tracking-[0.16em] text-accent">
                Vale a pena? {p.worth}
              </span>
              <button className="mt-5 w-full rounded-full border border-foreground/20 py-3 text-xs uppercase tracking-[0.2em] transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
                Descobrir produto
              </button>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function AntesDeComprar() {
  return (
    <section className="border-y border-border bg-secondary/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <p className="eyebrow">Antes de comprar</p>
          <h2 className="text-editorial mt-4 max-w-3xl text-4xl sm:text-5xl">
            3 coisas que eu observo antes de comprar um{" "}
            <span className="italic text-primary">cosmético</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {tips.map((t, i) => (
            <Reveal key={t.n} delay={i * 100}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7">
                <span className="text-editorial pointer-events-none absolute -right-2 -top-6 text-[7rem] leading-none text-accent/15">
                  {t.n}
                </span>
                <h3 className="text-editorial relative text-2xl">{t.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SobreLara() {
  return (
    <section id="lara" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal className="relative">
          <img
            src={aboutImg}
            alt="Lara Thesca sorrindo com pincéis de maquiagem no estúdio"
            width={1000}
            height={1200}
            loading="lazy"
            className="w-full rounded-[2rem] object-cover shadow-[var(--shadow-editorial)]"
          />
          <span className="hand absolute -bottom-5 left-4 -rotate-3 rounded-md border border-border bg-card px-3 py-1 text-xl">
            terça-feira, testando 4 batons ✦
          </span>
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">Sobre</p>
          <h2 className="text-editorial mt-4 text-4xl sm:text-5xl lg:text-6xl">
            Oi, eu sou a <span className="italic text-primary">Lara.</span>
          </h2>
          <div className="mt-6 space-y-5 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              Comecei desenhando em papel e terminei desenhando em cima do meu próprio rosto. Hoje
              faço maquiagem artística como quem faz colagem: junto referência de arte, cor errada
              na hora certa e muito produto de farmácia.
            </p>
            <p className="leading-relaxed">
              Não acredito em regra de "isso não combina com você". Acredito em testar, borrar,
              refazer e postar. Se um look meu te deu vontade de abrir a gaveta e experimentar, meu
              trabalho está feito.
            </p>
          </div>
          <p className="hand mt-6 text-2xl text-accent">— beijo, Lara</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Comunidade() {
  return (
    <section className="bg-foreground py-20 text-background md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <p className="eyebrow text-background/60">Comunidade</p>
          <h2 className="text-editorial mt-3 text-4xl sm:text-5xl">
            Quem já pegou o <span className="italic">pincel</span>
          </h2>
          {/* PLACEHOLDER: depoimentos fictícios — substituir por comentários reais. */}
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-background/40">
            conteúdo placeholder · substituir por depoimentos reais
          </p>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.text} delay={i * 80}>
              <figure className="h-full rounded-2xl border border-background/15 p-6 transition-colors duration-500 hover:bg-background/5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm text-accent-foreground">
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm">{t.name}</p>
                    <p className="text-xs text-background/50">{t.user}</p>
                  </div>
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-background/80">
                  “{t.text}”
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaFinal() {
  return (
    <section id="universo" className="px-5 py-20 md:px-10 md:py-28">
      <Reveal>
        <div
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] px-6 py-20 text-center md:px-16"
          style={{ background: "var(--gradient-cherry)" }}
        >
          <div className="grain-panel absolute inset-0 opacity-30" />
          <div className="relative">
            <p className="eyebrow text-background/70">Último recado</p>
            <h2 className="text-editorial mx-auto mt-4 max-w-3xl text-5xl text-background sm:text-6xl lg:text-7xl">
              Pronta para sair do <span className="italic">básico?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-background/85">
              Entre no universo da Lara e descubra novas formas de criar, experimentar e se
              expressar através da beleza.
            </p>
            <a
              href="#top"
              className="mt-9 inline-flex rounded-full bg-background px-9 py-4 text-sm uppercase tracking-[0.16em] text-foreground transition-transform duration-300 hover:scale-[1.04]"
            >
              Entrar no universo Lara Thesca
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-14 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="text-editorial text-2xl">
            Lara <span className="italic text-primary">Thesca</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Maquiagem artística com produtos acessíveis. Sua beleza é uma tela.
          </p>
        </div>
        <div>
          <p className="eyebrow">Redes</p>
          <ul className="mt-4 space-y-2 text-sm">
            {["Instagram", "TikTok", "YouTube", "Pinterest"].map((s) => (
              <li key={s}>
                <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Institucional</p>
          <ul className="mt-4 space-y-2 text-sm">
            {["Contato", "Imprensa", "Parcerias", "Política de privacidade", "Termos de uso"].map(
              (s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl text-xs uppercase tracking-[0.2em] text-muted-foreground">
        © {new Date().getFullYear()} Lara Thesca — todos os direitos reservados
      </p>
    </footer>
  );
}
