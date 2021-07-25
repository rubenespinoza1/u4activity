const { Router } = require('express');
const router = new Router();

const TaskService = require('../services/TaskService');
const checkIfAdmin = require('../middlewares/checkIfAdmin');
const checkIfOwner = require('../middlewares/checkIfOwner');
const checkIfLogedIn = require('../middlewares/checkIfLogedIn');

router.get('/tasks', checkIfAdmin, TaskService.getAllTasks);
router.get('/tasks/:id', checkIfLogedIn, checkIfOwner, TaskService.getTaskById);
router.put('/tasks/:id', checkIfLogedIn,checkIfOwner, TaskService.updateTask);
router.post('/tasks/', checkIfLogedIn, checkIfOwner, TaskService.createTask);
router.delete('/tasks/:id', checkIfLogedIn, checkIfOwner, TaskService.deleteTask);

module.exports = router;