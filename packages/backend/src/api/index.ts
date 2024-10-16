import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "If you can read this message, the backend is live." });
});

export default app;
