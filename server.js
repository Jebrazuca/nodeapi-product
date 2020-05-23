const express = require('express');
const mongoose = require('mongoose');

// Inicio da Aplicacao
const app = express();

// Iniciando DB
mongoose.connect(
    'mongodb://localhost:27017/nodeapi', 
    { useNewUrlParser: true }
);


// Rotas
app.get('/', (req, res) => {
    res.send('Hello Beautifull, Dev World')
})



app.listen(3001);