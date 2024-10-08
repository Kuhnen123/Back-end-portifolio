const express = require('express');
const cors = require ('cors');

const app = express();
const porta= 3000;

app.use(cors());
app.use(express.json());

app.get('/',(req, res)=>{
    res.status(200).json({message: 'OK'});
    console.log('oie');
});

app.listen(porta, ()=>{
    console.log(`Servidor rodando na porta ${porta}`);
});

