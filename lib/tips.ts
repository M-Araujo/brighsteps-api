import { getRandomItem } from './utils';

type Quote = {
  id: number;
  title: {
    en: string;
    pt: string;
  };
  description: {
    en: string;
    pt: string;
  };
};

export const quotes: Quote[] = [
  {
    id: 1,
    title: {
      en: "Stay Consistent",
      pt: "Mantém-te Consistente",
    },
    description: {
      en: "Consistency is the key to progress. Small steps every day lead to big results over time. Keep going!",
      pt: "A consistência é a chave para o progresso. Pequenos passos todos os dias levam a grandes resultados com o tempo. Continua a avançar!",
    },
  },
  {
    id: 2,
    title: {
      en: "Embrace the Journey",
      pt: "Abraça a Jornada",
    },
    description: {
      en: "Success is not just about the destination, but about the journey you take to get there. Enjoy the process!",
      pt: "O sucesso não é apenas sobre o destino, mas sobre a jornada que fazes para lá chegar. Aproveita o processo!",
    },
  },
  {
    id: 3,
    title: {
      en: "Celebrate Small Wins",
      pt: "Celebra as Pequenas Vitórias",
    },
    description: {
      en: "Every achievement, no matter how small, is a victory. Celebrate your progress along the way!",
      pt: "Cada conquista, por mais pequena que seja, é uma vitória. Celebra o teu progresso ao longo do caminho!",
    },
  },
  {
    id: 4,
    title: {
      en: "Push Through the Challenges",
      pt: "Supera os Desafios",
    },
    description: {
      en: "Challenges are a part of growth. Don’t be afraid to push through them—they’ll make you stronger and more resilient.",
      pt: "Os desafios fazem parte do crescimento. Não tenhas medo de os ultrapassar—eles vão tornar-te mais forte e mais resiliente.",
    },
  },
  {
    id: 5,
    title: {
      en: "Be Kind to Yourself",
      pt: "Seja Gentil Contigo Mesmo",
    },
    description: {
      en: "Remember, you’re doing your best. If you fall off track, get back up. It's all part of the process!",
      pt: "Lembra-te, estás a dar o teu melhor. Se perderes o rumo, levanta-te novamente. Isso faz parte do processo!",
    },
  },
  {
    id: 6,
    title: {
      en: "Start Now, Not Tomorrow",
      pt: "Começa Agora, Não Amanhã",
    },
    description: {
      en: "There’s no better time than now. Don't wait for the perfect moment—take that first step today!",
      pt: "Não há melhor momento do que agora. Não esperes pelo momento perfeito—dá esse primeiro passo hoje!",
    },
  },
  {
    id: 7,
    title: {
      en: "Believe in Your Potential",
      pt: "Acredita no Teu Potencial",
    },
    description: {
      en: "You have the power to achieve great things. Don’t doubt yourself—believe in your abilities and keep moving forward.",
      pt: "Tens o poder de alcançar grandes feitos. Não duvides de ti mesmo—acredita nas tuas capacidades e continua em frente.",
    },
  },
  {
    id: 8,
    title: {
      en: "Focus on Progress, Not Perfection",
      pt: "Foca-te no Progresso, Não na Perfeição",
    },
    description: {
      en: "Perfection is an illusion. Focus on making progress each day, and the rest will follow.",
      pt: "A perfeição é uma ilusão. Foca-te em fazer progresso todos os dias, e o resto virá por consequência.",
    },
  },
  {
    id: 9,
    title: {
      en: "Be Patient with Yourself",
      pt: "Seja Paciente Contigo Mesmo",
    },
    description: {
      en: "Growth takes time. Be patient and trust that every effort you put in is leading you closer to your goal.",
      pt: "O crescimento leva tempo. Seja paciente e confia que cada esforço que colocas está a levar-te mais perto do teu objetivo.",
    },
  },
  {
    id: 10,
    title: {
      en: "You Are Capable",
      pt: "Tu És Capaz",
    },
    description: {
      en: "No matter how difficult the task may seem, you are capable of achieving it. Believe in yourself and take action!",
      pt: "Não importa quão difícil a tarefa possa parecer, tu és capaz de a alcançar. Acredita em ti e age!",
    },
  },
];


export function getRandomTip():Quote {
   return getRandomItem(quotes);
}
