import mongoose from "mongoose";

const notesSchema = mongoose.Schema({
  title: String,
  description: String,
});

const NoteModel = mongoose.model("Note", notesSchema);

export default NoteModel;
