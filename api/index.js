const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

const serviceAccount = {
    type: "service_account",
    project_id: "bdprojetos-2dac4",
    private_key_id: "ab045dfc9321111094e40c09fc0fa8329b420c30",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDB9o7ZcZybBc+k\nnvkwC/Bskf5ql3gPfb2g2L9DjI2J2b4uvHyExni3lRJnSHDLf39ZUibpL9I1bhFE\n7SxFglFL5hBDjimiV0zcZ6W1Ab6PDHNWWw8Kr8aD4HuCI9GpuCCWgwtyabGJ1Kcs\npaZiNAJYViC+ndmu2X1tAHfkz1qGGeyk+l0OkQxIxLcgnpMnZU5T6+Nwf5hsyuwj\nIIj/FUEaltD5Xb791kPwYbFkG02MHNR866X4vJgTmRoS+LmKGhy6K4syvA0dO1FK\nzwMv43fJjDhuPTwk3bFMhJs+Zy4mSkPtr9+KJtXYg1iEXlUx/DsgEu5duKS+6vum\nwCcrIzJDAgMBAAECggEABVAR4QF188ZIrG6RG11NJ3qNciSWLJdAar4oT84/3dV0\n5zlqqbjFlRwd5ge7oZjrVCpMl/K84Pf6Vh2u93QJ2QV2Ty6Yk/J5nJUXZ11V95VO\nOKcDqVwsmLxWqOplQEi9IvirVBkMCV8lrLKyDrRaluPV2SxgSldGH1NPdWXhycfl\nl3WlqInLb9jwN1YdO7/WmdprwVVTv1iKGV7tAdAio6gVDMnf5Ou+qI3cED+yenSr\nOu+hvZ6yF9yI6YmQ54q7+j4gJmJEkDPFOb7FjDiIsfVDZz9UKnVbbrSCiYyGpOlo\ngi3Q28ka2mcNZKiLWafuAH3KQvD58qNTvRl3CgbUsQKBgQDlQSFL2NRfE9+6CDbm\nXcqXz65Slz/ZKkDyS0T2UTPU+jsaen0IkrkjB37hCqoVtmNUNT0w4he62Sz03/IA\nDIgx6Jup/UbKB29InU65GTL/Ao7I7J8f/WOBBj1ChsmnhNqRwBxnIuzvxTGlWFDO\nMm6EojcsVIG/o+HEUOisiNZ7EwKBgQDYl2yx63GU22VM6wH713hZ1dMmEYaOUeK+\nmfJsHKAy+8o03eyUiOnvMiR0dtqpD1xr1921IJ8dd1Anlbrkg9M3Py+s/29Hqs5M\nJP6r+j29SdrxkMXEnyq92WsJMHRTpFozpEDD4wDDcta95RWkAVMmFNAObYy71QSS\nBHtgLlGiEQKBgQDEb3EzR0B5k1LhWUaJT5ZXTEmnVRgNYUozElGt6VhLRno8LvZR\n0T63iCWseHHSluw3bELZTvFcVdhSnk0Cw7ozYYd4OaBdXc953ehla/UpUqy79xxF\n0d1f4dO93DaPxqNtvbnYmbGBpWrrrWfXtpjCJyi1YFeouKiriVRE+h8lZwKBgATj\nTfGp9ZM9bEjTGOVdFHs6hxxZ0uaNVIemo8Dq2HauFf8hbwBfIqBiSk5SjFa6YQSS\nB4/Z351jnux1xZT4oKCjjWjjDtjYMvWm9BRfflsyOn2vHbd1PBqyuGapsEZe9CYs\nM8X37oF6qvv4Gofr+7tlRti8giuPAB5neX1PLkpxAoGAb7UxdeWUdWRJs81CG4D8\n7IjJCPSbKfGZlDKLKryYjqdMo5Yvn2VTqa0L2LvJkyKs0cqGx0+kVtEUglPI1flI\nkYxunXBXaiRggjTnmmC7UeGsOtV+mAoy9w1/Me8xGwX4E0FDfXdLUn9A9IXk1MY/\natKbEB7XCoHnH6i+AxQgqAs=\n-----END PRIVATE KEY-----\n",
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

app.delete('/cartoes/:id', async (req, res) => {
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

module.express = app;

// app.listen(3000, () => {
//     console.log(`Rodando`);
//  });
