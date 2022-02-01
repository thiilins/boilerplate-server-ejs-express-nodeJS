"use strict";
const express = require("express");
const router = express.Router();
const MainController = require("../controller/MainController");

router.get("/", MainController.index);

module.exports = router;
