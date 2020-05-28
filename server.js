const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Inicio da Aplicacao
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useUnifiedTopology: true, useNewUrlParser: true } 
    
);
requireDir('./src/models');


// Rotas
app.use('/', require('./src/routes'));




app.listen(3001);