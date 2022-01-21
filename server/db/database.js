const Sequelize = require('sequelize')
const dbConfig = require('../../config/db.config')
const pkg = require("../../package.json")

const db = new Sequelize(
    dbConfig.dbURL || `postgres://localhost:5432/${pkg.name}`,
    {
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        logging: false
    }
)

module.exports = db
