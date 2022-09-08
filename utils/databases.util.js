const { Sequelize, DataTypes } = require("sequelize");

//Conecting to data base
const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "990721",
  port: "5432",
  database: "Checker",
  logging: false,
});

//Export const db

module.exports = { db, DataTypes };
