const express = require("express")
const bodyParser = require("body-parser")
const index = require("./routes/index")
const livros = require("./routes/livrosRouter")

const dataBase = require("./model/database")
dataBase.connect()

const app = express()

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*")
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use(bodyParser.json())

app.use("/", index)
app.use('/livros', livros)

module.exports = app
