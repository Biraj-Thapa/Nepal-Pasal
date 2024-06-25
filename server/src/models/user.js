const mongoose = require("mongoose");
const { Schema } = mongoose;
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
  module.exports=User