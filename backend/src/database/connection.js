const knex = require('knex');

const configuration = require('../../knexfile');

const connection = knex(configuration.development); // a configuração no arquivo knex é development, visto que lá possui várias configurações

module.exports = connection;