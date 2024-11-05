const express = require("express");
const app = express();
const db = require("./config/dbConfig");
const userRoutes = require("./routes/users");
const studentRoutes = require("./routes/students");
const courseRoutes = require("./routes/courses");
const cors = require("cors");

app.use(express.json());
app.use("/users", userRoutes);
app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);

const PORT = process.env.PORT || 3001;

// Enable CORS for all routes with specific origin

// Enable CORS for all routes
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = app;
