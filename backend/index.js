require('dotenv').config();
const colors = require('colors')
const express = require('express');
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db')
const port = process.env['PORT'] || 5000;


connectDB()
const app = express();


app.use(express.json());

app.use('/api/heroes', require('./routes/heroRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`))

// console.log('NODE ENV', process.env['PORT']);
// console.log('HELLO WORLD')