const express = require("express")
const dotenv = require("dotenv").config()
const cors = require("cors")
const PORT = process.env.PORT || 5000
const usersRouter = require('./routes/api/usersRoutes')
const connectDB = require('./config/db')

const app = express()

//Body Parser Middleware
app.use(express.json());

app.use(cors());

app.use('/api/users', usersRouter);

connectDB()

app.listen(PORT, () => {console.log(`Server listen on port ${PORT}...`)})