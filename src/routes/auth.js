const express = require('express');
const router = express.Router();

const authController = require('../controller/auth');

router.post('/register', authController.UserRegister);
router.post('/login', authController.UserLogin);
router.post('/refresh-token', authController.RefreshToken);
router.delete('/logout', authController.UserLogout);

module.exports = router;