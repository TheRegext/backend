import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb+srv://aplicacion:QUS0wnEFSWM4yUzR@cluster0.9v0uiu7.mongodb.net/?retryWrites=true&w=majority')
const db = client.db('DB_T')
const tokens = db.collection('Tokens')

async function create(token) {
    await client.connect()

    await tokens.insertOne(token)
}


async function findByToken(token) {
    await client.connect()

    const tokenFound = await tokens.findOne({ token })

    return tokenFound
}


async function deleteByToken(token) {
    await client.connect()

    await tokens.deleteOne({ token })
}

export {
    create,
    findByToken,
    deleteByToken
}
