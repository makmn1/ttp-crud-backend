const router = require("express").Router()
const Student = require("../db/student")

router.get("/", async (req, res) => {
    try {
        const students = await Student.findAll()
        res.status(200).send(students)
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
})
//get student based on id
router.get("/:id",async (req,res) => {
    try{
        const student = await Student.findByPk(req.params.id);
        res.status(200).json(student);
    } catch(error){
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

router.delete("/:id", async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id)
        student.destroy()
        res.status(200).send(`Deleted student with ID of ${req.params.id}`)
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
})


module.exports = router