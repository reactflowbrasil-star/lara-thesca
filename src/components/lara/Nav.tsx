import { useEffect, useState } from "react";

const links = [
  { href: "#arte", label: "A arte" },
  { href: "#looks", label: "Looks" },
  { href: "#produtos", label: "Produtos" },
  { href: "#lara", label: "Sobre" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "bg-background/85 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <a href="#top" className="flex items-center">
          <img
            src="https://growmoneydigital.com.br/alexandre/logolara.png"
            alt="Lara Thesca"
            width={140}
            height={40}
            className="h-8 w-auto md:h-10"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#universo"
            className="rounded-full bg-primary px-5 py-2 text-sm uppercase tracking-[0.14em] text-primary-foreground transition-transform duration-300 hover:scale-[1.04]"
          >
            Universo Lara
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-2 md:hidden">
          {links.concat({ href: "#universo", label: "Universo Lara" }).map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-4 text-lg uppercase tracking-[0.14em]"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
