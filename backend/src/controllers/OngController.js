/* Exporta o objeto com os métodos */
const crypto = require('crypto'); //utilizado para gerar uma id única no BD
const connection = require('../database/connection');
module.exports = {

    async index(request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    
    },


    async create (request, response){
        const {name, email, whatsapp, city, uf} = request.body; // desestruturação do json

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        /*
        const data = request.body;
        console.log(data);
        */
        return response.json({id });
        }

};