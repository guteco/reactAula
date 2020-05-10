exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        table.increments(); //criando campo com autoincremento
        table.string('title').notNullable(); //criango campo title string not null
        table.string('description').notNullable();
        table.decimal('value').notNullable(); //criando campo value do tipo decimal 
        table.string('ong_id').notNullable(); 
        
        table.foreign('ong_id').references('id').inTable('ongs'); 
        //criando chave estrangeira referenciando a coluna ID da tabela ongs em ong_id                                                                
    });  
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents'); //destruindo a tabela incidents 
};
