const Sequelize = require('sequelize')
const db = require("./database")

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.TEXT,
    },
    address: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(4000),
    }
})

module.exports = Campus