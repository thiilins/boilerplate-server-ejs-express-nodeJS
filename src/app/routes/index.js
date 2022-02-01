"use strict";
const express = require("express");
const app = express();

const mainRoutes = require("./main.routes");

app.use("/", mainRoutes);

module.exports = app;
