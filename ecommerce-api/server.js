const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

// iniciando o db
mongoose.connect('mongodb://192.168.99.100:27017/ecommerceapi', 
    { useNewUrlParser: true,   useUnifiedTopology: true 
});
requireDir('./src/models');

// rotas
app.use('/api', require("./src/routes")); 

app.listen(3001);