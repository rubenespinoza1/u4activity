const User = require('../models/User');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        return res.status(400).json({ error: err });
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        return res.json(user);
    } catch (err) {
        return res.status(400).json({ 'error': err });
    }

}

const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).send(newUser);
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(user);
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({
                error: 'User not found'
            });
        }
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};