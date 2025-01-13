const express = require("express")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 5000
const usersRouter = require('./routes/api/usersRoutes')
const connectDB = require('./config/db')

const app = express()

//Body Parser Middleware
app.use(express.json())

app.use('/api/users', usersRouter)

connectDB()

app.listen(PORT, () => {console.log(`Server listen on port ${PORT}...`)})