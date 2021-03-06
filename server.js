const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to MongoDB Database"));

app.use(express.json());

const todosRouter = require("./routes/todo");
app.use("/todos", todosRouter);

app.listen(3000, () => console.log("Server Started on port 3000!"));
