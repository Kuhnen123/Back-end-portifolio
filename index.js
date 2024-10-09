const express = require('express');
const cors = require ('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const vetor = [
  {mensagem: 'oi', numero: 0},
  {mensagem: 'eu', numero: 1},
  {mensagem: 'vou', numero: 2},
  {mensagem: 'me', numero: 3},
  {mensagem: 'matar', numero: 4},
]
app.post('/falas', (req, res) => {  
  const mensagem = req.mensagem;
  console.log(mensagem);
  res.status(201).json({mensagem: 'sra que Deu boa?'});
});

app.delete('/falas ', (req, res)=>{
    const numero = req.body.numero;
    vetor.splice(numero,1);
    console.log(vetor);
    res.status(201).json({ mensagem: 'deu boa o DELETE'});
});

app.put('/falas ', (req, res)=>{
    const numero = req.body.numero;
    const mensagem = rq.body.mensagem
    vetor[numero].mensagem - mensagem;
    console.log(vetor);
    res.status(201).json({ mensagem: 'deu boa o PUT'});
});


app.get('/falas',(req, res) => {
    res.status(200).json({vetor});
     console.log(`não aguento mais o bryam`)
    });

app.get('/',(req, res) => {
res.status(200).json({mesagem: 'Olá mundo!!!'});
 console.log(`Oi`)
});
 
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
