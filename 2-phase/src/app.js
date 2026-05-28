import express from "express";
import NoteModel from "./models/notes.model.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

/**
 * @requires POST /api/notes
 * @description get the notes from the request body
 * @access public
 */

app.post("/api/notes", async (req, res) => {
  const { title, description } = req.body;

  //---- Validation ----//
  if (!title) {
    return res.status(400).json({
      message: "Title is required",
    });
  }

  if (title.length < 3) {
    return res.status(400).json({
      message: "Title must be at least 3 characters long",
    });
  }

  if (!description) {
    return res.status(400).json({
      message: "Description is required",
    });
  }

  if (description.length < 10) {
    return res.status(400).json({
      message: "Description must be at least 10 characters long",
    });
  }

  // ---- if validation passes, create the note ---- //
  const note = await NoteModel.create({
    title,
    description,
  });

  return res.status(201).json({
    message: "Note created successfully",
    title,
    description,
  });
});

/**
 * @requires GET /api/notes
 * @description get all notes
 * @access public
 */

app.get("/api/notes", async (req, res) => {
  const notes = await NoteModel.find();

  return res.status(200).json({
    message: "Notes retrieved successfully",
    notes,
  });
});

app.patch("/api/notes/:id", async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;

  //---- Validation ----//

  if (!description) {
    return res.status(400).json({
      message: "Description is required",
    });
  }

  if (description.length < 10) {
    return res.status(400).json({
      message: "Description must be at least 10 characters long",
    });
  }

  // ---- if validation passes, update the note ---- //
  const notes = await NoteModel.findById(id);

  if (!notes) {
    return res.status(404).json({
      message: "Note not found",
    });
  }

  notes.description = description;
  await notes.save();

  return res.status(200).json({
    message: "Note updated successfully",
    notes,
  });
});

export default app;
