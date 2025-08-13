const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
app.use(cors()); // <-- This allows React app (localhost:3000) to access backend
app.use(express.json());

connectDB();

app.use('/api/chat', require('./routes/chatRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});