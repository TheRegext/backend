import express from 'express'
import cors from 'cors'

import ProductosRoute from './routes/productos.api.routes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/', ProductosRoute)

export default app