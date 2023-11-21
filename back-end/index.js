//importamos o express
//API (Application Program Interface)
const express = require('express');
const crypto = require('crypto');

//inicializa um servidor web com express
const app = express();

//criar uma lista de tarefas pre cadastrada
const tarefas = [
    {
        id: crypto.randomUUID(),
        text: 'Ir ao mercado',
        prazo: '2 Dias'
    },
    {
        id: crypto.randomUUID(),
        text: 'estudar sobre git',
        prazo: '3 dias'
    },
    {
        id: crypto.randomUUID(),
        text: 'estudar sobre git',
        prazo: '3 dias'
    }
]



//fala pro express ultilizar o middleware para trabalharmos com json
app.use(express.json());

//rest - get/post/put/delete
//crud - Create/ read / update / delete
app.get('/', (req, res)=> {
    res.send('Ola galera!')
});

//rota que lista as tarefas cadastradas
app.get('/taredas', (req, res)=>{
    res.send(tarefas);
});

// Rota que busca uma tarefa especifica
app.get('/tarefas/:id', (req, res)=> {
    //acessar o parametro da URl
    const idParam = req.params.id;
    const tarefa = tarefas.find((tarefa) => tarefa.id == dparam)
});

//defino uma porta de rede para rodar o meu servidor web
const port = 3000;
app.listen(port, () => {
    console.log('O app esta na porta 3000')
});