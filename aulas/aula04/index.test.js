const supertest = require('supertest');

const app = require('./index'); // chama a função exportada no aruivo

const request = supertest(app) // manda requisição de teste para a aplicação

test("deve retornar 200 no GET", async function(){
    const response = await request.get('/')
    expect(response.status).toBe(200)
})

test('deve retornar 204 no put ', async function(){
    const response = await request.put('/')
    expect(response.status).toBe(204)
})