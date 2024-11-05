const Student = require("../models/studentModel");
const profile = require("../models/profileModal");

exports.getAllStudents = async () => {
  return await Student.findAll();
};

exports.getStudentById = async (id) => {
  return await Student.findByPk(id);
};

exports.getStudentProfileById = async (id) => {
  const studentProfile = await Student.findByPk(id, {
    include: [
      {
        model: profile,
        attributes: { exclude: ["address", "id"] },
      },
    ],
    attributes: { exclude: ["id"] },
  });

  return studentProfile.profileModal;
};

exports.createStudent = async (studentData) => {
  return await Student.create(studentData);
};

exports.updateStudent = async (id, studentData) => {
  const student = await Student.findByPk(id);
  if (student) {
    return await student.update(studentData);
  }
  return null;
};

exports.deleteStudent = async (id) => {
  const student = await Student.findByPk(id);
  if (student) {
    await student.destroy();
    return true;
  }
  return false;
};
