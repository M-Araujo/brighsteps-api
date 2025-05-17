export default function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); // ✅ Allow all origins
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  
    if (req.method === "OPTIONS") {
      return res.status(200).end(); // ✅ Handle preflight
    }
  
    // Your real data logic
    res.status(200).json([
      { id: 1, title: "Drink Water", completed: false },
        { id: 2, title: "Exercise", completed: true },
        { id: 3, title: "Read 15 minutes", completed: false },
    ]);
  }
  