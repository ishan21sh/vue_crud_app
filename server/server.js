const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const URI =
  "mongodb+srv://admin:admin@cluster0.6x0k2vh.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Note = mongoose.model("Note", {
  title: String,
  description: String,
});

app.get("/", async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    res.status(500).json({ err });
  }
});

app.post("/", async (req, res) => {
  const { title, description } = req.body;
  const note = new Note({ title, description });
  try {
    const savedNote = await note.save();
    res.json(savedNote);
  } catch (err) {
    res.status(500).json({ err });
  }
});

app.get("/:postId", async (req, res) => {
  const id = req.params.postId;
  try {
    const note = await Note.findById(id);
    if (!note) {
      res.status(404).json("NOTE NOT FOUND");
    } else {
      res.json(note);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

app.put("/:postId", async (req, res) => {
  const id = req.params.postId;
  const { title, description } = req.body;
  try {
    const note = await Note.findByIdAndUpdate(
      id,
      {
        title: title,
        description: description,
      },
      { new: true }
    );

    if (!note) {
      res.status(404).json("NOTE NOT FOUND");
    } else {
      res.json(note);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

app.delete("/:postId", async (req, res) => {
  const id = req.params.postId;
  try {
    const result = await Note.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      res.status(404).json("POST NOT FOUND");
    } else {
      res.json("POST DELETED SUCESSFULLY");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

app.listen(3000, () => {
  console.log("Server running");
});
