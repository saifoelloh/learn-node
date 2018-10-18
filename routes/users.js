const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');

router.get('/', userController.index);

router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;
