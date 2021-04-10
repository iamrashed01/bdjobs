const router = require('express').Router();
const auth = require('../middleware/auth');

const { getProfileController } = require('../controllers/userController');

router.get('/', auth, getProfileController);

module.exports = router;
