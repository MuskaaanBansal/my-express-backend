const Courses = require("../models/Course");

exports.getAllCourses = async () => {
  return await Courses.findAll();
};

exports.getCourseById = async (id) => {
  return await Courses.findByPk(parseInt(id));
};

exports.createCourse = async (courseData) => {
  return await Courses.create(courseData);
};

exports.updateCourse = async (id, CourseData) => {
  const course = await Courses.findByPk(id);
  if (course) {
    return await course.update(CourseData);
  }
  return null;
};

exports.deleteCourse = async (id) => {
  const course = await Courses.findByPk(id);
  if (course) {
    await course.destroy();
    return true;
  }
  return false;
};
