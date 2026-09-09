import express from 'express';

import {
  getUsers,
  getUserById,
  postUser,
  putUser,
  deleteUser,
} from '../controllers/user-controller.js';

import {
  validateUser,
  validationErrors,
} from '../../middlewares/validation.js';

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);

userRouter.post(
  '/',
  validateUser,
  validationErrors,
  postUser
);

userRouter.put('/:id', putUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;