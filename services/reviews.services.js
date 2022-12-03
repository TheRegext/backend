import { MongoClient, ObjectId } from 'mongodb'

const client = new MongoClient('mongodb+srv://aplicacion:QUS0wnEFSWM4yUzR@cluster0.9v0uiu7.mongodb.net/?retryWrites=true&w=majority')
const db = client.db('DB_T')
const reviews = db.collection('reviews')

async function create(id, review) {
    const newReview = {
        ...review,
        product_id: new ObjectId(id)
    }

    return client.connect()
        .then(async function () {
            return reviews.insertOne(newReview)
        })
        .then(function (result) {
            return newReview
        })
}

async function findAll(id) {
    const filter = {
        product_id: new ObjectId(id)
    }
    return client.connect()
        .then(async function () {
            return reviews.find(filter).toArray()
        })
}

export {
    create,
    findAll
}


