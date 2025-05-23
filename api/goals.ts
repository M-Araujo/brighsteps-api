export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  res.status(200).json([
    {
      id: 1,
      title: {
        en: "Read a book",
        pt: "Ler um livro",
      },
      completed: false,
      startDate: "2025-05-01",
      endDate: "2025-05-31",
    },
    {
      id: 2,
      title: {
        en: "Exercise daily",
        pt: "Exercitar-se diariamente",
      },
      completed: true,
      startDate: "2025-04-15",
      endDate: "2025-05-15",
    },
  ]);
}
