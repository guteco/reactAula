//biblioteca de criptografia
const crypto = require('crypto'); 
//importando o arquivo de configuração do banco de dados
const connection = require('../database/connection');

module.exports = {
    //função de listar todas Ongs
    async index(request, respose)  {
        //pegando todos registros da tabela ongs
        const ongs = await connection('ongs').select('*');
    
        //retornando valores para o cliente
        return respose.json(ongs);
    },
    
    //função de salvar no dB
    async create(request, response) {
        //recebendo dados do formulário e colocando em var
        const { name, email, whatsapp, city, uf } = request.body;
        
        //criando uma chave de 4bytes e transformando em string do tipo Hexadecimal
        const id = crypto.randomBytes(4).toString('HEX'); 
        
        //inserindo dados na tabela usando o await para esperar o processo acabar para prosseguir
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        //retornando o id da ong
        return response.json({ id });
    }
};