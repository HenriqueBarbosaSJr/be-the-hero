/* Para criar este arquivo digite no terminal de comandos
o seguinte comando: npx knex migrate:make create_ongs

*/


// O método up é responsável pela criação da tabela

exports.up = function(knex) { 
  return knex.schema.createTable('ongs',function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf',2).notNullable();

  });
};
// O método down é responsável por remover a tabela

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};

/* para executar a criação da tabela utulizamos o comando no terninal
    npx knex migrate:latest

    OBS.: npx é o comando para executar e o npm intalar pacote.
*/