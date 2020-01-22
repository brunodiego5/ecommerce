const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const path = require('path');

// iniciando o app
const app = express();


// iniciando o db
mongoose.connect('mongodb://192.168.99.100:27017/ecommerceapi', 
    { useNewUrlParser: true,   useUnifiedTopology: true 
});
requireDir('./src/models');

app.use(cors());
app.use(express.json());
//console.log(path.resolve(__dirname, '.', 'uploads'));
app.use('/files', express.static(path.resolve(__dirname, '.', 'uploads')));
app.use('/api', require("./src/routes")); 
app.listen(3001);