const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("Student", "postgres", "", {
  host: "localhost",
  dialect: "postgres",
  port: 5433,
});

module.exports = sequelize;
