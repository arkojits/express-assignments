import pool from '../../db/database.js';

const listAllCats = async () => {
  const [rows] = await pool.query('SELECT * FROM cats');
  return rows;
};

const findCatById = async (id) => {
  const [rows] = await pool.query(
    'SELECT * FROM cats WHERE cat_id = ?',
    [id]
  );

  return rows[0];
};

const addCat = async (cat) => {
  const [result] = await pool.query(
    `INSERT INTO cats
    (cat_name, weight, owner, filename, birthdate)
    VALUES (?, ?, ?, ?, ?)`,
    [
      cat.cat_name,
      cat.weight,
      cat.owner,
      cat.filename,
      cat.birthdate,
    ]
  );

  return {
    cat_id: result.insertId,
    ...cat,
  };
};

const updateCat = async (id, cat) => {
  const [result] = await pool.query(
    `UPDATE cats
    SET cat_name = ?, weight = ?, owner = ?, filename = ?, birthdate = ?
    WHERE cat_id = ?`,
    [
      cat.cat_name,
      cat.weight,
      cat.owner,
      cat.filename,
      cat.birthdate,
      id,
    ]
  );

  return result.affectedRows;
};

const deleteCatById = async (id) => {
  const [result] = await pool.query(
    'DELETE FROM cats WHERE cat_id = ?',
    [id]
  );

  return result.affectedRows;
};

export {
  listAllCats,
  findCatById,
  addCat,
  updateCat,
  deleteCatById,
};