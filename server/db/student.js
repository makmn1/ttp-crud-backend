const { DataTypes } = require('sequelize')
const db = require("./database")


const Student = db.define('student', {
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true
        }
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true
        }
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true,
            isEmail: true
        }
    },
    image: {
        type: DataTypes.STRING(2048),
        defaultValue: "./images/blank-profile-pic.png"
    },
    gpa: {
        type: DataTypes.DECIMAL(3, 2),
        allowNull: true
    }
}, {
    freezeTableName: true
})

module.exports = Student