const mongoose = require("mongoose");
const NoteSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: { type: [String], default: [] },
  backgroundColor: { type: String, default: "#ffffff" },
  isArchived: { type: Boolean, default: false },
  isTrash: { type: Boolean, default: false },
  reminder: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("keep-notes", NoteSchema);
