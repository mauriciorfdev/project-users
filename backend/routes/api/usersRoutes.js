const express = require('express')
const router = express.Router()

//get all users
router.get('/', (req, res) => {
    res.send("hello..")
})

//Get user by id
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})

module.exports = router
