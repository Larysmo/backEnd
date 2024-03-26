const supertest = require('supertest') // importa o supertest

const app = require('../app') // importa o arquivo que será testado

const request = supertest(app) // atribui o request via variável para o supertest chamar o arquivo a ser testado

describe('Teste de API Produtos',   function(){
    test ("POST / deve retornar 201 um array JSON", async function(){ // descrição do teste que será feito + função para testar. Pode usar test ou it
        const novo = {nome: "uva", preco: 18.0} //valores aserem recebidos pela API
        const response = await request.post("/produtos").send(novo); // resposta dada pela API de acordo com os valores recebidos na variavel $novo
        expect(response.status).toBe(201) // informa a resposta esperadoa para o teste
        expect(response.type).toBe("application/json") // informa o tipo de arquivo que será retornado
        expect(response.body).toHaveProperty("id") //informa propriedade obrigatoria que deve retornar
        expect(response.body).toHaveProperty("nome", novo.nome)// espera que o valor digitado seja devolvido
        expect(response.body).toHaveProperty("preco", novo.preco)// espera que o valor digitado seja devolvido
    });

    test("POST / deve retornar 422 um objeto JSON", async function(){
        const response = await request.post("/produtos") // resposta dada pela API sem retorno de dados
        expect(response.status).toBe(422) // informa a resposta esperadoa para o teste
        expect(response.type).toBe("application/json") // informa o tipo de arquivo que será retornado
        expect(response.body).toHaveProperty("msg", "Nome e preco são iguais") //informa propriedade obrigatoria que deve retornar
        
    });

    test("GET / deve retornar 200 um array JSON", async function(){
        const response = await request.get("/produtos") // resposta dada pela API sem retorno de dados
        expect(response.status).toBe(200) // informa a resposta esperadoa para o teste
        expect(response.type).toBe("application/json") // informa o tipo de arquivo que será retornado
        expect(Array.isArray(response.body)).toBe(true) //informa que o body deve retornar um array
        
    });

    test("GET /id deve retornar 200 um objeto JSON", async function(){
        const response = await request.get("/produtos/1") // resposta dada pela API sem retorno de dados
        expect(response.status).toBe(200) // informa a resposta esperadoa para o teste
        expect(response.type).toBe("application/json") // informa o tipo de arquivo que será retornado
        expect(response.body).toHaveProperty("id") //informa propriedade obrigatoria que deve retornar
        expect(response.body).toHaveProperty("nome")// espera que o valor digitado seja devolvido
        expect(response.body).toHaveProperty("preco")// espera que o valor digitado seja devolvido
    });

    test("GET /id deve retornar 404 um objeto JSON", async function(){
        const response = await request.get("/produtos/100") // resposta dada pela API sem retorno de dados
        expect(response.status).toBe(404) // informa a resposta esperadoa para o teste
        expect(response.type).toBe("application/json") // informa o tipo de arquivo que será retornado
        expect(response.body).toHaveProperty("msg", "Produto não encontrado") //informa propriedade obrigatoria que deve retornar
        
    });


    test("PUT /id deve retornar 200 um objeto JSON", async function(){
        const atual = {nome: "uva globo", preco: 20.0};
        const response = await request.put("/produtos/1").send(atual);
        expect(response.status).toBe(200);
        expect(response.type).toBe("application/json");

    });

    test("PUT /id deve retornar 422 um objeto JSON", async function(){
        const response = await request.put("/produtos/1")
        expect(response.status).toBe(422);
        expect(response.type).toBe("application/json");
        expect(response.body).toHaveProperty("msg", "Produto não encontrado")
    });
    
    test("PUT /id deve retornar 404 um objeto JSON", async function(){

    });
    
    test("DELETE /id deve retornar 204 um objeto sem corpo", async function(){
        const response = await request.delete("/produtos/1")
        expect(response.status).toBe(204);
        expect(response.type).toBe("");
        expect(response.body).toEqual({})
    });

    test("DELETE /id deve retornar 404 um objeto sem corpo", async function(){
        const response = await request.delete("/produtos/100")
        expect(response.status).toBe(404);
        expect(response.type).toBe("application/json");
        expect(response.body).toHaveProperty("msg", "Produto não encontrado")
    });

    
})