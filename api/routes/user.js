const express = require('express');
const router = express.Router();
const UserController = require('../controller/user');

router.get('/', UserController.get_users);
router.post('/', UserController.create_user);

module.exports = router;