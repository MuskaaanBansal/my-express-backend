// models/courseModel.js
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const StudentCourse = sequelize.define(
  "StudentCourse",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "studentcourse",
    timestamps: false,
  }
);

module.exports = StudentCourse;
