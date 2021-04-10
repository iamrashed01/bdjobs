const router = require('express').Router();
const auth = require('../middleware/auth');

const { registerController, loginController, verifyAccountController } = require('../controllers/authController');

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/verify-email', auth, verifyAccountController);

module.exports = router;
