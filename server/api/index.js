const router = require("express").Router()

router.use("/students", require("./student"))
router.use("/campuses", require("./campus"))
module.exports = router