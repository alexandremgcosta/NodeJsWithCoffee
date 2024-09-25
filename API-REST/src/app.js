import express from 'express'

const app = express()

app.use(express.json()) //Indicar o Express para ler body JSON

// mock
const selecoes = [
    {id: 1, selecao: 'Portugal', grupo: 'H'},
    {id: 2, selecao: 'Coreia do Sul', grupo: 'H'},
    {id: 3, selecao: 'Uruguai', grupo: 'H'},
    {id: 4, selecao: 'Gana', grupo: 'H'},
]

function getSelecaoPorID(id){
    return selecoes.filter(selecao => selecao.id == id );
}

function getIndexSelecao(id){
    return selecoes.findIndex(selecao => selecao.id == id );
}


// Criar rota padrão ou raiz
app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes)
})

app.get('/selecoes/:id', (req, res) =>{
    res.status(200).json(getSelecaoPorID(req.params.id))
})

app.post('/selecoes', (req, res) =>{
    selecoes.push(req.body)
    res.status(201).send('Seleção adicionada com sucesso!')
})

app.delete('/selecoes/:id', (req, res) =>{
    let index = getIndexSelecao(req.params.id)
    selecoes.splice(index, 1)
    res.send(`Seleção com id ${req.params.id} eliminada com sucesso!`)
})

app.put('/selecoes/:id', (req, res) =>{
    let index = getIndexSelecao(req.params.id)
    selecoes[index].selecao = req.body.selecao
    selecoes[index].grupo = req.body.grupo
    res.json(getSelecaoPorID(req.params.id))
})


//Expor a const app para conseguir usar no server.js
export default app