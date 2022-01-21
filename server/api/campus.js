const router = require("express").Router()
const Student = require("../db/Campus")

router.get("/", async (req, res) => {
    try {
        const campus = await Campus.findAll()
        res.status(200).send(campus)
    } catch (error) {
        console.log(error)
        res.status(404).send(error)
    }
})

module.exports = router