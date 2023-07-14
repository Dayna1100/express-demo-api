//require express and use it to create our router from express.Router()
const express = require("express");
const router = express.Router();

//get all the users
// router.get("/students", function(req, res) {
//   res.send("This is the default student route")
// })

const studentController = require("../controlllers/student.controller")

//get all the students
router.get("/students", studentController.findAll)

//find by ID
router.get("/students/:id", studentController.findById)

//add a student
router.post("/students", studentController.add)

//update a student by id 
router.put("/students/:id", studentController.update)

//delete a student by id 
router.delete("/students/:id", studentController.delete)

module.exports = router;