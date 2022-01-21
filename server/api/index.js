const router = require("express").Router()

router.use("/students", require("./student"))

module.exports = router