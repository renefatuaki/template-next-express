import express from 'express';

const router = express.Router();

router.get('/app', (req, res) => {
  res.json({ message: 'Hello from app route.' });
});

export default router;
