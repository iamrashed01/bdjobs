const router = require('express').Router();
const auth = require('../middleware/auth');

const {
  registerController,
  loginController,
  verifyAccountController,
  forgetPasswordController,
  resetPasswordController,
} = require('../controllers/authController');

router.post('/register', registerController);
router.post('/login', loginController);
router.post('/verify-email', auth, verifyAccountController);
router.post('/forget-password', forgetPasswordController);
router.post('/reset-password', resetPasswordController);

module.exports = router;
