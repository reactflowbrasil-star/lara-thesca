import cherry from "@/assets/look-cherry.jpg";
import electric from "@/assets/look-electric.jpg";
import soft from "@/assets/look-soft.jpg";
import afterdark from "@/assets/look-afterdark.jpg";

export const looks = [
  {
    id: "cherry",
    name: "Cherry Mood",
    number: "01",
    image: cherry,
    description:
      "Vermelho que não pede licença. Camadas de cereja, vinho e gloss até a boca virar o assunto da noite.",
    palette: ["#8c1f2a", "#c22b31", "#e0576a", "#f6e7dd"],
    tag: "glossy",
  },
  {
    id: "electric",
    name: "Electric Blue",
    number: "02",
    image: electric,
    description:
      "Azul elétrico com recorte gráfico e brilho metálico — futurismo feito com sombra de drogaria.",
    palette: ["#0b1b3a", "#1668c9", "#3fd0f0", "#c9d3dd"],
    tag: "gráfico",
  },
  {
    id: "soft",
    name: "Soft Rebellion",
    number: "03",
    image: soft,
    description:
      "Tons delicados de pêssego e rosa queimado, quebrados por linhas brancas desenhadas à mão.",
    palette: ["#f3e3d7", "#e2a794", "#c9736b", "#ffffff"],
    tag: "delicado",
  },
  {
    id: "afterdark",
    name: "After Dark",
    number: "04",
    image: afterdark,
    description:
      "Esfumado grafite, boca vinho e pele molhada de luz. Dramático o suficiente para virar personagem.",
    palette: ["#141216", "#3b2a2f", "#6e2431", "#d9b9a2"],
    tag: "dramático",
  },
];

// PLACEHOLDER: substituir por produtos, faixas de preço e avaliações reais da Lara.
export const products = [
  {
    category: "pele",
    name: "Base fluida [placeholder]",
    price: "R$ [--] – R$ [--]",
    rating: "[nota da Lara]",
    worth: "Vale a pena",
    note: "Acabamento natural que aguenta o dia inteiro sem craquelar.",
  },
  {
    category: "olhos",
    name: "Paleta de sombras [placeholder]",
    price: "R$ [--] – R$ [--]",
    rating: "[nota da Lara]",
    worth: "Vale muito",
    note: "Pigmento alto nos coloridos — perfeita para looks gráficos.",
  },
  {
    category: "lábios",
    name: "Batom cremoso [placeholder]",
    price: "R$ [--] – R$ [--]",
    rating: "[nota da Lara]",
    worth: "Vale a pena",
    note: "Cereja intenso que vira blush quando esfumado.",
  },
  {
    category: "ferramentas",
    name: "Kit de pincéis [placeholder]",
    price: "R$ [--] – R$ [--]",
    rating: "[nota da Lara]",
    worth: "Depende",
    note: "Bom para começar; o pincel de precisão é o destaque.",
  },
  {
    category: "finalização",
    name: "Spray fixador [placeholder]",
    price: "R$ [--] – R$ [--]",
    rating: "[nota da Lara]",
    worth: "Vale muito",
    note: "Segura maquiagem artística sem deixar aquela sensação de máscara.",
  },
];

export const categories = ["todos", "pele", "olhos", "lábios", "ferramentas", "finalização"];

export const tips = [
  {
    n: "01",
    title: "Fórmula e acabamento",
    text: "Antes do preço eu olho textura: fórmula boa se constrói em camadas. Acabamento errado estraga o look mais caro do mundo.",
  },
  {
    n: "02",
    title: "Versatilidade",
    text: "Se um produto só serve para uma coisa, ele precisa ser excepcional. Batom que vira blush e sombra sempre ganha espaço.",
  },
  {
    n: "03",
    title: "Custo por uso",
    text: "Divido o preço pelas vezes que vou usar de verdade. É assim que um item de R$ 30 pode valer mais que um de R$ 300.",
  },
];

// PLACEHOLDER: trocar por depoimentos reais da comunidade.
export const testimonials = [
  {
    name: "[Nome]",
    user: "@usuaria_placeholder",
    text: "Fiz o Cherry Mood com o que já tinha na gaveta e recebi elogio a noite inteira.",
    initials: "LM",
  },
  {
    name: "[Nome]",
    user: "@usuaria_placeholder",
    text: "Achei que maquiagem artística não era pra mim. A Lara provou o contrário em 40 segundos de vídeo.",
    initials: "BC",
  },
  {
    name: "[Nome]",
    user: "@usuaria_placeholder",
    text: "Parei de comprar por hype. Agora sigo os três critérios dela e economizo todo mês.",
    initials: "RS",
  },
  {
    name: "[Nome]",
    user: "@usuaria_placeholder",
    text: "O jeito que ela fala de cor faz eu querer pegar o pincel na hora.",
    initials: "AT",
  },
];
