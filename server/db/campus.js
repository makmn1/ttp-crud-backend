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
        defaultValue: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
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