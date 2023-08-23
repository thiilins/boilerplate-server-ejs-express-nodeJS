"use strict";
module.exports = {
  development: {
    username: process.env.DEV_DB_USERNAME,
    password: process.env.DEV_DB_PASSWORD,
    database: process.env.DEV_DB_NAME,
    host: process.env.DEV_DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DEV_DB_PORT,
  },
  test: {
    username: process.env.HML_DB_USERNAME,
    password: process.env.HML_DB_PASSWORD,
    database: process.env.HML_DB_NAME,
    host: process.env.HML_DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.HML_DB_PORT,
  },
  production: {
    username: process.env.PRD_DB_USERNAME,
    password: process.env.PRD_DB_PASSWORD,
    database: process.env.PRD_DB_NAME,
    host: process.env.PRD_DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.PRD_DB_PORT,
  },
};
