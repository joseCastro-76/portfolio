const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

var profile = require('./profile');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/blog', (req, res) => {
    res.render('blog');
});

app.get('/projects', (req, res) => {
    res.render('projects');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/thanks', (req, res) => {
    res.render('thanks', { contact: req.body });
});

app.listen(8080, () => {
    console.log('listening at http://localhost:8080');
});