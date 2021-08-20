//  Importando e inicializando o módulo 'express'
const express = require("express");
const app = express();
//Importando o method-override para lidar com forms put/delete
//*?_method=PUT
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
// Importando módulo 'Path'
const path = require("path");
// Configurando  recebimento de JSON
app.use(express.json());
//Configurando recebimento de formulário
app.use(express.urlencoded({ extended: false }));
//Definir a pasta de arquivos estáticos
app.use(express.static(path.resolve("public")));

// INSTANCIANDO ROTAS
const indexRoutes = require("./src/routes");
app.use("/", indexRoutes);

// Definindo View Engine
app.set("view engine", "ejs");
//Definindo Pasta Views
app.set("views", path.resolve("src", "views"));

//Definindo escuta de porta para iniciar o servidor
app.listen(3000, () => {
  console.log("O Servidor está rodando na porta 3000 ");
});
