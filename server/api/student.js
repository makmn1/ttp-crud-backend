const router = require("express").Router()
const Student = require("../db/Student")

router.get("/", async (req, res) => {
    try {
        const students = await Student.findAll()
        res.status(200).send(students)
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
})

router.post("/", async (req, res) => {
    try {
        console.log(req.body)
        const newStudent = await Student.create(req.body)
        res.status(201).send(newStudent)
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
})

module.exports = router