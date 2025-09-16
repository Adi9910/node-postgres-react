import {Router} from 'express';
import userController from '../controllers/user.controller';

const router = Router();

router.get('/', userController.fetchUsers);
router.get('/:id', userController.fetchUsersById);
router.post('/add', userController.createUser);
router.put('/update/:id', userController.updateUser);
router.get('/delete/:id', userController.deleteUser);

export default router;