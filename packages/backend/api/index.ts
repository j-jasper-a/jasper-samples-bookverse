import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Vercel!");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});

export default app;
