const express = require('express');
const router = express.Router();
const AutherizeController = require('../controller/oauth2');

router.get('/', AutherizeController.authorization);
router.post('/', AutherizeController.decision);

module.exports = router;