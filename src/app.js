const express = require("express");
const cors = require("cors")
const path = require("path")
const app = express(); //server create
const notesModel = require("./models/database.model");

app.use(express.json());
app.use(cors());

app.use(express.static("./public"))


app.post("/notes", async (req, res) => {
  const { title, description, image } = req.body;

  const notes = await notesModel.create({
    title,
    description,
    image,
  });

  res.status(201).json({
    message: "Notes Create Successfully...",
    notes,
  });
});

app.get("/getNotes", async (req, res) => {
  const allNotes = await notesModel.find();
  res.status(201).json({
    message: "All Notes Here...",
    allNotes,
  });
});

app.delete("/deleteNotes/:index", async (req, res) => {
  const deletenotes = await notesModel.findByIdAndDelete(req.params.index);

  res.status(200).json({
    message: "Notes delete Successfully",
    deletenotes,
  });
});

app.patch("/updateNotes/:index", async (req, res) => {
  const {title,image ,description } = req.body;
  const updateNotes = await notesModel.findByIdAndUpdate(req.params.index, {
    title,
    image,
    description
  });

  res.status(201).json({
    message: "Notes Update Successfully",
    updateNotes,
  });
});


app.use("*name",(req,res)=>{
  res.sendFile(path.join(__dirname, "../public/index.html"))
});

module.exports = app;
