const express = require("express");
const router = express.Router();
const mainController = require("../controller/mainController");

router.get("/", mainController.index);
router.get("/contato", mainController.contato);

module.exports = router;
