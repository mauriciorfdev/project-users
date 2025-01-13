const express = require('express')
const router = express.Router()
const { UserModel } = require('../../models/userModel')
//api/users


//DESC      get all users
router.get('/', async (req, res) => {
    const users = await UserModel.find()
    return res.status(200).json(users)
})


//DESC      Get user by id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    try {
        if(!user){
            return res.status(404).json({msg: 'User Not Found'});
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({msg: 'Internal Server Error', error: error.message});
    }
})

//DESC      post a new user
router.post('/', async (req, res) => {
    try {
        const { name } = req.body
        if (!name){
            return res.status(400).json({msg: 'Bad Request: name not found'})
        }
        const newUser = new UserModel({ name })
        const insertedUser = await newUser.save()
        return res.status(201).json({inserted: insertedUser})
    } catch (error) {
        return res.status.json({msg: 'Internal Server Error', error: error.message})
    }
})


//update user by id
router.put('/:id', async (req, res) => {
    const id = req.params.id
    const { name } = req.body
    try {
        if (!name){
            return res.status(400).json({msg: 'Bad Request name not found'})
        }
        const data = await UserModel.findByIdAndUpdate(id, {name}, {new:true})
        if(!data){
            return res.status(404).json({msg: `User  with id ${id} not found for update`})
        }
        else return res.send(data)
    } catch (error) {
        return res.status(500).json({msg: 'Internal Server Error', error: error.message});
    }
})

//delete user by id
router.delete('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const data = await UserModel.findByIdAndDelete(id)
        if(!data){
            return res.status(404).json(`User with id ${id} not found for delete`)
        } else return res.send(data)
    } catch (error) {
        return res.status(500).json({msg: 'Internal Server Error', error: error.message});
    }
})

module.exports = router
