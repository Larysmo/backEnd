const { MongoClient } = require('mongodb')

let db = null;

const url = 'mongodb+srv://laryssmoraes:Senha123@cluster0.cso6fcp.mongodb.net/'

async function conectarDb() {
    if(db){
        return db
    }

    const client = new MongoClient(url)
    await client.connect()
    db = client.db('agenda')
    return db
}

module.exports = conectarDb