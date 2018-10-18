const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController.js');

router.post('/regis', authController.regis);
router.post('/login', authController.login);
router.patch('/forgot', authController.forgot);

module.exports = router;
