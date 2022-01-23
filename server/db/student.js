const { DataTypes } = require('sequelize')
const db = require("./database")


const Student = db.define('student', {
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    image: {
        type: DataTypes.STRING(2048),
        default: "./images/blank-profile-pic.png"
    },
    gpa: {
        type: DataTypes.DECIMAL(3, 2),
        allowNull: true
    }
}, {
    freezeTableName: true
})

module.exports = Student