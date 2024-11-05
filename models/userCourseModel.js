// models/courseModel.js
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const UserCourseModal = sequelize.define(
  "userCourseModal",
  {
    course_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "userCourses",
    timestamps: false,
  }
);

module.exports = UserCourseModal;
