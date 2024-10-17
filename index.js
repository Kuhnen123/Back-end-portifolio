const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let cartoes = [
    { nome: 'CARTAO 1', valor: 'R$80,90', img: 'https://png.pngtree.com/png-vector/20231108/ourmid/pngtree-purple-butterfly-cute-png-image_10447004.png' },
    { nome: 'CARTAO 2', valor: 'R$84,67', img: 'https://static.vecteezy.com/system/resources/thumbnails/035/999/208/small/ai-generated-purple-violet-beautiful-butterfly-drawing-watercolor-clip-art-illustration-png.png' },
    { nome: 'CARTAO 3', valor: 'R$71,90', img: 'https://static.vecteezy.com/system/resources/thumbnails/049/092/962/small/blue-butterfly-with-detailed-wings-isolated-transparent-png.png' },
    { nome: 'CARTAO 4', valor: 'R$88,67', img: 'https://png.pngtree.com/png-clipart/20230929/original/pngtree-watercolor-purple-butterfly-png-image_13017931.png' },
    { nome: 'CARTAO 5', valor: 'R$94,59', img: 'https://static.vecteezy.com/system/resources/thumbnails/035/999/208/small/ai-generated-purple-violet-beautiful-butterfly-drawing-watercolor-clip-art-illustration-png.png' },
    { nome: 'CARTAO 6', valor: 'R$90,30', img: 'https://png.pngtree.com/png-clipart/20230929/original/pngtree-watercolor-purple-butterfly-png-image_13017931.png' },
    { nome: 'CARTAO 7', valor: 'R$48,90', img: 'https://static.vecteezy.com/system/resources/thumbnails/049/092/962/small/blue-butterfly-with-detailed-wings-isolated-transparent-png.png' },
    { nome: 'CARTAO 8', valor: 'R$65,80', img: 'https://tudoparacolorir.com.br/wp-content/uploads/2023/06/imagem-de-borboletas-1.jpg' },
    { nome: 'CARTAO 9', valor: 'R$64,93', img: 'https://png.pngtree.com/png-clipart/20230929/original/pngtree-watercolor-purple-butterfly-png-image_13017931.png' },
    { nome: 'CARTAO 10', valor: 'R$60,96', img: 'https://png.pngtree.com/png-clipart/20230421/original/pngtree-real-picture-of-blue-dream-butterfly-png-image_9071031.png' },
    { nome: 'CARTAO 11', valor: 'R$87,93', img: 'https://img.freepik.com/vetores-gratis/marrom-realista-isolado_1284-3881.jpg' },
    { nome: 'CARTAO 12', valor: 'R$46,50', img: 'https://png.pngtree.com/png-vector/20231108/ourmid/pngtree-purple-butterfly-cute-png-image_10447004.png' },
    { nome: 'CARTAO 13', valor: 'R$80,67', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3EeWSPaB1OaQ4WzoosscrMFNKnn-j8mnG22Rd5GigG-r-pCroZgd9T6_wDDTOqgIJT0&usqp=CAU' },
    { nome: 'CARTAO 14', valor: 'R$97,90', img: 'https://png.pngtree.com/png-clipart/20230421/original/pngtree-real-picture-of-blue-dream-butterfly-png-image_9071031.png' },
    { nome: 'CARTAO 15', valor: 'R$64,80', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEJ16R57ORgNlMhoGyRmwGDQvy17Kcimi3vp_rVEMyoV-1W0P4UHiEi1fhaxTB1n_jlKw&usqp=CAUg' },
    { nome: 'CARTAO 16', valor: 'R$91,98', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQV67T1Tc5WX3LlYqvJQpgXskXi9mba7tNEA&s' },
    { nome: 'CARTAO 17', valor: 'R$833,90',img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-YbnOlLj-nsV08KppXl3-I4qcBKdrULi6i7pyHd98dWBKcUjpLpjoY3RTqngMac2aoQo&usqp=CAU' },
    { nome: 'CARTAO 18', valor: 'R$99,99', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjOntOTo4rfFUvAriyxxfSukZJ9bNLnkGIg&s' },
    { nome: 'CARTAO 19', valor: 'R$68,60', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvqUqS5v0jTLcc7WbebdoGwKG0WTyE7lDM_g_1ymOVHS-ahwfGRT6KKUMqczt5Zwnt6Pc&usqp=CAU' },
    { nome: 'CARTAO 20', valor: 'R$26,99', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGulSLOk4P4YNSsCcboOk6f0QbeRXjOElERMv-QVk1lCjLq2QyfCeMRGIRQg4abrOItY&usqp=CAU' }
];


app.get('/cartoes', (req, res) => {
    res.status(200).json({cartoes});
    console.log('oi');
});

app.post('/cartoes', (req, res) => {
    const{nome, valor, img} = req.body;

    cartoes.push({nome: nome, valor: valor, img: img});
    console.log(cartoes);
    res.status(201).json({ mensagem: 'Deu boa o post',});
});

app.delete('/cartoes', (req, res) => {
    const { cartao } = req.body;
    cartoes.splice(cartao, 1);
    console.log(cartao + 'deletado');
    res.status(201).json({ mensagem: 'Deu boa o delete' + cartao });
});


app.put('/cartoes', (req, res) => {
    const {nome, valor, id, img} = req.body;

    cartoes[id] = {nome: nome, valor: valor, img: img};
    console.log(cartoes);
    res.status(201).json({ mensagem: 'Deu boa o put' });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
