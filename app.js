const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');

const List = require('./database/models/list');
const Task = require('./database/models/task');


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


app.get('/lists', (req, res) => {
    Task.find({})
    .then(lists => res.send(lists))
    .catch((error) => console.log(error));
});




app.use(express.json());
app.listen(3000, () => console.log('Server is Connected on port 3000'));


