const express = require("express");
const router = express.Router();

const studentController = require("../controllers/studentController");

router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getStudentById);
router.post("", studentController.createStudent);
router.put("/:id", studentController.updateStudent);
router.delete("/:id", studentController.deleteStudent);

// get profile of student
router.get("/:id/profile", studentController.getStudentProfileById);

// get all courses of student
router.get("/:id/courses", studentController.getAllStudentCourses);

module.exports = router;
