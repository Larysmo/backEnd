const express = require('express');

const app = express();

const routerProdutos = require('./router')

app.use(routerProdutos); // middleware: neste caso, usaremos o arquivo router.js

app.listen(3000, function(){
    console.log("API está ON!");
})

module.exports = app;