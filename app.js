const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const publicPath = './public'
app.use(express.static(publicPath))
app.get('/hello', (req, res) => res.send("HI"))

app.listen(port, err => {
  if (err) throw err
  console.log('Connected to server http://localhost:3000/')
})

module.exports = app
