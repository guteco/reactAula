exports.up = function(knex) {
    return knex.schema.createTable('ongs', function(table){
        table.string('id').primary(); //criando campo ID string como chave primária
        table.string('name').notNullable(); //criango campo name string not null
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); //criando campo uf sting com 2 posições
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs'); //destruindo a tabela ongs 
};
