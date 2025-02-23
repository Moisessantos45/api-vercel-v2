import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/:id", (req, res) => {
  res.send(`Hello World! ${id}`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
