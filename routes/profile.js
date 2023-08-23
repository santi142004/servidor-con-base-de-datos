const express = require('express');
const profileController = require('../controllers/profile-controller');
const jwtValidator = require('../middleware/auth-token');
const router = express.Router();


router.get('/', jwtValidator.njwtAuth, profileController.getProfile);


module.exports = router; 