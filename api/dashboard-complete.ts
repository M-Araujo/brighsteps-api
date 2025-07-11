import { getRandomMovie } from "../lib/movies";
import { getRandomMentor } from "../lib/mentors";
import { getRandomTip } from "../lib/tips";
import { dailyGoalsAndHabits } from "../lib/goalsAndHabits";

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  res.status(200).json({
    movie: getRandomMovie(),
    mentor: getRandomMentor(),
    tip: getRandomTip(),
    goals: dailyGoalsAndHabits(),
  });
}
