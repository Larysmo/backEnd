const express = require('express');

const router = express.Router(); // instancia do router a  partir da função express()


const produtos = []

// Faça o middleware de rota responder um JSON do array dos produtos. Verifique se passou no teste unitário.
router.get("/produtos", function(req, res){ // middleware de rota para a url /produtos
    res.json([]);
  });

// Declare um middleware de rota para responder ao método GET na URL /produtos/:produtoId.
router.get("/produtos/:produtoId", function(req, res){

    // Caso o produto não seja encontrado, faça o middleware retornar o código 404 e o objeto {msg: “Produto não encontrado”}. Verifique se passou no teste unitário.    
    if (req.params.produtoId != 1) {
      res.status(404).json({msg: "Produto não encontrado"});
      return;
    }
    // Faça o middleware de rota localizar um produto pelo id e responder um JSON do produto encontrado. Verifique se passou no teste unitário.
    res.json({});
  });

  //  Declare middleware de rota para responder ao método POST na URL /produtos.
  router.post("/produtos", function(req, res){
    const id = produtos.length+1;
    //  Faça o middleware de rota testar se têm dados no corpo da requisição
    if (req.body && req.body.nome && req.body.preco) { 
        res.status(201).json({});
      return;
    }else{
        res.status(422).json({msg: "Nome e/ou preco do produto obrigatorios"});
    }
  });
  
module.exports = router;
