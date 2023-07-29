const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 9999;
const app = express();
const db = require('../Database/Database');
const allProCont = require('../Controller/ProductController');
const {validateForm, formCont} = require('../Controller/FormController');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('hello this is first response');
});

app.get('/allpro', allProCont);
app.post('/formup', validateForm, formCont)

app.listen(port, ()=>{
    console.log('server started on port ', port);
});