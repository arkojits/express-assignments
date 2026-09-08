import sharp from 'sharp';

const createThumbnail = async (req, res, next) => {
  if (!req.file) {
    return next();
  }

  try {
    const inputPath = req.file.path;
    const outputPath = `uploads/thumb_${req.file.filename}.jpg`;

    await sharp(inputPath)
      .resize(200, 200)
      .jpeg()
      .toFile(outputPath);

    req.file.thumbnail = `thumb_${req.file.filename}.jpg`;

    next();
  } catch (error) {
    next(error);
  }
};

export {createThumbnail};