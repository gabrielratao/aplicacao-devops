const express = require('express')
const app = express()

let data = {
    'integrantes':[
        {'nome': 'Mara Júlia Ávila'},
        {'nome': 'Gabriel Ratão'}
    ]
}

app.get('/integrantes', (req, res) => {
    res.json(data)
})

app.listen(3000, () => {
    console.log('Servidor iniciado porta 3000')
})
