import { port } from './.env';
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

port_no = port

const app = express();
const { auth, requiredScopes } = require("express-oauth2-jwt-bearer");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const Homework = require("./routes/homework");
app.use("/api", Homework);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listening in port ${port}`);
});

const connectDB = async () => {
  try {
    await mongoose.connect(
      "key"
    );
    console.log("db connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();
