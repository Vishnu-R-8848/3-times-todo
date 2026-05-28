import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Notes API!' });
});

router.post("/create", (req, res) => {
  const { title, content } = req.body;
  // Here you would typically save the note to a database
  res.json({ message: 'Note created successfully!', note: { title, content } });
});

export default router;