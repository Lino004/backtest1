const express = require('express');

const { createTest } = require('../controllers/testController');

const router = express.Router();

// test Routes

router.post('/test', createTest);

module.exports = router;
