export default function handler(req,res) {
    res.status(200).json([
        { id: 1, title: "Drink water", completed: false },
        { id: 2, title: "Exercise", completed: false },
        { id: 3, title: "Read 15 minutes", completed: false },
    ])
}