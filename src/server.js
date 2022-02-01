"use strict";
const app = require("./app.js");
const normalizePort = require("./app/Helpers/normalizePort");
const PORT = normalizePort(process.env.PORT || 3000);
app.listen(PORT, () => {
  console.log(`Server running  on port ${PORT}`);
});
