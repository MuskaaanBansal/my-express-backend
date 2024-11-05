const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");
const Profile = require("./Profile");
const Course = require("./Course");
const StudentCourse = require("./StudentCourse");

const Student = sequelize.define(
  "Student",
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
  through: StudentCourse,
  foreignKey: "student_id",
});

Course.belongsToMany(Student, {
  through: StudentCourse,
  foreignKey: "course_id",
});

module.exports = Student;
