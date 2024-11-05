const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const Profile = require("./profileModal");
const Course = require("./courseModal");

const Student = sequelize.define(
  "StudentModel",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true,
    },
    enrollment_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "student",
    timestamps: false,
  }
);

Student.hasOne(Profile, {
  foreignKey: "student_id",
});

Student.belongsToMany(Course, {
  through: "userCourseModal",
  foreignKey: "student_id",
});

module.exports = Student;
