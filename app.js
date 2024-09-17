const express = require('express');
var hbs = require('hbs');
const path = require('path');
const app = express();

const port = 3000;

//Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

//Sirviendo contenido estático
app.use(express.static('public'));

//Controlador
app.get('/', (req, res) => {
    res.render('pages/home', {
        nombre: 'Home',
        titulo: 'ITJobs'
    });
});

app.get('/users-table', (req, res) => {
    res.render('pages/users-table', {
        name: 'Table',
        title: 'ITJobs'
    })
});

app.get('/login', (req,res) => {
    res.render('pages/login', {
        name: 'Login',
        title: 'ITJobs'
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})