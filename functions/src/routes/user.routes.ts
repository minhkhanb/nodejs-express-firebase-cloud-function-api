import Router from 'express-promise-router';
import { createNewUser, deleteUser, updateUser } from '../controllers/user.controller';

const router = Router();

router.get('/health', (req, res) => {
  res.send('Health is look goods');
});

router.post('/user/create', createNewUser);
router.post('/user/:id/update', updateUser);
router.post('/user/:id/delete', deleteUser);

export default router;
