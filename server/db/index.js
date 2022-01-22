const db = require("./database")
const Student = require("./student")
const Campus = require("./campus")


Campus.belongsToMany(Student, {through: "Campus_Student"})

Campus.hasMany(Student)
Student.belongsTo(Campus)

module.exports = {
    db,
    Student,
    Campus
}