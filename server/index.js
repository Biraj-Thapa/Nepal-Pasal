const express = require("express");

const cors = require("cors");
const userRoute=require("./src/routes/user")
const connection = require("./src/db/connection");
const User = require("./src/models/user");
const app = express();
app.use(express.json());


require("dotenv").config();
app.use(cors());
app.use(userRoute)

const port = process.env.PORT;
connection();




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
