const express = require('express')
const connection= require('./src/db/connection')
const app = express()
app.use(express.json())
const mongoose = require('mongoose')
const { Schema } = mongoose;
require('dotenv').config()
const port = process.env.PORT
connection()
const userSchema = new Schema({
  phoneNumber: String, 
  fullName: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum : ['admin','user'],
    default: 'user'
  },
});
const User = mongoose.model('User', userSchema);


app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})