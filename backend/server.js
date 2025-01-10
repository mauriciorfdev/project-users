const express = require("express")
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 5000
const usersRouter = require('./routes/api/usersRoutes')

const app = express()

app.use('/api/users', usersRouter)

app.listen(PORT, ()=>{console.log(`Server listen on port ${PORT}...`)})