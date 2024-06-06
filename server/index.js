const express = require("express");
const bcrypt = require("bcrypt");

const saltRounds = 10;
var jwt = require('jsonwebtoken');
const connection = require("./src/db/connection");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const { Schema } = mongoose;
require("dotenv").config();

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
  const hashPassword=  await bcrypt.hash(req.body.password,saltRounds)

 req.body.password=hashPassword
  const phoneExist = await User.exists({ phoneNumber: req.body.phoneNumber });
  const emailExist = await User.exists({ email: req.body.email });

  if (phoneExist) {
    return res.json({ msg: "Phone Number exists" });
  } else if (emailExist) {
    return res.json({ msg: "Email exists" });
  }
  await User.create(req.body);
  return res.json({ msg: "User registered successfully" });
});
app.post('/login', async (req,res)=>{
  const user=await User.findOne({phoneNumber:req.body.phoneNumber})
  if(user){
    const isMatched= await bcrypt.compare(req.body.password,user.password)
   if(isMatched){
    res.json({msg:"yahoo"})

   }
   else{
    res.json({msg:"password didnot matched"})
   }

  }
  else{
    res.json({msg:"User Not registered"})
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
