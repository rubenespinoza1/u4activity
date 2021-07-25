const { Router } = require('express');
const router = Router();

const AuthService = require('../services/AuthService');

router.post('/auth/register', AuthService.register);
router.post('/auth/login', AuthService.login);
router.post('/auth/logout', AuthService.logout);

module.exports = router;