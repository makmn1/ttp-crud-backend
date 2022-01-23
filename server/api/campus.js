const router = require("express").Router()
const Campus = require("../db/Campus")
const Student = require("../db/student")

router.get("/", async (req, res) => {
    try {
        const campus = await Campus.findAll()
        res.status(200).send(campus)
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
})

//get single campus based on id
router.get("/:id", async (req, res) => {
    try {
        const campus = await Campus.findByPk(req.params.id);
        res.status(200).json(campus);
    } catch(error) {
        console.log(error)
        res.status(404).send(error)
    }
})

//get single campus based on id with its students
router.get("/:id/students", async (req, res) => {
    try {
        const campus = await Campus.findByPk(req.params.id);
        const students = await Student.findAll({
            where: {
                campusId: req.params.id
            }
        })

        res.status(200).json({
            campus,
            students
        })

    } catch(error) {
        console.log(error)
        res.status(404).send(error)
    }
})


router.post("/", async (req, res) => {
    try {
        console.log(req.body)
        const newCampus = await Campus.create(req.body)
        res.status(201).send(newCampus)
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
})

router.patch("/:id",async (req,res) => {
    try{
        console.log(req.body)
        await Campus.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).send()
    } catch(error){
        console.log(error)
        res.status(404).send(error)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const campus = await Campus.findByPk(req.params.id)
        campus.destroy()
        res.status(200).send(`Deleted campus with ID of ${req.params.id}`)
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
})


module.exports = router