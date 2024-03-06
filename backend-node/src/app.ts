import express from "express";
import cors from "cors";
import { getClient } from "./mongodb";
const app = express();
const port = 4000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", async (req, res) => {
  const client = await getClient();

  try {
    const a = await client.db().collection("threats").find().toArray();

    res.json(a);
  } catch (e) {
    res.status(500).json(e);
  }
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
