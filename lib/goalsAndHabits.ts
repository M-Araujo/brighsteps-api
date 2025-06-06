type Habit = {
    id: number,
    title: {
        en?: string,
        pt?:string
    },
    goalId: number;
    frequency: number[],
    completions: string[]
}

type Goal = {
    id: number,
    title: {
        en?: string,
        pt?: string,
    },
    startDate: string,
    endDate: string,
    habits: Habit[]
};


export const goals = [
  {
    id: 1,
    title: {
      en: "Read a book",
      pt: "Ler um livro",
    },
    startDate: "2025-05-01",
    endDate: "2025-05-31",
    completed: false,
    habits: [
      {
        id: 1,
        title: {
          en: "Read 10 pages",
          pt: "Ler 10 páginas",
        },
        goalId: 1,
        frequency: [1, 2, 3, 4, 5],
        completions: ["2025-05-21", "2025-05-22"],
      },
      {
        id: 2,
        title: {
          en: "Take reading notes",
          pt: "Fazer anotações de leitura",
        },
        goalId: 1,
        frequency: [3, 5],
        completions: ["2025-05-22"],
      },
    ],
  },
  {
    id: 2,
    title: {
      en: "Exercise daily",
      pt: "Exercitar-se diariamente",
    },
    startDate: "2025-04-15",
    endDate: "2025-05-15",
    completed: false,
    habits: [
      {
        id: 3,
        title: {
          en: "Morning jog",
          pt: "Corrida matinal",
        },
        goalId: 2,
        frequency: [1, 2, 3, 4, 5, 6, 7],
        completions: ["2025-05-20", "2025-05-21", "2025-05-22"],
      },
      {
        id: 4,
        title: {
          en: "Stretching",
          pt: "Alongamento",
        },
        goalId: 2,
        frequency: [1, 3, 6],
        completions: ["2025-05-21"],
      },
    ],
  },
];

export function dailyGoalsAndHabits(): Goal[] {
  let currentDay = new Date().getDay();
  let weekday = currentDay === 0 ? 7 : currentDay;

  let filteredGoals = goals
    .map((goal) => {
      const filteredHabits = goal.habits.filter((habit) => {
        return habit.frequency.includes(weekday);
      });
      if (filteredHabits.length === 0) {
        return null;
      }
      return {
        ...goal,
        habits: filteredHabits,
      };
    })
    .filter((goal): goal is Goal => goal !== null);

  return filteredGoals;
}