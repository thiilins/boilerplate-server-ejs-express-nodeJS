"use strict";
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const routes = require("./src/routes");
const path = require("path");
const session = require("express-session");
const logger = require("morgan");

/**
 * Definindo a view engine e configurando
 * a pasta views
 */
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

/*
 * Habilitando e Adicionando Middlewares
 */

app.use(logger("dev")); // Habilitando o Log via console

// Express Session  (Habilitando Sessão)
app.use(
  session({
    secret: "INSERT_YOUR_SECRET_KEY",
    resave: true,
    saveUninitialized: true,
    cookies: { secure: "auto", maxAge: 2600000 },
  })
);
app.use(express.static(path.resolve("src", "public"))); // Definindo a Pasta Public
app.use(express.json()); //Habilitando JSON  e configurando recebimento de formulário
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method")); //*?_method=PUT (Configurando o methodOverride (para trabalhar com metodos HTTP via forms)

/**
 *Instanciando Rotas
 */

app.use("/", routes);
module.exports = app;