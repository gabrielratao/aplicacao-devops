// Configuração do Express
const express = require('express');
const app = express();

// Endpoint para o retornar a pagina index.html
app.get('/', (req,res) => {
    res.sendFile('view/index.html', {root: __dirname});
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor foi iniciado na porta 3000');
});