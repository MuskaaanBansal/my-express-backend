const coursesService = require("../services/courseService");

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await coursesService.getAllCourses();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const courses = await coursesService.getCourseById(req.params.id);
    if (courses) {
      res.json(courses);
    } else {
      res.status(404).json({ error: "Course not found!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

exports.createCourse = async (req, res) => {
  try {
    const course = await coursesService.createCourse(req.body);
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const course = await coursesService.updateCourse(req.params.id, req.body);
    if (course) {
      res.json(course);
    } else {
      res.status(404).json({ error: "Course not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const result = await coursesService.deleteCourse(req.params.id);
    if (result) {
      res.json({ message: "Course deleted successfully" });
    } else {
      res.status(404).json({ error: "Course not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
