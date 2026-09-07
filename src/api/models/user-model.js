const userItems = [
  {
    user_id: 1,
    name: 'John Doe',
    username: 'johndoe',
    email: 'john@example.com',
    role: 'user',
    password: 'password',
  },
  {
    user_id: 2,
    name: 'Jane Doe',
    username: 'janedoe',
    email: 'jane@example.com',
    role: 'user',
    password: 'password',
  },
];

const listAllUsers = () => {
  return userItems;
};

const findUserById = (id) => {
  return userItems.find((user) => user.user_id == id);
};

const addUser = (user) => {
  const newUser = {
    user_id: userItems.length + 1,
    ...user,
  };

  userItems.push(newUser);
  return newUser;
};

export {listAllUsers, findUserById, addUser};