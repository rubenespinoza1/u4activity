const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        return res.status(400).json({ error: err });
    }
}

const getTaskById = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        return res.json(task);
    } catch (err) {
        return res.status(400).json({ 'error': err });
    }

}

const createTask = async (req, res) => {
    try {
        const newTask = await Task.create(req.body);
        res.status(201).send(newTask);
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(task);
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).json({
                error: 'Task not found'
            });
        }
    } catch (err) {
        return res.status(500).json({ error: err });
    }
}

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
};