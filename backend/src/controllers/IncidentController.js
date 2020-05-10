const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        //contando quantos registros existem
        const [count] = await connection('incidents').count();
        
        //fazendo a paginação
        const { page = 1 } = request.query;

        //query para retornar os registros de 5 em 5
        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ]);

        //retornando o total de registros para o header
        response.header('X-Total-Count', count['count(*)']);

        return response.json(incidents);
    },
    
    async create(request, response) {
        const { title, description, value } = request.body;
        //pegar id da ong logada pelo header
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        //fazendo busca da registro do caso e recuperando o ong_id de quem criou o caso
        const incidents = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();
        
        //verificando se quem fez o caso foi a mesma ong q está pedindo para deletar
        if (incidents.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operação não permitida.' });
        }

        //se tudo ok, deleta o registro
        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    },
};