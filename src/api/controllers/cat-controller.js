import {
  listAllCats,
  findCatById,
  addCat,
} from '../models/cat-model.js';

const getCats = (req, res) => {
  res.json(listAllCats());
};

const getCatById = (req, res) => {
  const cat = findCatById(req.params.id);

  if (!cat) {
    return res.status(404).json({
      message: 'Cat not found',
    });
  }

  res.json(cat);
};

const postCat = (req, res) => {
  console.log('body:', req.body);
  console.log('file:', req.file);

  const cat = {
    ...req.body,
    filename: req.file ? req.file.filename : null,
  };

  const newCat = addCat(cat);

  res.status(201).json(newCat);
};

const putCat = (req, res) => {
  res.json({
    message: 'Cat updated',
  });
};

const deleteCat = (req, res) => {
  res.json({
    message: 'Cat deleted',
  });
};

export {getCats, getCatById, postCat, putCat, deleteCat};