const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const {db} = require("./db")

const app = express()
const PORT = 8083


app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', require('./api'))

db.sync({alter: true}).then(() => {
    console.log("Database synced")
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
})