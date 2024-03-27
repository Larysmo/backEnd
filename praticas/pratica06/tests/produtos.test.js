// 3-c) Abra o arquivo produtos.test.js e importe o pacote do supertest.
const supertest = require('supertest');

// 3-d) Importe a instância da aplicação Express a partir do arquivo app.js.
const app = require('../app')

// 3-e) Crie uma instância de requisição chamando a função supertest() passando como parâmetros a instância da aplicação Express.
const request = supertest(app);


describe("Teste API", function(){
// f) Crie um teste para verificar se uma chamada POST /produtos com um JSON { “nome”: “uva”, “preco”: 20.00 } retorna o status 201 e um conteúdo do tipo JSON 
    test("POST /produtos retorna 201 e Json", async function(){
        const novo = {nome: "uva", preco: 20.00}
        const response = await request.post("/produtos").send(novo)
        expect(response.status).toBe(201)
        expect(response.type).toBe("application/json")
        expect(response.body).toHaveProperty("id")    
    })
// g) Crie um teste para verificar se uma chamada GET /produtos retorna o status 200 com um conteúdo do tipo JSON contendo um array de objetos
    test("GET /produtos retorna 200 e Json", async function(){
        const response = await request.get("/produtos")
        expect(response.status).toBe(200)
        expect(response.type).toBe("application/json")
        expect(Array.isArray(response.body)).toBe(true)
    })

// h) Crie um teste para verificar se uma chamada GET /produtos/1 retorna o status 200 e um conteúdo do tipo JSON contendo as propriedades id, nome e preco com os valores inseridos.
    test("GET /produtos/1 retorna 201 e Json", async function(){
        const response = await request.get("/produtos/1")
        expect(response.status).toBe(200) // retorna 201
        expect(response.type).toBe("application/json") // retorna json
        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("nome")
        expect(response.body).toHaveProperty("preco")
    })

// i) Crie um teste para verificar se uma chamada GET /produtos/100 retorna o status 404 e um conteúdo do tipo JSON contendo a propriedade msg igual “Produto não encontrado” 
    test("GET /produtos/100 retorna 404 e Json", async function(){
        const response = await request.get("/produtos/100")
        expect(response.status).toBe(404) // retorna 404
        expect(response.type).toBe("application/json") // retorna json
        expect(response.body).toHaveProperty("msg", "Produto não encontrado") // retorna msg de erro
    })
// j) Crie um teste para verificar se uma chamada POST /produtos sem um JSON e retorna o status 422 e um conteúdo do tipo JSON contendo a propriedade msg igual “Nome e preço do produtos são obrigatórios”.
    test("POST /produtos retorna 422 e Json", async function(){
        const response = await request.post("/produtos")
        expect(response.status).toBe(422) // retorna 422
        expect(response.body).toHaveProperty("msg", "Nome e preco são obrigatórios") // retorna msg de erro
    })
// k) Crie um teste para verificar se uma chamada PUT /produtos/1 com um JSON {“nome”: “uva verde”, “preco”: 18.00} retorna o status 200 e um conteúdo do tipo JSON contendo as propriedades id, nome e preco com os valores atualizados.
    test("PUT /produtos/1 retorna 404 e Json", async function(){
        const atual = {nome: "uva verde", preco: 18.0}; // atualiza valores
        const response = await request.put("/produtos/1").send(atual); // retorna valor atualizado
        expect(response.status).toBe(200);
        expect(response.type).toBe("application/json");
    })

// l) Crie um teste para verificar se uma chamada PUT /produtos/100 retorna o status 404 e um conteúdo do tipo JSON contendo a propriedade msg igual “Produto não encontrado”.
    test("PUT /produtos/100 retorna 422 e Json", async function(){
        const atual = {nome: "uva verde", preco: 18.0}; // atualiza valores
        const response = await request.put("/produtos/100") 
        expect(response.status).toBe(422);
        expect(response.type).toBe("application/json")
        expect(response.body).toHaveProperty("msg","Produto não encontrado");
        })
  
// m) Crie um teste para verificar se uma chamada DELETE /produtos/1 retorna o status 204 e sem conteúdo.
    test("Delete /produtos/1 retorna 204 sem json", async function(){
        const response = await request.delete("/produtos/1") 
        expect(response.status).toBe(204);
        expect(response.type).toBe("")
        expect(response.body).toEqual({});
        })

// n) Crie um teste para verificar se uma chamada DELETE /produtos/100 retorna o status 404 e um conteúdo do tipo JSON contendo a propriedade msg igual “Produto não encontrado”.
    test("Delete /produtos/100 retorna 404 sem json", async function(){
        const response = await request.delete("/produtos/1") 
        expect(response.status).toBe(404);
        expect(response.type).toBe("application/json")
        expect(response.body).toHaveProperty("msg", "Produto não encontrado");
        })

})
