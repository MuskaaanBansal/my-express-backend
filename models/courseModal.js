// models/courseModel.js
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const Student = require("./studentModel");
const UserCourseModal = require("./userCourseModel");

const Course = sequelize.define(
  "courseModal",
  {
    course_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    course_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    course_code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "courses",
    timestamps: false,
  }
);

Course.belongsToMany(Student, {
  through: UserCourseModal,
  foreignKey: "course_id",
});

module.exports = Course;
