const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("Student", "postgres", "", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
});

module.exports = sequelize;
