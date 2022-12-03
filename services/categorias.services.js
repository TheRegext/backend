import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb+srv://aplicacion:QUS0wnEFSWM4yUzR@cluster0.9v0uiu7.mongodb.net/?retryWrites=true&w=majority')
const db = client.db('DB_T')
const collection = db.collection('Categorias')

async function traerCategorias() {
    return client.connect()
        .then(async function () {
            return collection.find().toArray()
        })
}

async function traerCategoriaByID(id) {
    return client.connect()
        .then(async function () {
            return collection.findOne({ _id: new ObjectId(id) })
        })
}

async function guardarCategoria(categoria) {
    return client.connect()
        .then(async function () {
            return collection.insertOne(categoria)
        })
}

async function editarCategoria(id, categoria) {
    return client.connect()
        .then(async function () {
            return collection.updateOne({ _id: new ObjectId(id) }, { $set: categoria })
        })
}

async function eliminarCategoria(id) {
    return client.connect()
        .then(async function () {
            return collection.deleteOne({ _id: new ObjectId(id) })
        })
}

export {
    traerCategorias,
    traerCategoriaByID,
    guardarCategoria,
    editarCategoria,
    eliminarCategoria
}