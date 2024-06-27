const express = require('express');

const app = express();
const port = 5002;


//Rota principal que responde com "Olá, Mundo | Express"
app.get('/', (req, res) => {
    res.send('Olá, Mundo | Express');
});

app.get('/rota2', (req, res) => {
    res.send('Rota 2 - Olá, Mundo | Express');
});

app.get('/fabio', (req, res) => {
    res.send('Olá, FÁBIO | Express');
});

app.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`)
});
