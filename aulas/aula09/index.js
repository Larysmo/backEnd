// npm install mongoose para instalar o pacote

const Produto = require("./modelo"); // precisa importar o modelo pra aplicar a coleção!!!!!!

//carrega as consts do dontenv
require('dotenv').config()

//traz variavel do dontenv para uso no código
const url = process.env.MONGODB_URL

const mongoose = require('mongoose')

async function main(){
    try{
    await mongoose.connect(url)
    console.log("Conectado")
    }catch(err){
        console.log('Pifou!', err.message)
    }

  // inserir 1 produto
     const produto = new Produto({
       nome: "pequi    ",
       preco: -36,
       quantidade: 4
     });
     try{
     await produto.save();
     console.log(produto);
    }catch(err){
        for (let key in err.errors){
        console.log(err.errors[key].message)
    }}

  //    const produto = await Produto.create({
  //      nome: "pequi",
  //      preco: 49,
  //      quantidade: '13'
  //    });
  //    console.log(produto);
  // inserir N produtos
 // const produtos = await Produto.insertMany([ // o nome da constante será o nome da pasta da coleção, neste caso, produtos
 //    { nome: "maca", preco: 20.7, quantidade: 8 },
  //   { nome: "pera", preco: 12.5, quantidade: 18 },
  //   { nome: "laranja", preco: 25.6, quantidade: 28 },
  // ]);
  // console.log(produtos);
//consultar N produtos
//const produtos = await Produto.find({nome:'banana'});
//console.log(produtos)
//atualizar 1 produto
//const produto = await Produto.findOneAndUpdate(
//    {nome: "maca"},
//    {nome: "maca gala", preco: 15.0, quantidade: 10}
//)
//console.log(produto)
//const result = await Produto.updateOne(
//    {nome: "laranja"},
//    {nome: "uva globo", preco: 19.0, quantidade: 11}
//)

///const produto = await Produto.findOneAndDelete(
//    {nome: "uva globo"}
//)

console.log(produto)

await mongoose.disconnect();

}

main();


