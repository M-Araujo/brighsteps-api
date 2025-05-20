type Mentor = {
  id: number;
  title: {
    en?: string;
    pt?: string;
  };
  author: string;
  image?: string;
  type: string;
  description: {
    en?: string;
    pt?: string;
  };
  link?: string;
};


export const mentors: Mentor[] = [
    {
        id: 1,
        title: {
            en: "The Power of Habit",
            pt: "O Poder do Hábito",
        },
        author: "Charles Duhigg",
        description: {
            en: "This book explores how habits shape our lives and how we can change them for the better.",
            pt: "Este livro explora como os hábitos moldam as nossas vidas e como podemos mudá-los para melhor.",
        },
        image:
            "https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX322_BO1,204,203,200_.jpg",
        type: "book",
        link: "",
    },
    {
        id: 2,
        title: {
            en: "Power Words for Tough Days",
            pt: "Palavras de Poder para Dias Difíceis",
        },
        author: "Geronimo Theml",
        description: {
            en: "5 phrases to repeat when you think about GIVING UP | Sai da Média Podcast",
            pt: "5 frases para repetir quando pensares em DESISTIR | Sai da Média Podcast",
        },
        image: "",
        type: "video",
        link: "https://www.youtube.com/watch?v=sm4iIwxBW0Y",
    },
    {
        id: 3,
        title: {
            en: "'But it ain’t about how hard you hit. It’s about how hard you can get hit and keep movin’ forward.'",
            pt: "'Não é sobre o quão forte consegues bater. É sobre o quanto consegues aguentar e continuar em frente.'",
        },
        author: "Official Rocky Balboa",
        description: {
            en: "Rocky Balboa (Sylvester Stallone) offers his son Robert (Milo Ventimiglia) life advice to help him realize he needs to believe in and fight for himself in order to have the life he wants.",
            pt: "Rocky Balboa (Sylvester Stallone) dá conselhos ao seu filho Robert (Milo Ventimiglia) para o ajudar a acreditar em si mesmo e lutar pela vida que deseja.",
        },
        image: "",
        type: "video",
        link: "https://www.youtube.com/watch?v=vyYDz_A6HO8",
    },
    {
        id: 4,
        title: {
            en: "Follow These 7 Simple Steps to Get Anything You Want In Life",
            pt: "Segue Estes 7 Passos Simples para Conseguires Tudo o que Quiseres na Vida",
        },
        author: "Tony Robbins",
        description: {
            en: "What’s really stopping you from creating the life you want? In this powerful message, Tony Robbins shares seven steps to gain clarity, face the truth, and build unstoppable momentum in any area of your life. It all starts with knowing what you truly want — and why it matters.",
            pt: "O que te impede realmente de criar a vida que queres? Nesta mensagem poderosa, Tony Robbins partilha sete passos para ganhar clareza, enfrentar a verdade e criar impulso imparável em qualquer área da tua vida. Tudo começa por saberes o que realmente queres — e porque é importante.",
        },
        image: "",
        type: "video",
        link: "https://www.youtube.com/watch?v=CwsBMt4yP50",
    },
    {
        id: 5,
        title: {
            en: "INSTANTLY Change Your Life with This One Daily Habit",
            pt: "MUDA a Tua Vida Instantaneamente com Este Hábito Diário",
        },
        author: "Tony Robbins",
        description: {
            en: "The stories we tell ourselves shape our reality. Change your story, change your life. Try this daily practice to help master your emotions.",
            pt: "As histórias que contamos a nós próprios moldam a nossa realidade. Muda a tua história, muda a tua vida. Experimenta este exercício diário para aprenderes a dominar as tuas emoções.",
        },
        image: "",
        type: "video",
        link: "https://www.youtube.com/watch?v=aUQo9eWDZ7Y",
    },
    {
        id: 6,
        title: {
            en: "Practice Priming daily",
            pt: "Pratica o Priming diariamente",
        },
        author: "Tony Robbins",
        description: {
            en: "To close the gap and get from where you are now to where you want to be, it takes alignment within yourself — and the power to unlock and unleash. Remember how you felt during Tony’s Priming exercise? Listen to the audio below to return to that state and experience an incredible shift in the quality of your thoughts and emotions.",
            pt: "Para alcançares o que desejas, precisas de alinhamento interior — e do poder de desbloquear e libertar. Lembras-te de como te sentiste durante o exercício de Priming do Tony? Ouve o áudio novamente para regressares a esse estado e transformares a qualidade dos teus pensamentos e emoções.",
        },
        image: "",
        type: "video",
        link: "https://www.youtube.com/watch?v=faTGTgid8Uc",
    },
];


  export function getRandomQuote(): Mentor {
    const randomIndex = Math.floor(Math.random() * mentors.length);
    return mentors[randomIndex];
  }