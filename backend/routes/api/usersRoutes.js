const express = require('express')
const router = express.Router()

const { getUsers, 
    getSingleUser,
    setUser,
    updateUser,
    deleteUser,
 } = require('../../controllers/userController')
//api/users


//get all users
router.get('/', getUsers)

//get user by id
router.get('/:id', getSingleUser)

//post a new user
router.post('/', setUser)

//update user by id
router.put('/:id', updateUser)

//delete user by id
router.delete('/:id', deleteUser)

module.exports = router
