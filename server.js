const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const usersRouter = require("./routers/users");
const programsRouter = require("./routers/programs");
const path = require("path");
require("dotenv").config();
// Mongoose Here
const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
mongoose.connect(process.env.MONGODB_URI || uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}
// -------
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});
app.use(cors());
app.use(express.json());
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

app.use("/users", usersRouter);
app.use("/programs", programsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT} `);
});
