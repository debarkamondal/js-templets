const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/json', (req, res)=>{
    res.json({"name": "harry"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})