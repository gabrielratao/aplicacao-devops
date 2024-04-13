const express = require('express')
const app = express()

let data = {
    'integrantes':[
        {'nome': 'Mara Júlia Ávila', 'idade': 24},
        {'nome': 'Gabriel Ratão', 'idade': 24},
        {'nome': 'Claudio Dalla Valle', 'idade': 48}
    ]
}

// Endpoint para o retornar a pagina index.html
app.get('/', (req,res) => {
    res.sendFile('view/index.html', {root: __dirname});
});

app.get('/integrantes', (req, res) => {
    res.json(data)
})

app.listen(3000, () => {
    console.log('Servidor iniciado porta 3000')
})
