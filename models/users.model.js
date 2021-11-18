const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    birthDate: { type: Date, required: true },
    height: { type: Number, required: false },
    weight: { type: Number, required: false },
    program1: { type: Number, required: false },
    program2: { type: Number, required: false },
    program3: { type: Number, required: false },
    type: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
