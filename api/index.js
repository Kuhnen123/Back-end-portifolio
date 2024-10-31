const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

const serviceAccount = {
    type: "service_account",
    project_id: "bdprojetos-2dac4",
    private_key_id: "8f496d5498d0003b03f1f9daa3ae0c456748af80",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDUSQxXmQ6FgJf0\nqqVslkX8HUNs4dw1QiuD8ESJMDox+xHQH/WcB7xsHrf7pm7JgUIgB4wKB3kUjCPi\nPRCZUbo7F5JTaBxeiPJUKIRKqNpv01h7FdCmB046wxr0Vz6saejZ8nqixkE+NVMO\nNou12I2E83jR7MOXHLEZXX5z3beR7AP7Pichdhs+qM0o5E6nTBR/gvCl0bmQIzmI\nmI6fSOPBg08c4drA6rsaqCt4GcXrZDyNP58BWHqKN84CyKQyxrbBD7sU84HUpI3u\nNQSMPyr9GodMqTt6az2+phjGrd61aWiia1EZQ3XuYzxYI3gC1bnKCCP67UiRNfZF\nnItZRLZLAgMBAAECggEAAioc99FJL+7yW96vu9uX0xYIYoltTfJJLMlkNHofPN5s\n49e+NV0SfJbSOTH3EUavjR5XCdQOBV5bLXtAUGtRmNnKvAsX8T5crkuQ8zxyFmst\ntQmFZEAaBOX+jNI3Xkrn/QMyqmZypBUcXaETuKIH8TNwRNktSJDuU769cSnp64nt\nll/8B8dpQBzGNtA1Yo5+5HR5VqWFEyOHPvUp8R2C+WwLMWDwoIx7NmhBCHr6rhaa\nbTvHRQeOYxN6ga+0NLPJyprHaHOdqWdY8/9C7pD+f4fRo51O6PpaceiyRT1pCA8n\niC1txCJ/jWP6TV6BiW7zJiy/hCgq4YGebRah4j1xYQKBgQD6djVjH21n/rR1i6/0\n3lD+9xZwNcl/ZFq0gJ205dWYJL/SqJm+2+DXvfWRcaWYTbYpMXs/8DX6is6SSh75\nevhdxyCmWlb15aG72YNXIqs+jca0/Sr7aHMx/mL++ms89dax7rTAYpmQsN0wfq5u\n25mp7ZaSC/TUjwm4kzcQXAwHjwKBgQDY+rvsmRSyS0NPt0pinug6RmEADVgxxmnH\nX5ur7gY9tCt0VbbEw907tFZCLXW5y2xg9gCON+UTrUJ96bqK83Dg4cQaXYIq6eVT\nzHUN0rq+1KxicVjEmgAxFcsFv2w7NuYDtbWaDaWjFTRKHlMsM/bWKXQpg6XaTSgx\n7s5A0UInhQKBgQCIhKow705pIvImKA+uvwcTEodOfmLoZ0DxpjFQCv7TwSQ1pOS4\nnYz+y3Hw5ytFywYBihEOFta1S7exEWm0voxmQUXQpulDevkfNT5b3m/M1uZ6fIxT\nIOm5VFmNdd3CCpYNwnkPbC8cKOtHpaVak6Q8dV5fGNlIivbXfpbC+gksjQKBgADi\nTJ+zI/Vx/w01FvV95j5OiRih9UkGoOmyBwVVS+s2b7LiooL8tUsH+g3892zRWliu\nx+PMcH97BjlTGXJ1eXFBGjZtSRl5qHiF7bgnsqESZr1j7tOmOPf6OcCFPiCjoZ5E\nQEAnbBRVAsiGhRo5//hxZMrCgYt5Iv/JFEgJUjatAoGBANxY2sRZ/LSVFsycpYJM\nFCVKWMELc2SC70bS/DtAFINXhDUUtxrfAuoyd6cZVyr5Wkq8SCo3Eimt3GnT3lKt\nRtYL3V7ZSKmZsJtal04II9XT3oRbotLRl7ocb+ND6xW1Pp6y1okQlnk6ps2MF+GZ\n5v2zqBHACuRtifI2/fWrbZxY\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-qzz52@bdprojetos-2dac4.iam.gserviceaccount.com",
    client_id: "110815710105612455512",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-qzz52%40bdprojetos-2dac4.iam.gserviceaccount.com",
    universe_domain: "googleapis.com"
  }
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

