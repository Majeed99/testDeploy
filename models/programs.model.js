const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const programSchema = new Schema(
  {
    title: { type: String, required: true },
    exercises: { type: Array, required: true },
    background: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Program = mongoose.model("Program", programSchema);
module.exports = Program;
