const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const studentRoutes = require('./routes/studentRoutes');

const app = express();

// View Engine
app.set('view engine', 'pug');
app.set('views', './views');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

app.use(express.static('public'));

// Routes
app.use('/', studentRoutes);

// Server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});