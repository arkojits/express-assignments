import app from './app.js';
import pool from './db/database.js';

const hostname = '127.0.0.1';
const port = 3000;

try {
  const connection = await pool.getConnection();
  console.log('Database connected');
  connection.release();
} catch (error) {
  console.error('Database connection failed:', error.message);
}

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});