const db = admin.firestore();
const app = express();

app.use(cors());
app.use(express.json());

// let cartoes = [
//     { nome: 'acobreada', valor: 'R$80,90', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52WcSzUgePtN3qQLMAvIwK2BM6tx4O0-DSTL8JvDvIFPcShVYR9bi0XCsnWzlkMdwiSQ&usqp=CAU' },
//     { nome: 'almirante-vermelho', valor: 'R$84,67', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFPAGrsSuCmxXBUZ9ojcxVbS-TxjmFPQDXfQ&s' },
//     { nome: 'azul-celeste', valor: 'R$71,90', img: 'https://static.vecteezy.com/system/resources/thumbnails/049/092/962/small/blue-butterfly-with-detailed-wings-isolated-transparent-png.png' },
//     { nome: 'azulinha', valor: 'R$88,67', img: 'https://png.pngtree.com/png-clipart/20230929/original/pngtree-watercolor-purple-butterfly-png-image_13017931.png' },
//     { nome: 'CARTAO 5', valor: 'R$94,59', img: 'https://static.vecteezy.com/system/resources/thumbnails/035/999/208/small/ai-generated-purple-violet-beautiful-butterfly-drawing-watercolor-clip-art-illustration-png.png' },
//     { nome: 'CARTAO 6', valor: 'R$90,30', img: 'https://png.pngtree.com/png-clipart/20230929/original/pngtree-watercolor-purple-butterfly-png-image_13017931.png' },
//     { nome: 'CARTAO 7', valor: 'R$48,90', img: 'https://static.vecteezy.com/system/resources/thumbnails/049/092/962/small/blue-butterfly-with-detailed-wings-isolated-transparent-png.png' },
//     { nome: 'CARTAO 8', valor: 'R$65,80', img: 'https://tudoparacolorir.com.br/wp-content/uploads/2023/06/imagem-de-borboletas-1.jpg' },
//     { nome: 'CARTAO 9', valor: 'R$64,93', img: 'https://png.pngtree.com/png-clipart/20230929/original/pngtree-watercolor-purple-butterfly-png-image_13017931.png' },
//     { nome: 'CARTAO 10', valor: 'R$60,96', img: 'https://png.pngtree.com/png-clipart/20230421/original/pngtree-real-picture-of-blue-dream-butterfly-png-image_9071031.png' },
//     { nome: 'CARTAO 11', valor: 'R$87,93', img: 'https://img.freepik.com/vetores-gratis/marrom-realista-isolado_1284-3881.jpg' },
//     { nome: 'CARTAO 12', valor: 'R$46,50', img: 'https://png.pngtree.com/png-vector/20231108/ourmid/pngtree-purple-butterfly-cute-png-image_10447004.png' },
//     { nome: 'CARTAO 13', valor: 'R$80,67', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3EeWSPaB1OaQ4WzoosscrMFNKnn-j8mnG22Rd5GigG-r-pCroZgd9T6_wDDTOqgIJT0&usqp=CAU' },
//     { nome: 'CARTAO 14', valor: 'R$97,90', img: 'https://png.pngtree.com/png-clipart/20230421/original/pngtree-real-picture-of-blue-dream-butterfly-png-image_9071031.png' },
//     { nome: 'CARTAO 15', valor: 'R$64,80', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEJ16R57ORgNlMhoGyRmwGDQvy17Kcimi3vp_rVEMyoV-1W0P4UHiEi1fhaxTB1n_jlKw&usqp=CAUg' },
//     { nome: 'CARTAO 16', valor: 'R$91,98', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQV67T1Tc5WX3LlYqvJQpgXskXi9mba7tNEA&s' },
//     { nome: 'CARTAO 17', valor: 'R$833,90',img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-YbnOlLj-nsV08KppXl3-I4qcBKdrULi6i7pyHd98dWBKcUjpLpjoY3RTqngMac2aoQo&usqp=CAU' },
//     { nome: 'CARTAO 18', valor: 'R$99,99', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTjOntOTo4rfFUvAriyxxfSukZJ9bNLnkGIg&s' },
//     { nome: 'CARTAO 19', valor: 'R$68,60', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvqUqS5v0jTLcc7WbebdoGwKG0WTyE7lDM_g_1ymOVHS-ahwfGRT6KKUMqczt5Zwnt6Pc&usqp=CAU' },
//     { nome: 'CARTAO 20', valor: 'R$26,99', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGulSLOk4P4YNSsCcboOk6f0QbeRXjOElERMv-QVk1lCjLq2QyfCeMRGIRQg4abrOItY&usqp=CAU' }
// ];


