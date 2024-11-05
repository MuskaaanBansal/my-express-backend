const express = require("express");
const router = express.Router();

const CoursesController = require("../controllers/courseController");

router.get("/", CoursesController.getAllCourses);
router.get("/:id", CoursesController.getCourseById);
router.post("", CoursesController.createCourse);
router.put("/:id", CoursesController.updateCourse);
router.delete("/:id", CoursesController.deleteCourse);

module.exports = router;
