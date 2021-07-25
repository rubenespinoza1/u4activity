const { Router } = require('express');
const router = new Router();

const UserService = require('../services/UserService')

router.get('/users', UserService.getAllUsers);
router.get('/users/:id', UserService.getUserById);
router.put('/users/:id', UserService.updateUser);
router.post('/users/', UserService.createUser);
router.delete('/users/:id', UserService.deleteUser);

module.exports = router;

