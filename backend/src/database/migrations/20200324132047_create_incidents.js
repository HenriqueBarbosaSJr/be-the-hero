/* Para criar este arquivo digite no terminal de comandos
o seguinte comando: npx knex migrate:make create_incidents

*/
exports.up = function(knex) {
    return knex.schema.createTable('incidents',function(table){
        table.increments();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        table.string('ong_id').notNullable();
    
        table.foreign('ong_id').references('id').inTable('ongs');
      });
    };

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};


/* para executar a criação da tabela utulizamos o comando no terninal
    npx knex migrate:latest

    OBS.: npx é o comando para executar e o npm intalar pacote.
*/