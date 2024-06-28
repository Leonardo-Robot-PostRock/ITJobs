const express = require('express');
var hbs = require('hbs');
const app = express();

const port = 3000;

//Handlebars
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

//Sirviendo contenido estático
app.use(express.static('public'));


//Controlador
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Home',
        titulo: 'ITJobs'
    });
});

app.get('/table', (req, res) => {
    res.render('table', {
        name: 'Table',
        title: 'ITJobs'
    })
});

app.get('/table', (req, res) => {
    res.sendFile(__dirname + '/public/table.html')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})