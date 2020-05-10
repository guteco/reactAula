//importando o knex
const knex = require('knex');
//importando o arquivo de configuração do knex
const configuration = require('../../knexfile');

//criando a variável onde terá os dados de conexão
const connection = knex(configuration.development);

//exportando a variável de conexão
module.exports = connection;