app.get('/cartoes', async (req, res) => { 
    try {
        const response = await db.collection('cartoes').get();
        const cartoes = response.docs.map(doc => ({
            id: doc.id, ...doc.data()
        }));
        
        console.log(cartoes);
        res.status(200).json({cartoes});
        console.log('cartoes devolvidos com sucesso');
    } catch (e) {
        console.log(e);
        res.status(500).json({ mensagem: 'Erro ao buscar dados'+ e });
        console.log('Erro ao buscar dados'+ e);
    }
});

app.post('/cartoes', (req, res) => {
    const{nome, valor, img} = req.body;
    if (!nome ) {
        res.status(400).json({ mensagem: 'nome da linguagem do cartao invalido' });
    }else if (!valor) {
        res.status(400).json({ mensagem: 'valor do cartão invalido' });

    }else if (!img) {
        res.status(400).json({ mensagem: 'imagem do cartão invalido' });
        console.log('Novo cartão não cadastrado, imagem invalida!');
    }else{
        try{
            const response = db.collection('cartoes').add({
            nome,
            valor,
            img,
            criadoEm: admin.firestore.FieldValue.serverTimestamp()
        
        });
        res.status(201).json({ mensagem: 'Cartão cadastrado com sucesso!', id: novoCartaoRef});
            console.log('Novo cartão cadastrado com ID', novoCartaoRef.id);
        } catch (error) {
            console.error('Erro ao cartão: ', error);
            res.status(500).json({ mensagem: 'Erro ao cadastrar cartão: ' });
            
        }
    }

});

app.delete('/cartoes', async (req, res) => {
    const id = req.body.cartoes; 

    if (!id) {
        res.status(400).json({ mensagem: 'ID do cartão não fornecido' });
        console.log('ID do cartão não fornecido');
    }else{

    try {
        const cartaoRef = db.collection('cartoes').doc(id);
        const doc = await cartaoRef.get();

        if (!doc.exists) {
            res.status(404).json({ mensagem: 'Cartão com ID'+ cartoes + 'não encontrado' });
            console.log('Cartão não encontrado');
        } else {
            await cartaoRef.delete();
            res.status(200).json({ mensagem: 'Cartão com ID ' + id + ' deletado' });
            console.log('Cartão com ID ' + id + ' deletado');
         
        }
    } catch (e) {
        console.error('Erro ao deletar o cartão: ', e);
        res.status(500).json({ mensagem: 'Erro ao deletar cartão: ' + e });
    }
}
});

app.put('/cartoes', async (req, res) => {
    const {nome, valor, id, img} = req.body;
    if (!id) {
        res.status(400).json({ mensagem: 'ID do cartão não fornecido' });
        console.log('cartão não atualizado, ID invalido!');
        
    }else{
        try {
            const cartaoRef = db.collection('cartoes').doc(id);
            const doc = await cartaoRef.get();
            if (!doc.exists) {
                res.status(404).json({ mensagem: 'Cartão com ID ' + id + ' não encontrado' });
                console.log('Cartão não encontrado');
            } else {
                const dadosAtualizados = {
                    
                };
                if (nome) {
                    dadosAtualizados.nome = nome;
                }
                if (valor) {
                    dadosAtualizados.valor = valor;
                }
                if (img) {
                    dadosAtualizados.img = img;
                }
                await cartaoRef.update(dadosAtualizados);
                res.status(200).json({ mensagem: 'Cartão com ID ' + id + ' atualizado' });
                console.log('Cartão com ID ' + id + ' atualizado');
            }
        } catch (error) {
            console.error('Erro ao atualizar o cartão: ', e);
            res.status(500).json({ mensagem: 'Erro ao atualizar cartão: ' + e });
        }
    }


    // cartoes[id] = {nome: nome, valor: valor, img: img};
    // console.log(cartoes);
    // res.status(201).json({ mensagem: 'Deu boa o put' });
});

module.exports = app;

// app.listen(3000, () => {
//     console.log(`Rodando`);
//  });
