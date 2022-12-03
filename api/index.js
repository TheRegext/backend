import express from 'express'
import cors from 'cors'

import ProductosRoute from './routes/productos.api.routes.js'
import CategoriasRoute from './routes/categorias.api.routes.js'
import ProdfavsRoute from './routes/prodfavs.api.routes.js'
import UsersRoute from './routes/users.api.routes.js'


const app = express()

app.use(cors())
app.use(express.json())

app.use('/', ProductosRoute)
app.use('/', CategoriasRoute)
app.use('/', ProdfavsRoute)
app.use('/', UsersRoute)


export default app