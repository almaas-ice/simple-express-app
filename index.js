const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

app.get('/', (req, res) => {
  res.json("Hello World from Express.js")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})