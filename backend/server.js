import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';


const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(express.json()); // to accept JSON data in the body

app.listen(PORT, () => {
  connectDB()
  console.log('Server is running on http://localhost:3000');
});


