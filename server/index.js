const express = require("express");
const bcrypt = require("bcrypt");

const saltRounds = 10;
const jwt = require("jsonwebtoken");
const cors = require("cors");
const connection = require("./src/db/connection");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const { Schema } = mongoose;
require("dotenv").config();
app.use(cors());

const port = process.env.PORT;
connection();
const userSchema = new Schema({
  phoneNumber: String,
  fullName: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});
const User = mongoose.model("User", userSchema);

app.post("/register", async (req, res) => {
  const hashPassword = await bcrypt.hash(req.body.password, saltRounds);

  req.body.password = hashPassword;
  const phoneExist = await User.exists({ phoneNumber: req.body.phoneNumber });
  const emailExist = await User.exists({ email: req.body.email });

  if (phoneExist) {
    return res.status(409).json({ msg: "Phone Number is taken!" });
  } else if (emailExist) {
    return res.status(409).json({ msg: "Phone Number is taken!" });
  }
  await User.create(req.body);
  return res.json({ msg: "User registered successfully" });
});
app.post("/login", async (req, res) => {
  const user = await User.findOne({ phoneNumber: req.body.phoneNumber });
  if (user) {
    const isMatched = await bcrypt.compare(req.body.password, user.password);
    if (isMatched) {
      const token = jwt.sign(
        { phoneNumber: req.body.phoneNumber },
        process.env.SECRET_KEY
      );
      res.json({ msg: "yahoo", token, user });
    } else {
      res.status(401).json({ msg: "Invalid Password" });
    }
  } else {
    res.status(401).json({ msg: "User Not registered" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
