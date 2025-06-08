// src/routes/index.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

// Authentication routes
router.post('/auth/registration', authController.register);
router.put('/auth/activateAccount', authController.activateAccount);
router.put('/auth/resendCode', authController.resendActivationCode);
router.put('/auth/recoveryAccount', authController.sendRecoveryCode);
router.put('/auth/resetPassword', authController.resetPassword);
router.post('/auth/login', authController.login);

// User management routes
router.get('/user/profile', userController.getUserProfile);
router.put('/user/update', userController.updateUserProfile);

module.exports = router;