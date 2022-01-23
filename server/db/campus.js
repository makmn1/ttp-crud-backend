const { DataTypes } = require('sequelize')
const db = require("./database")

const Campus = db.define('campus', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true
        }
    },
    image: {
        type: DataTypes.TEXT,
        defaultValue: "./images/blankcampus.png"
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
            notNull: true
        }
    },
    description: {
        type: DataTypes.STRING(4000),
    },

}, {
    freezeTableName: true
})

module.exports = Campus