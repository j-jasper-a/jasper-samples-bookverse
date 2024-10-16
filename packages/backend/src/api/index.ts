import express from "express";

const app = express();

app.use(express.json()); // For JSON parsing

app.get("/", (req, res) => {
  res.send("Hello from Vercel!");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

export default app;
