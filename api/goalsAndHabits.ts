import { dailyGoalsAndHabits } from "../lib/goalsAndHabits";

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // ✅ Allow all origins
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end(); // ✅ Handle preflight
  }

  // Your real data logic
  res.status(200).json({
    goals: dailyGoalsAndHabits(), // Call the function
  });
}
