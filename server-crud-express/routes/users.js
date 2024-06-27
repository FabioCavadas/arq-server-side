var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Lista todos os Usuários');
});

/* GET users por id. */
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  res.send(`Lista Usuário com o id = ${id}`);
});

/* GET users por Nome. */
router.get('/:nome', function(req, res, next) {
  const nome = req.params.nome;
  res.send(`Lista Usuário com o nome = ${nome}`);
});

/* POST users. */
router.post('/', (req, res) => {
  res.send('Cria um Usuário')
});

/* DELETE users. */
router.delete('/', (req, res) => {
  res.send('Deleta um usuário')
});

/* PUT users. */
router.put('/', (req, res) => {
  res.send('Atualiza um usuário')
});


module.exports = router;
