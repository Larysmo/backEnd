// c) Abra o arquivo controller_produto.js e crie um array para armazenar produtos.
const produtos = []

// d) Declare uma função listarTodos contendo os parâmetros req e res..
function listarTodos(req,res){
    //e) Faça a função listarTodos responder um JSON do array dos produtos.
    res.json(produtos)
}

//f) Declare uma função buscarPeloId contendo os parâmetros req e res.
function buscarPeloId(req, res){
//g) Faça a função buscarPeloId localizar um produto pelo id...
    const produtoEncontrado = produtos.find(item => item.id == produtoId); //  find percorre o array e busca o item equivalente ao produtoId)
    // ... e responder um JSON do produto encontrado.
    res.json(produtoEncontrado)
    if (produtoEncontrado){ // se localizado, retorna o produto encontrado
        req.produtoEncontrado = produtoEncontrado
    // Caso o produto não seja encontrado, faça a função buscarPeloId retornar o código 404 e o objeto {msg: “Produto não encontrado”}.    
    }else{ // se não, retorna status 404 e mensagem de erro
        res.status(404).json({msg: "Produto não encontrado"})
    }
}

    // i) Declare uma função criar contendo os parâmetros req e res.
    function criar(req, res){
        // j) Faça a função criar testar se têm dados no corpo da requisição.
        const {nome, preco} = req.body; // body é um objeto {chave1: valor1, chave2: valor2...}
        // ... Se tiver, adicione os dados no array dos produtos. (Dica: crie uma propriedade id cujo valor é o tamanho do array + 1).
        const produtoNovo={id: produtos.length+1, nome, preco}
        produtos.push(produtoNovo);// inclui novo produto no array produtos[]

        // k) Faça a função criar responder o código de status 201 e um JSON com o produto adicionado.
        res.status(201).json(produtoNovo)
    }

    function atualizar (req, res){
        // cópia do codigo de buscarPeloID
       // const {produtoId} = req.params; // {chave: valor, chave: valor}. se só uma propriedade informar {produtoId: valor} 
        const {nome, preco} = req.body; // body é um objeto {chave1: valor1, chave2: valor2...}
        const produtoEncontrado = produtos.find(item => item.id == produtoId); //  find percorre o array e busca o item equivalente ao produtoId)
        //const produtoEncontrado = req; // substitui o produtoId e produto encontrado por conta da função exibir()
        if (produtoEncontrado){ // se localizado, retorna o produto encontrado
            produtoEncontrado.nome=nome; // para atualizar, ao invés de retornar o array com os dados do produto, serão dados as chaves que receberão
            produtoEncontrado.preco=preco; // os novos valores de
            res.json(produtoEncontrado);
        }else{ // se não, retorna status 404 e mensagem de erro
            res.status(404).json({msg: "Produto não encontrado"})
        }
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

module.exports= {listarTodos, buscarPeloId, criar, atualizar, remover}