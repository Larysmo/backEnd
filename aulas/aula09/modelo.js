const mongoose = require('mongoose')

// cria schema
const produtoSchema = new mongoose.Schema({
    nome: {type: String, 
        trim: true, // trim: remove os espaços em branco no final do parâmetro. Se só houver espaços, não grava.
        uppercase: true, //salva os dados em caixa alta mesmo que não tenham vindo assim do front
        required: [true, "Campo Obirgatório!"], // campo obrigatório
        minLength: [3, "Este campo deve conter no mínimo 3 caracteres!"] // mínimo de 3 caracteres
        },
    preco: {
        type: Number,
        min: 0, // define valor mínimo aceito para gravação
    },
    quantidade: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Produto', produtoSchema) // 'Produto é o objeto da coleção onde serão gravados os dados do ProdutoSchema'