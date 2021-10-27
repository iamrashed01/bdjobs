const router = require('express').Router();

router.post('/', (req, res) => {
  res.send('attribute');
});

module.exports = router;
