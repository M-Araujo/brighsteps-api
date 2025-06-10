type Habit = {
  id: number;
  title: {
    en?: string;
    pt?: string;
  };
  goalId: number;
  frequency: number[];
  completions: string[];
};

type Goal = {
  id: number;
  title: {
    en?: string;
    pt?: string;
  };
  startDate: string;
  endDate: string;
  completed?: boolean;
  habits: Habit[];
};

let date = new Date();
let year = date.getFullYear();
let month = String(date.getMonth() + 1).padStart(2, "0");
let defaultFirstDay = 1;
let defaultLastDay = new Date(year, Number(month), 0).getDate();

const getDateToString = (m: number, y: number, d: number): string => {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
};

const getFrequencyDates = (frequency: number[], count: number): string[] => {
  const validFrequency = frequency.filter((day) => day >= 1 && day <= 7);
  const dates: string[] = [];
  const today = new Date(year, Number(month) - 1, date.getDate());
  for (let day = date.getDate(); day >= 1 && dates.length < count; day--) {
    const checkDate = new Date(year, Number(month) - 1, day);
    const weekday = checkDate.getDay() || 7;
    if (validFrequency.includes(weekday)) {
      dates.push(getDateToString(Number(month) - 1, year, day));
    }
  }
  return dates;
};

export const goals: Goal[] = [
  {
    id: 1,
    title: {
      en: "Read a book",
      pt: "Ler um livro",
    },
    startDate: getDateToString(Number(month) - 1, year, defaultFirstDay),
    endDate: getDateToString(Number(month) - 1, year, defaultLastDay),
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
        completions: [],
      },
      {
        id: 2,
        title: {
          en: "Take reading notes",
          pt: "Fazer anotações de leitura",
        },
        goalId: 1,
        frequency: [3, 5],
        completions: [],
      },
    ],
  },
  {
    id: 2,
    title: {
      en: "Exercise daily",
      pt: "Exercitar-se diariamente",
    },
    startDate: getDateToString(Number(month) - 1, year, defaultFirstDay),
    endDate: getDateToString(Number(month) - 1, year, defaultLastDay),
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
        completions: [],
      },
      {
        id: 4,
        title: {
          en: "Stretching",
          pt: "Alongamento",
        },
        goalId: 2,
        frequency: [1, 3, 6],
        completions: [],
      },
    ],
  },
];

export function dailyGoalsAndHabits(): Goal[] {
  const today = getDateToString(Number(month) - 1, year, date.getDate());
  const currentDay = date.getDay();
  const weekday = currentDay === 0 ? 7 : currentDay;

  const filteredGoals = goals
    .filter((goal) => goal.startDate <= today && goal.endDate >= today)
    .filter((goal) => {
      const filteredHabits = goal.habits.filter((habit) =>
        habit.frequency.includes(weekday)
      );
      return filteredHabits.length > 0;
    })
    .map((goal) => ({
      ...goal,
      habits: goal.habits
        .filter((habit) => habit.frequency.includes(weekday))
        .map((habit) => ({
          ...habit,
          completions: getFrequencyDates(habit.frequency, 2),
        })),
    }));

  return filteredGoals;
}
