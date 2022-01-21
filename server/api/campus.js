const router = require("express").Router()
const Campus = require("../db/Campus")
const Student = require("../db/student");

router.get("/", async (req, res) => {
    try {
        const campus = await Campus.findAll()
        res.status(200).send(campus)
    } catch (error) {
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

module.exports = router