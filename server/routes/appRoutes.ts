'use strict';

const router = express.Router();

router.get('/app', (req, res) => {
  res.json({ message: 'Hello from express.js' });
});

module.exports = router;
