const router = require("express").Router()

router.use("/students", require("./student"))
router.use("/campus", require("./campus"))
module.exports = router