import express from "express";
import cors from "cors"

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/:id", (req, res) => {
  res.send(`Hello World! ${id}`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
