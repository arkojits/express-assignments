import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import {findUserByUsername} from '../models/user-model.js';

const login = async (req, res) => {
  const {username, password} = req.body;

  const user = await findUserByUsername(username);

  if (!user) {
    return res.status(401).json({
      message: 'Invalid username or password',
    });
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({
      message: 'Invalid username or password',
    });
  }

  const token = jwt.sign(
    {
      user_id: user.user_id,
      username: user.username,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1h',
    }
  );

  res.json({
    message: 'Login successful',
    token: token,
  });
};

const getMe = (req, res) => {
  res.json(res.locals.user);
};

export {login, getMe};