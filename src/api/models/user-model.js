import pool from '../../db/database.js';

const listAllUsers = async () => {
  const [rows] = await pool.query('SELECT * FROM users');
  return rows;
};

const findUserById = async (id) => {
  const [rows] = await pool.query(
    'SELECT * FROM users WHERE user_id = ?',
    [id]
  );

  return rows[0];
};

const findUserByUsername = async (username) => {
  const [rows] = await pool.query(
    'SELECT * FROM users WHERE username = ?',
    [username]
  );

  return rows[0];
};

const addUser = async (user) => {
  const [result] = await pool.query(
    `INSERT INTO users
    (name, username, email, password, role)
    VALUES (?, ?, ?, ?, ?)`,
    [
      user.name,
      user.username,
      user.email,
      user.password,
      user.role,
    ]
  );

  return {
    user_id: result.insertId,
    ...user,
  };
};

const updateUser = async (id, user) => {
  const [result] = await pool.query(
    `UPDATE users
    SET name = ?, username = ?, email = ?, password = ?, role = ?
    WHERE user_id = ?`,
    [
      user.name,
      user.username,
      user.email,
      user.password,
      user.role,
      id,
    ]
  );

  return result.affectedRows;
};

const deleteUserById = async (id) => {
  const [result] = await pool.query(
    'DELETE FROM users WHERE user_id = ?',
    [id]
  );

  return result.affectedRows;
};

export {
  listAllUsers,
  findUserById,
  findUserByUsername,
  addUser,
  updateUser,
  deleteUserById,
};