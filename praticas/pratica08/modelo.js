const conectarDb = require('./database')

class Contato{
    constructor(nome, email,telefone){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.id - null;
    }
}

async function inserir(contato){
    const { nome, email, telefone} = contato
    const db = await conectarDb() //conecta ao db
    const collection = db.collection('contatos'); //cria coleção de dados
    const { insertedId } = await collection.insertOne({nome, email, telefone}) //guarda dados dentro do db na coleção de dados informada
    return insertedId;
}

async function alterar(contato){
    const { nome, email, telefone} = contato
    const db = await conectarDb()
    const collection = db.collection('contatos')
    await collection.updateOne({ _id: id}, {$set: {nome, email, telefone}}) //seleciona pelo id e atualiza os parâmetros indicado
}

async function consultar (contato){
    const {nome} = contato
    const db = await conectarDb()
    const collection = db.collection('contatos')
    const {_id, email, telefone} = await collection.findOne({nome})
    return { id:_id, email, telefone }
}

async function deletar(contato){
    const {id} = contato
    const db = await conectarDb()
    const collection = db.collection('contatos')
    await collection.deleteOne({_id: id})


}

module.exports={Contato, inserir, alterar, consultar, deletar};