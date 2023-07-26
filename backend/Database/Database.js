const mongoose = require('mongoose');
const uri = 'mongodb://127.0.0.1:27017/rentinggo';

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log('connected to the database'))
    .catch((err)=> console.log('error occured while connecting to the dataBase, ', err));

module.exports = mongoose.connect;