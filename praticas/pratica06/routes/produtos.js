//b) Abra o arquivo produtos.js e e importe o pacote do Express.
const express = require('express')


// c) Importe um controlador controllerProdutos do arquivo ../controllers/controller_produtos.js.
const controllerProduto = require("../controllers/controller_produto.js")


//d) Crie uma instância de Router a partir da função express().
const router = express.Router();


//e) Declare um middleware de rota para responder ao método GET na URL /produtos.
//f) Faça o middleware de rota chamar a função listarTodos do controllerProdutos.
router.get('/produtos', controllerProduto.listarTodos)


//g) Declare um middleware de rota para responder ao método GET na URL /produtos/:produtoId.
//h) Faça o middleware de rota chamar a função buscarPeloId do controllerProdutos.
router.get('/produtos/:produtoId', controllerProduto.buscarPeloId)


//i) Declare middleware de rota para responder ao método POST na URL /produtos.
//j) Faça o middleware de rota chamar a função criar do controllerProdutos.
router.post('/produtos', controllerProduto.criar)

//k) Declare middleware de rota para responder ao método PUT na URL /produtos/:produtoId.
//l) Faça o middleware de rota chamar a função atualizar do controllerProdutos.
router.put('/produtos/:produtoId', controllerProduto.atualizar)


//m) Declare middleware de rota para responder ao método DELETE na URL /produtos/:produtoId
//n) Faça o middleware de rota chamar a função remover do controllerProdutos.
router.delete('/produtos/:produtoId', controllerProduto.remover)


module.exports = router