import {
  listAllCats,
  findCatById,
  addCat,
  updateCat,
  deleteCatById,
} from '../models/cat-model.js';

const getCats = async (req, res) => {
  const cats = await listAllCats();
  res.json(cats);
};

const getCatById = async (req, res) => {
  const cat = await findCatById(req.params.id);

  if (!cat) {
    return res.status(404).json({
      message: 'Cat not found',
    });
  }

  res.json(cat);
};

const postCat = async (req, res) => {
  console.log('body:', req.body);
  console.log('file:', req.file);

  const cat = {
    ...req.body,
    filename: req.file ? req.file.filename : null,
  };

  const newCat = await addCat(cat);

  res.status(201).json(newCat);
};

const putCat = async (req, res) => {
  const updated = await updateCat(req.params.id, req.body);

  if (!updated) {
    return res.status(404).json({
      message: 'Cat not found',
    });
  }

  res.json({
    message: 'Cat item updated.',
  });
};

const deleteCat = async (req, res) => {
  const deleted = await deleteCatById(req.params.id);

  if (!deleted) {
    return res.status(404).json({
      message: 'Cat not found',
    });
  }

  res.json({
    message: 'Cat item deleted.',
  });
};

export {getCats, getCatById, postCat, putCat, deleteCat};