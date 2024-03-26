const produtos = []

function listarTodos(req,res){
    res.json(produtos)
}

function exibir (req,res){
    const {produtoEncontrado} = req;
    res.json(produtoEncontrado)
}

function buscarPeloId(req, res, next){
    const {produtoId} = req.params; // {chave: valor, chave: valor}. se só uma propriedade informar {produtoId: valor} 
    const produtoEncontrado = produtos.find(item => item.id == produtoId); //  find percorre o array e busca o item equivalente ao produtoId)
    if (produtoEncontrado){ // se localizado, retorna o produto encontrado
        req.produtoEncontrado = produtoEncontrado
        next(); // chama o proximo metodo informado na rota. neste caso em produtos.js
    }else{ // se não, retorna status 404 e mensagem de erro
        res.status(404).json({msg: "Produto não encontrado"})
    }
}

function criar (req, res){
    const {nome, preco} = req.body; // body é um objeto {chave1: valor1, chave2: valor2...}
    const produtoNovo={id: produtos.length+1, nome, preco}
    produtos.push(produtoNovo);// inclui novo produto no array produtos[]
    res.status(201).json(produtoNovo)
}

function validarDados(req,res,next){
    const {nome, preco} = req.body;
    if (nome && preco){
        next()
    }else{
        res.status(422).json({msg: "Nome e preco obrigatorios"})
    }
}

function atualizar (req, res){
    // cópia do codigo de buscarPeloID
   // const {produtoId} = req.params; // {chave: valor, chave: valor}. se só uma propriedade informar {produtoId: valor} 
    const {nome, preco} = req.body; // body é um objeto {chave1: valor1, chave2: valor2...}
    //const produtoEncontrado = produtos.find(item => item.id == produtoId); //  find percorre o array e busca o item equivalente ao produtoId)
    const produtoEncontrado = req; // substitui o produtoId e produto encontrado por conta da função exibir()
    //if (produtoEncontrado){ // se localizado, retorna o produto encontrado
        produtoEncontrado.nome=nome; // para atualizar, ao invés de retornar o array com os dados do produto, serão dados as chaves que receberão
        produtoEncontrado.preco=preco; // os novos valores de
        res.json(produtoEncontrado);
        //}else{ // se não, retorna status 404 e mensagem de erro
    //    res.status(404).json({msg: "Produto não encontrado"})
    //}
    // funcão exibir() elimina o if..else pq não pe mais necessário conferir se ele exista. A função já faz isso
}

function remover (req, res){
    const {produtoId} = req.params // buscar propriedade no params, e atribui este valor à chave. neste caso ProdutoId
    const posicao = produtos.findIndex(item => item.id = produtoId)
    if (posicao>=0){
        produtos.splice(posicao,1) // remove valor do array produtos a partir do index retornado na const posicao
        res.status(204).end()
    }
}


module.exports = {listarTodos, buscarPeloId, validarDados, criar, atualizar, remover, exibir}