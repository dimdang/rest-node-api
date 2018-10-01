const express = require('express');
const router = express.Router();
const ClientController = require('../controller/client');

router.get('/', ClientController.get_all_clients);
router.post('/', ClientController.create_client);

module.exports = router;