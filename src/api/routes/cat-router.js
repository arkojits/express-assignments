import express from 'express';
import multer from 'multer';
import {createThumbnail} from '../../middlewares/image-middleware.js';

import {
  getCats,
  getCatById,
  postCat,
  putCat,
  deleteCat,
} from '../controllers/cat-controller.js';

const catRouter = express.Router();

const upload = multer({dest: 'uploads/'});

catRouter.get('/', getCats);
catRouter.get('/:id', getCatById);

catRouter.post('/', upload.single('cat'), createThumbnail, postCat);

catRouter.put('/:id', putCat);
catRouter.delete('/:id', deleteCat);

export default catRouter;