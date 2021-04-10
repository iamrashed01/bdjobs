const router = require('express').Router();
const auth = require('../middleware/auth');

const { getProfileController, updateProfileController } = require('../controllers/userController');

router.get('/', auth, getProfileController);
router.post('/', auth, updateProfileController);

module.exports = router;
