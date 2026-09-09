import bcrypt from 'bcrypt';

import {
  listAllUsers,
  findUserById,
  addUser,
  updateUser,
  deleteUserById,
} from '../models/user-model.js';

const getUsers = async (req, res) => {
  const users = await listAllUsers();
  res.json(users);
};

const getUserById = async (req, res) => {
  const user = await findUserById(req.params.id);

  if (!user) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

  res.json(user);
};

const postUser = async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 10);

  const newUser = await addUser(req.body);

  res.status(201).json(newUser);
};

const putUser = async (req, res) => {
  const updated = await updateUser(req.params.id, req.body);

  if (!updated) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

  res.json({
    message: 'User item updated.',
  });
};

const deleteUser = async (req, res) => {
  const deleted = await deleteUserById(req.params.id);

  if (!deleted) {
    return res.status(404).json({
      message: 'User not found',
    });
  }

  res.json({
    message: 'User item deleted.',
  });
};

export {getUsers, getUserById, postUser, putUser, deleteUser};