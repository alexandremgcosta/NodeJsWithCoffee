import express from 'express'
import routes from './routes.js'

const app = express()

//Indicar o Express para ler body JSON
app.use(express.json()) 

//Fazer uso do Routes
app.use(routes)

//Expor a const app para conseguir usar no server.js
export default app