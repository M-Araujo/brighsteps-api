export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const inspiration = [
    {
      id: 1,
      title: {
        en: "The Pursuit of Happyness",
        pt: "Em Busca da Felicidade",
      },
      description: {
        en: "Based on a true story, this film follows Chris Gardner’s relentless fight against homelessness to create a better life for his son. A journey of grit, love, and unshakable hope.",
        pt: "Baseado numa história real, este filme segue a luta incansável de Chris Gardner contra a pobreza para criar uma vida melhor para o seu filho. Uma jornada de coragem, amor e esperança inabalável.",
      },
      link: "https://www.youtube.com/watch?v=89Kq8SDyvfg",
    },
    {
      id: 2,
      title: {
        en: "Coach Carter",
        pt: "Treinador Carter",
      },
      description: {
        en: "A high school basketball coach sets strict academic standards for his team, teaching that discipline and self-respect are worth more than trophies.",
        pt: "Um treinador de basquetebol do secundário impõe regras académicas rigorosas à sua equipa, ensinando que a disciplina e o respeito próprio valem mais do que troféus.",
      },
      link: "https://www.youtube.com/watch?v=d_GleoanbPE",
    },
    {
      id: 3,
      title: {
        en: "Rocky Balboa",
        pt: "Rocky Balboa",
      },
      description: {
        en: "Even when the world doubts him, Rocky steps into the ring one more time — not to win, but to prove to himself that he still can.",
        pt: "Mesmo quando o mundo duvida dele, Rocky entra no ringue mais uma vez — não para vencer, mas para provar a si próprio que ainda consegue.",
      },
      link: "https://www.youtube.com/watch?v=3VUblDwa648",
    },
    {
      id: 4,
      title: {
        en: "Creed",
        pt: "Creed: O Legado de Rocky",
      },
      description: {
        en: "Carrying the legacy of his father, Adonis Creed trains under Rocky Balboa to fight his own battles and carve out his own identity.",
        pt: "A carregar o legado do pai, Adonis Creed treina com Rocky Balboa para lutar as suas próprias batalhas e encontrar a sua identidade.",
      },
      link: "https://www.youtube.com/watch?v=Uv554B7YHk4",
    },
    {
      id: 5,
      title: {
        en: "Top Gun: Maverick",
        pt: "Top Gun: Maverick",
      },
      description: {
        en: "After decades of service, Maverick returns to train a new generation of pilots, pushing them to defy limits — and rediscovering his own sense of purpose.",
        pt: "Após décadas ao serviço, Maverick regressa para treinar uma nova geração de pilotos, desafiando-os a ultrapassar os seus limites — e redescobrindo o seu propósito.",
      },
      link: "https://www.youtube.com/watch?v=qSqVVswa420",
    },
    {
      id: 6,
      title: {
        en: "Top Gun (1986)",
        pt: "Top Gun (1986)",
      },
      description: {
        en: "Maverick rises through the ranks of the elite Top Gun school, facing loss, rivalry, and the challenge of becoming more than just a great pilot.",
        pt: "Maverick sobe nas fileiras da prestigiada escola Top Gun, enfrentando perdas, rivalidades e o desafio de se tornar mais do que apenas um grande piloto.",
      },
      link: "https://www.youtube.com/watch?v=xa_z57UatDY",
    },
    {
      id: 7,
      title: {
        en: "Good Will Hunting",
        pt: "O Bom Rebelde",
      },
      description: {
        en: "A janitor at MIT hides genius-level talent — until a therapist helps him confront his past and believe in his worth.",
        pt: "Um empregado da limpeza do MIT esconde um talento genial — até que um terapeuta o ajuda a enfrentar o passado e acreditar no seu valor.",
      },
      link: "https://www.youtube.com/watch?v=PaZVjZEFkRs",
    },
    {
      id: 8,
      title: {
        en: "Freedom Writers",
        pt: "Escritores da Liberdade",
      },
      description: {
        en: "A young teacher inspires her at-risk students to write their stories, proving that every voice matters and change is possible.",
        pt: "Uma jovem professora inspira os seus alunos em risco a escreverem as suas histórias, provando que todas as vozes contam e a mudança é possível.",
      },
      link: "https://www.youtube.com/watch?v=MT0L1U-Rdj4",
    },
    {
      id: 9,
      title: {
        en: "Rudy",
        pt: "Rudy",
      },
      description: {
        en: "Against all odds and limitations, Rudy dreams of playing football for Notre Dame. His heart makes him unforgettable.",
        pt: "Contra todas as probabilidades e limitações, Rudy sonha jogar futebol americano na Notre Dame. O seu coração torna-o inesquecível.",
      },
      link: "https://www.youtube.com/watch?v=eDKOlH0I0nQ",
    },
    {
      id: 10,
      title: {
        en: "A Beautiful Mind",
        pt: "Uma Mente Brilhante",
      },
      description: {
        en: "Brilliant mathematician John Nash battles schizophrenia while redefining what success, love, and reality mean.",
        pt: "O brilhante matemático John Nash luta contra a esquizofrenia enquanto redefine o significado de sucesso, amor e realidade.",
      },
      link: "https://www.youtube.com/watch?v=WFJgUm7iOKw",
    },
    {
      id: 11,
      title: {
        en: "The Blind Side",
        pt: "Um Sonho Possível",
      },
      description: {
        en: "A wealthy family takes in a homeless teen, helping him discover his potential as a person and an athlete.",
        pt: "Uma família acolhe um jovem sem-abrigo, ajudando-o a descobrir o seu potencial como pessoa e atleta.",
      },
      link: "https://www.youtube.com/watch?v=gvqj_Tk_kuM",
    },
    {
      id: 12,
      title: {
        en: "Hidden Figures",
        pt: "Elementos Secretos",
      },
      description: {
        en: "Three African-American women at NASA defy gender and racial barriers to help launch the first man into orbit.",
        pt: "Três mulheres afro-americanas da NASA desafiam as barreiras raciais e de género para ajudar a lançar o primeiro homem em órbita.",
      },
      link: "https://www.youtube.com/watch?v=RK8xHq6dfAo",
    },
    {
      id: 13,
      title: {
        en: "127 Hours",
        pt: "127 Horas",
      },
      description: {
        en: "A true story of survival — Aron Ralston becomes trapped in a canyon and must find the strength to save himself.",
        pt: "Uma história real de sobrevivência — Aron Ralston fica preso num desfiladeiro e precisa de encontrar a força interior para se salvar.",
      },
      link: "https://www.youtube.com/watch?v=OlhLOWTnVoQ",
    },
    {
      id: 14,
      title: {
        en: "The Secret: Dare to Dream",
        pt: "O Segredo: Ousar Sonhar",
      },
      description: {
        en: "A widow struggling with life meets a stranger who changes her outlook by teaching her the law of attraction and the power of belief.",
        pt: "Uma viúva em dificuldades conhece um estranho que muda a sua visão da vida ao ensiná-la sobre a lei da atração e o poder da crença.",
      },
      link: "https://www.youtube.com/watch?v=Mf3-oCDdTzQ",
    },
    {
      id: 15,
      title: {
        en: "Chef",
        pt: "Chef",
      },
      description: {
        en: "After losing his job at a prestigious restaurant, a passionate chef hits the road in a food truck, rediscovering his love for cooking, creativity, and family along the way.",
        pt: "Após perder o emprego num restaurante de prestígio, um chef apaixonado viaja numa roulotte de comida, redescobrindo o amor pela culinária, pela criatividade e pela família.",
      },
      link: "https://www.youtube.com/watch?v=qK-ZUFX5fnk",
    },
    {
      id: 16,
      title: {
        pt: "A Força de Viver",
      },
      description: {
        pt: "Bethany Hamilton regressa ao surf depois de um ataque de tubarão, mostrando ao mundo que a fé e a coragem superam qualquer obstáculo.",
      },
      link: "https://www.youtube.com/watch?v=isjY34VD5jE",
    },
  ];

  res.status(200).json({ inspiration });
}
