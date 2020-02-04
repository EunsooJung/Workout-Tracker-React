const express = require('express');
const cors = require('cors');
// To connect Atlas MongoDB
const mongoose = require('mongoose');

require('dotenv').config();

// Create express server
const app = express();
const port = process.env.PORT || 5000;

// cors middleware
app.use(cors());
// To parse json
app.use(express.json());

// Import routes files
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

// Use imported routes files
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// MongoDB URI
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
