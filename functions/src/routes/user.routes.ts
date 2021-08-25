import Router from 'express-promise-router';

const router = Router();

router.get('/health', (req, res) => {
  res.send('Health is look goods');
});

export default router;
