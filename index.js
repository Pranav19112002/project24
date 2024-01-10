const express = require('express');
const cors = require('cors');
const mongoose = require('./db'); // Import the database connection

const usersRouter = require('./Routes/usersRouter');

const app = express();
const port = 3005;

app.use(cors());
app.use(express.json());

app.use('/api/users', usersRouter);

app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});
