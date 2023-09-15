const express = require('express');
const { addUserDetails, getAUserDetails, updateUserDetails, deleteUserDetails, verify_token } = require('../controllers/UserAuthControllers');
const router = express.Router();

router.post('/register', addUserDetails);
router.post('/login', getAUserDetails);
router.patch('/register/:id', updateUserDetails);
router.delete('/register/:id', deleteUserDetails);
router.post('/verify_token', verify_token);

module.exports = ('UserAuthRouter', router);