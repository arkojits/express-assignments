const catItems = [
  {
    cat_id: 1,
    cat_name: 'Misu',
    weight: 5,
    owner: 1,
    filename: 'cat.jpg',
    birthdate: '2022-05-10',
  },
  {
    cat_id: 2,
    cat_name: 'Luna',
    weight: 4,
    owner: 2,
    filename: 'cat.jpg',
    birthdate: '2023-02-15',
  },
];

const listAllCats = () => {
  return catItems;
};

const findCatById = (id) => {
  return catItems.find((cat) => cat.cat_id == id);
};

const addCat = (cat) => {
  const newCat = {
    cat_id: catItems.length + 1,
    ...cat,
  };

  catItems.push(newCat);
  return newCat;
};

export {listAllCats, findCatById, addCat};