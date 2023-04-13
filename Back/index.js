const express = require('express')
const fileupload = require('express-fileupload')
const csv = require("csv-parser")
const fs = require('fs')
const cors = require('cors')
const app = express()
const path = require('path')

const cadastros = []

const port = 5000;

app.use(express.json())
app.use(fileupload({
  useTempFiles: true,
  tempFileDir: path.join(__dirname, 'temp')
}))
app.use(cors())

app.post("/cadastro", (req, res) => {
  const { email, senha } = req.body
  const user = { email, senha }

  // Lê o arquivo de usuários
  fs.readFile("cadastros.json", (err, data) => {
    if (err) {
      console.error(err)
      res.status(500).json({ success: false, message: "Erro interno do servidor" })
      return
    }

    // Verifica se o usuário já existe
    if (cadastros.find(u => u.email === email)) {
      res.status(400).json({ success: false, message: "Este e-mail já está cadastrado" })
      return
    }

    // Adiciona o novo usuário ao arquivo
    cadastros.push(user);
    fs.writeFile("cadastros.json", JSON.stringify(cadastros), (err) => {
      if (err) {
        console.error(err)
        res.status(500).json({ success: false, message: "Erro interno do servidor" })
        return
      }

      res.status(200).json({ success: true, message: "Usuário cadastrado com sucesso" })
    })
  })
})


app.post("/login", (req, res) => {
  const { email, password } = req.body

  fs.readFile("cadastros.json", (err, data) => {
    if (err) {
      console.error(err)
      res.status(500).json({ success: false, message: "Erro interno do servidor" })
      return;
    }

    const cadastros = JSON.parse(data)

  const user = cadastros.find(u => u.email === email);

  if (user && user.senha === password) {
    res.status(200).json({ success: true, message: `Welcome ${email}` })
  } else {
    res.status(401).json({ success: false, message: "Credenciais inválidas" })
  }
})
})

app.post("/uploadcsv", (req, res) => {
  const data = req.body.data;

  // Use o csv-parser para analisar os dados CSV
  const results = [];
  csv()
    .on("data", (data) => results.push(data))
    .on("end", () => {
      // Escreva os dados do CSV em um arquivo no servidor
      const filename = "data.csv";
      const fileContent = results.map((row) => Object.values(row).join(",")).join("\n");
      fs.writeFile(filename, fileContent, (err) => {
        if (err) {
          console.error(err);
          res.status(500).send("Erro ao escrever arquivo CSV");
        } else {
          res.send("Arquivo CSV armazenado com sucesso no servidor");
        }
      });
    })
    .write(data);
});

app.listen(port, () => {
  console.log("Rodando na porta ", port)
})