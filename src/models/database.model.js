const mongoose = require("mongoose");

const newSchema = new mongoose.Schema({
    title:String,
    description:String,
    image:String
});

const notesModel = mongoose.model("user",newSchema);

module.exports = notesModel