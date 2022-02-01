"use strict";
const jwt = require("jsonwebtoken");
const config = require("../../config/auth");
module.exports = async (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) {
    return res.status(401).json({
      error: true,
      message: "Unauthorized: Authentication Token does not exist",
    });
  }
  const [, token] = auth.split(" ");
  try {
    const decoded = jwt.verify(token, config.secret);
    if (decoded) {
      req.user_id = decoded.id;
      req.isAdmin = decoded.isAdmin;
      next();
    }
  } catch (error) {
    return res
      .status(401)
      .json({ error: true, type: error.name, message: error.message });
  }
};
