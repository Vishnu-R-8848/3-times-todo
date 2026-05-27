import express from "express";
import NoteModel from "./models/notes.model.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/new", (req, res) => {
  const { name, description } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name required" });
  }
  if (!description) {
    return res.status(400).json({ message: "Description required" });
  }

  const note = NoteModel.create({ title : name, description });

  res.status(201).json({
    message: "Note created successfully",
    note: { name, description },
  });
});

export default app;
