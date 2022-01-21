const Sequelize = require('sequelize')
const db = require("./database")


const Student = db.define('student', {
    firstName: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: false
    },
    image: {
        type: Sequelize.STRING(2048),
        default: "./images/blank-profile-pic.png"
    },
    gpa: {
        type: Sequelize.DECIMAL(3, 2),
        allowNull: true
    }
}, {
    freezeTableName: true
})

module.exports = Student