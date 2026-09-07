import express from 'express';

const app = express();
const port = 3000;

app.use('/public', express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

app.get('/api/v1/cats', (req, res) => {
  const cat = {
    cat_id: 1,
    name: 'Misu',
    birthdate: '2022-05-10',
    weight: 5,
    owner: 'John',
    image: 'cat.jpg',
  };

  res.json(cat);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});