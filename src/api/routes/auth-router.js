import express from 'express';

import {
  login,
  getMe,
} from '../controllers/auth-controller.js';

import {authenticateToken} from '../../middlewares/authentication.js';

import {
  validateLogin,
  validationErrors,
} from '../../middlewares/validation.js';

const authRouter = express.Router();

authRouter.post(
  '/login',
  validateLogin,
  validationErrors,
  login
);

authRouter.get('/me', authenticateToken, getMe);

export default authRouter;