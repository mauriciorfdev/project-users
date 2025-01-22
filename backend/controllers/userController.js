const { UserModel } = require('../models/userModel')


//DESC      get users
//ROUTE     GET /api/users
async function getUsers(req, res) {
    try {
        const users = await UserModel.find();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ msg: 'Internal Server Error', error: error.message });
    }
}


//DESC      get user by id
//ROUTE     GET /api/users/:id
async function getSingleUser(req, res) {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    try {
        if (!user) {
            return res.status(404).json({ msg: 'User Not Found' });
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ msg: 'Internal Server Error', error: error.message });
    }
}


//DESC      post user
//ROUTE     POST /api/users
async function setUser(req, res) {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ msg: 'Bad Request: name not found or empty' });
        }
        const newUser = new UserModel({ name });
        const insertedUser = await newUser.save();
        return res.status(201).json({ inserted: insertedUser });
    } catch (error) {
        return res.status.json({ msg: 'Internal Server Error', error: error.message });
    }
}


//DESC      update user
//ROUTE     PUT /api/users/:id
async function updateUser(req, res) {
    const id = req.params.id;
    const { name } = req.body;
    try {
        if (!name) {
            return res.status(400).json({ msg: 'Bad Request name not found or empty' });
        }
        const data = await UserModel.findByIdAndUpdate(id, { name }, { new: true });
        if (!data) {
            return res.status(404).json({ msg: `User  with id ${id} not found for update` });
        }
        else return res.send(data);
    } catch (error) {
        return res.status(500).json({ msg: 'Internal Server Error', error: error.message });
    }
}


//DESC      delete user
//ROUTE     DELETE /api/users/:id
async function deleteUser(req, res) {
    const { id } = req.params;
    try {
        const data = await UserModel.findByIdAndDelete(id);
        if (!data) {
            return res.status(404).json(`User with id ${id} not found for delete`);
        } else return res.send(data);
    } catch (error) {
        return res.status(500).json({ msg: 'Internal Server Error', error: error.message });
    }
}

module.exports = {
    getUsers,
    getSingleUser,
    setUser,
    updateUser,
    deleteUser,
}