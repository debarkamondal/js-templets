const express = require('express')
const path = require('path')
const app = express()
const port = 9000

app.use('/', require(path.join(__dirname, 'routes/blog.js')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})