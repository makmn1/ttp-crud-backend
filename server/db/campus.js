const { DataTypes } = require('sequelize')
const db = require("./database")

const Campus = db.define('campus', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        default: "./images/blankcampus.png"
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(4000),
    },

}, {
    freezeTableName: true
})

module.exports = Campus