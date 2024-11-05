const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const StudentProfile = sequelize.define(
  "profileModal",
  {
    profile_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    profile_picture_url: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "studentprofile",
    timestamps: false,
  }
);

module.exports = StudentProfile;
