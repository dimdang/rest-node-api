const express = require('express');
const router = express.Router();
const TokenController = require('../controller/oauth2');

router.post('/', TokenController.token);

module.exports = router;