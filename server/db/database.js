const sequelize = require('sequelize')
const dbConfig = require('../../config/db.config')
const pkg = require("../../package.json")

const db = new sequelize(
    dbConfig.dbURL || `postgres://localhost:5432/${pkg.name}`,
    {
        user: dbConfig.USER,
        password: dbConfig.PASSWORD,
        logging: false
    }
)

// DO NOT UNCOMMENT THE LINE BELOW UNLESS YOU WANT TO RESET YOUR DATABASE
// db.sync({ force: true })

async function connectStatus() {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connectStatus()

module.exports = db
