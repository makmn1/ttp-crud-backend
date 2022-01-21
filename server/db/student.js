const Sequelize = require('sequelize')
const db = require("./database")

const Student = db.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gender: {
        type: Sequelize.ENUM("M", "F", "O"),
        allowNull: false
    },
    dob: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    image: {
        type: Sequelize.TEXT
    }
})

module.exports = Student