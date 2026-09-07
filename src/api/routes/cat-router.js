import express from 'express';

import {
  getCats,
  getCatById,
  postCat,
  putCat,
  deleteCat,
} from '../controllers/cat-controller.js';

const catRouter = express.Router();

catRouter.get('/', getCats);

catRouter.get('/:id', getCatById);

catRouter.post('/', postCat);

catRouter.put('/:id', putCat);

catRouter.delete('/:id', deleteCat);

export default catRouter;