// Import express dependency
const express = require('express');

// Middleware for publuc folder
app.use(express.static('public'));

// Middleware for parsing json 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Assign express() function to a new variable name: app
const app = express();
const PORT = process.env.PORT || 3001;

// HTML and API routes 
const apiRouter = require('./routes/apiRoutes');
const htmlRouter = require('./routes/htmlRoutes');
app.use('/api', apiRouter);
app.use('/', htmlRouter);

// app listener 
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});