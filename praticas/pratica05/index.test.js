const supertest = require('supertest');

const app = require('./index');

const request = supertest(app);

describe('Teste da API', function() {
    test('F - Retorna JSON e status 200 no GET /produtos', async () => {
      const response = await request.get("/produtos");
      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toMatch(/json/);
    })

    test('G - Retorna JSON e status 200 no GET /produtos/id', async () => {
        const response = await request.get("/produtos/1");
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
      })

    test('H - Retorna JSON e status 404 no GET /produtos', async () => {
        const response = await request.get("/produtos/100");
        expect(response.status).toBe(404);
        expect(response.headers['content-type']).toMatch(/json/);
    })

    test('I - Retorna JSON e status 201 no POST /produtos', async () => {
        const response = await request.post("/produtos")
          .send({nome: "uva", preco: 20.00});
        expect(response.status).toBe(201);
        expect(response.headers['content-type']).toMatch(/json/);
      })
    
    test('J - Retorna status 422 e JSON no POST /produtos', async () => {
       const response = await request.post("/produtos")
        expect(response.status).toBe(422);
        expect(response.headers['content-type']).toMatch(/json/);
    }) 

    test('K - Retorna status 200 e JSON no PUT /produtos/id', async () => {
        const response = await request.put("/produtos/1")
          .send({nome: "Uva verde", preco: 18.00});
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
    })

    test('L - Retorna status 404 e JSON no PUT /produtos/100', async () => {
        const response = await request.put("/produtos/100")
        expect(response.status).toBe(404);
        expect(response.headers['content-type']).toMatch(/json/);
    })

    test('M - Retorna status 204 no DELETE /produtos/id', async () => {
        const response = await request.delete("/produtos/1")
        expect(response.status).toBe(204);
        expect(response.headers['content-type']).toMatch(/json/);
    })

    test('N - Retorna status 404 no DELETE /produtos/id', async () => {
        const response = await request.delete("/produtos/100")
        expect(response.status).toBe(404);
        expect(response.headers['content-type']).toMatch(/json/);
    })


});