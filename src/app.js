import express from "express";
import NoteModel from "./models/notes.model.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/**
 * @Routes POST /api/notes
 * @description Create a new note and need title and description in the request body
 * @access Public
 */
app.post("/api/notes", async (req, res) => {
  const { title, description } = req.body;

  // ---- validation ----
  if (!title) {
    return res.status(400).json({ message: "Title required" });
  }
  if (!description) {
    return res.status(400).json({ message: "Description required" });
  }

  if (title.trim().length < 4) {
    return res
      .status(400)
      .json({ message: "title must be at least 4 characters long" });
  }

  if (description.trim().length < 10) {
    return res
      .status(400)
      .json({ message: "description must be at least 10 characters long" });
  }

  // ---- if validation pass create the note ----

  const newNote = await NoteModel.create({ title, description });

  return res.status(201).json({
    message: "Note created successfully",
    note: { title, description },
  });
});

/**
 * @Routes GET /api/notes
 * @description Get all notes
 * @access Public
 */
app.get("/api/notes", async (req, res) => {
  const notes = await NoteModel.find();
  return res.status(200).json({ notes });
});

/**
 * @Routes GET /api/notes/:id
 * @description Get a note by id
 * @access Public
 */
app.get("/api/notes/:id", async (req, res) => {
  const { id } = req.params;
  const note = await NoteModel.findById(id);
  return res.status(200).json({ note });
});

/**
 * @Routes PATCH /api/notes/:id
 * @description Update a note by id
 * @access Public
 */
app.patch("/api/notes/:id", async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;

  // ---- validation ----

  if (!description) {
    return res.status(400).json({ error: "Description required" });
  }

  if (description.trim().length < 10) {
    return res
      .status(400)
      .json({ error: "description must be at least 10 characters long" });
  }

  // ---- if validation pass update the note ----

  const note = await NoteModel.findById(id);

  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }

  note.description = description;
  await note.save();

  return res.status(200).json({
    message: "Note updated successfully",
    note
  });
});

app.delete("/api/notes/:id", async (req, res) => {
  const { id } = req.params;
  await NoteModel.findByIdAndDelete(id);
  return res.status(200).json({ message: "Note deleted successfully" });
});

export default app;
