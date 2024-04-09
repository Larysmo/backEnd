// 2 k) Abra o arquivo apidocs.js e importe o pacote do Express, o pacote do Swagger UI, o pacote do FileSystem e o pacote do YAML.

const express = require('express')
const swaggerUI = require('swagger-ui-express')
const YAML = require('yaml')

const fs = require('fs')

// 2 l) Crie uma instância de Router a partir da função express().
const router = express.Router()

// 2 m) Crie uma instância de File a partir da função fs.readFileSync() que recebe como parâmetros o arquivo swagger.yaml e a codificação utf8.
const file = fs.readFileSync('swagger.yaml', 'utf8')

// 2 n) Crie uma instância de SwaggerDocument a partir da função YAML.parse() que recebe como parâmetro a instância de File.
const SwaggerDocument = YAML.parse(file)

// 2 o) Declare um middleware de rota para a instância de Router usar a função swaggerUI.server na URL /.
router.use = ('/', swaggerUI.serve)

// 2 p) Declare um middleware de rota para a instância de Router responder ao método GET na URL /, devendo chamar a função swaggerUI.setup() que recebe como parâmetro a instância do SwaggerDocument.
router.get('/', swaggerUI.setup(SwaggerDocument))

// 2 q) Exporte a instância de Router para outros módulos do projeto. 
module.exports = router