const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, './public', 'index.html'))
})

app.get('/Joe', (req, res) => {
res.sendFile(path.join(__dirname, './public', 'Joe.html'))
})

app.post('/comment', (req, res) => {
    console.log(req.body)
    res.json(req.body)
    /*console.log(req.body)
    res.status(200).send(req.body)*/
})
 
app.listen(port, () => {
  console.log(`Welcome to the server: port ! ${port}`)
})