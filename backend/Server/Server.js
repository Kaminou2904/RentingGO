const express = require('express');
const port = 9999;
const app = express();
const db = require('../Database/Database');
const allProCont = require('../Controller/ProductController');
const formCont = require('../Controller/FormController');

app.get('/', (req, res)=>{
    res.send('hello this is first response');
});

app.get('/allpro', allProCont);
app.post('/formup', formCont)

app.listen(port, ()=>{
    console.log('server started on port ', port);
});