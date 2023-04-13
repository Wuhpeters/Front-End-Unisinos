const express = require("express")
const bodyParser = require("body-parser")
const url = require("url")
const cors = require("cors")
const path = require("path")

const app = express()
const router = express.Router()

app.use(express.static("public"))
app.use(bodyParser.json())
app.use(cors())
app.use(router) 


app.use(bodyParser.urlencoded( {extended: true} ))

router.get( "/", (req, res) => {
    res.sendFile(path.join(__dirname + "../../src/App"))
})
// router.get( "/PaginaInicial", (req, res) => {
//     res.sendFile(path.join(__dirname + "/PaginaInicial/Perfil/index.js"))
// })


app.listen(3000, () => {
    const host = server.address().address;
    const port = server.address().port;

    console.log("servidor rodando", host, port)
})