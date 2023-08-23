"use strict";
const app = require("./app.js");
const PORT = process.env.NODE_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running  on port ${PORT}`);
});
