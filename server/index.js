const express = require('express')
const connection= require('./src/db/connection')
const app = express()
const port = 4000
connection()


app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})