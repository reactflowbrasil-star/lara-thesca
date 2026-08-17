import { useEffect, useState } from "react";

const HERO_IMAGE = "https://growmoneydigital.com.br/alexandre/fran.png";

export function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setOffset(window.scrollY * 0.06));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className="relative overflow-hidden pt-24 md:pt-28">
      <div className="pointer-events-none absolute -right-24 top-10 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-end gap-10 px-5 pb-12 md:grid-cols-[1.05fr_1fr] md:px-10 md:pb-20">
        <div className="relative z-10">
          <p className="eyebrow">Maquiagem artística · produtos acessíveis</p>
          <h1 className="text-editorial mt-5 text-[3.1rem] sm:text-7xl lg:text-[5.6rem]">
            Beleza não
            <br />
            precisa seguir{" "}
            <span className="italic text-primary">
              regras
              <svg
                viewBox="0 0 300 22"
                className="mt-1 w-[7ch] max-w-full text-accent"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 15C60 5 130 4 200 9c30 2 60 6 96 2"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            Descubra maquiagem artística, produtos acessíveis e looks criativos para transformar seu
            rosto em uma tela.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#looks"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm uppercase tracking-[0.16em] text-background transition-transform duration-300 hover:scale-[1.03]"
            >
              Explorar os looks
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#lara"
              className="inline-flex items-center justify-center rounded-full border border-foreground/25 px-7 py-4 text-sm uppercase tracking-[0.16em] transition-colors duration-300 hover:bg-foreground/5"
            >
              Conhecer Lara
            </a>
          </div>

          <p className="hand mt-8 text-2xl text-accent">
            sua beleza é uma tela ✦ sua criatividade é o limite
          </p>
        </div>

        <div className="relative">
          <div
            className="relative overflow-hidden rounded-[2rem] border border-border bg-secondary shadow-[var(--shadow-editorial)]"
            style={{ transform: `translateY(${-offset}px)` }}
          >
            <img
              src={HERO_IMAGE}
              alt="Lara Thesca em retrato editorial com maquiagem artística"
              width={900}
              height={1200}
              className="h-[26rem] w-full object-cover object-top sm:h-[34rem] md:h-[40rem]"
            />
          </div>
          <span className="absolute -left-3 top-6 -rotate-6 rounded-full bg-primary px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-primary-foreground shadow-lg">
            editorial nº 01
          </span>
          <span className="hand absolute -bottom-4 right-2 rotate-3 rounded-md border border-border bg-card px-3 py-1 text-xl">
            feito com o que cabe no bolso ★
          </span>
        </div>
      </div>

      <div className="overflow-hidden border-y border-border bg-foreground py-3 text-background">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap text-xs uppercase tracking-[0.35em]">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-10">
              <span>maquiagem artística</span>
              <span>✦</span>
              <span>produtos acessíveis</span>
              <span>✦</span>
              <span>cor sem medo</span>
              <span>✦</span>
              <span>sua beleza é uma tela</span>
              <span>✦</span>
              <span>maquiagem artística</span>
              <span>✦</span>
              <span>produtos acessíveis</span>
              <span>✦</span>
              <span>cor sem medo</span>
              <span>✦</span>
              <span>sua beleza é uma tela</span>
              <span>✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
