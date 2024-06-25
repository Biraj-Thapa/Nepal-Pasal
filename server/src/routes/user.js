
const express=require("express")
const router=express.Router()
const User = require("../models/user")
const bcrypt = require("bcrypt");

const saltRounds = 10;
const jwt = require("jsonwebtoken");



router.post("/register", async (req, res) => {
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
  router.post("/login", async (req, res) => {
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

  module.exports=router