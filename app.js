//  Importando o módulo 'express'
const express = require("express");
// Importando módulo 'Path'
const path = require("path");
// Definindo a constante que ira ser usada pra  executar métodos do express
const app = express();

// Definindo View Engine
app.set("view engine", "ejs");
//Definindo Pasta Views
app.set("views", path.resolve(__dirname, "/src/views"));

//Definir a pasta de arquivos estáticos
app.use(express.static(path.resolve(__dirname, "public")));

// Configurando  recebimento de JSON
app.use(express.json());

//Configurando recebimento de formulário
app.use(express.urlencoded({ extended: false }));

//Definindo escuta de porta para iniciar o servidor
app.listen(3000, () => {
  console.log("O Servidor está rodando na porta 3000 ");
});
