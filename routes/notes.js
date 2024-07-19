const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Note = require("../models/Note");

// Create a new note
router.post("/", auth, async (req, res) => {
  const { title, content, tags, backgroundColor, reminder } = req.body;
  try {
    const newNote = new Note({
      user: req.user.id,
      title,
      content,
      tags,
      backgroundColor,
      reminder,
    });
    const note = await newNote.save();
    res.json(note);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get all notes
router.get("/", auth, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id, isTrash: false }).sort({
      createdAt: -1,
    });
    res.json(notes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Get a single note by ID
router.get("/:id", auth, async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ msg: "Note not found" });
    }
    res.json(note);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Update a note
router.put("/:id", auth, async (req, res) => {
  const {
    title,
    content,
    tags,
    backgroundColor,
    isArchived,
    isTrash,
    reminder,
  } = req.body;
  const noteFields = {
    title,
    content,
    tags,
    backgroundColor,
    isArchived,
    isTrash,
    reminder,
  };
  try {
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ msg: "Note not found" });
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }
    note = await Note.findByIdAndUpdate(
      req.params.id,
      { $set: noteFields },
      { new: true }
    );
    res.json(note);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Delete a note
router.delete("/:id", auth, async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ msg: "Note not found" });
    }
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }
    await Note.findByIdAndDelete(req.params.id);
    res.json({ msg: "Note removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
