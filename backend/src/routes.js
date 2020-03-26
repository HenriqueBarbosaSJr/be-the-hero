const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController'); 
const ProfileController = require('./controllers/ProfileController'); 
const SessionController = require('./controllers/SessionController'); 


const routes = express.Router();

/*
* rota / recurso
chamamos de recurso o caminho após o endereço
(http://localhost:3000/) 

    por exemplo http://localhost:3000/curso
        curso é um recurso

** Métodos HTTP:

GET: Buscar uma informação do back-end
POST: criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end


*** Tipos de parâmetros:

Query Params: Parâmetros nomeados enviados na rota após o 
ponto "?" (filtros, paginação)

    app.get('/users', (request, response)=>{
        const params = request.query;

        console.log(params);

        return response.json({
            evento:'Semana OmniStack 11.0',
            aluno:'Henrique Barbosa'
        });
    });

    exemplo utilizado no : Insomnia/Browser 
        http://localhost:3333/users?name=Henrique
        ou
        http://localhost:3333/users?page=2&name=Henrique&idade=25

        OBS.: para acessar os dados solicitados pelo método GET


Route Params: Parâmetros utilizados para identificar recursos

    app.get('/users/:id', (request, response)=>{
        const params = request.params;

        console.log(params);

        return response.json({
            evento:'Semana OmniStack 11.0',
            aluno:'Henrique Barbosa'
        });
    });

    exemplo utilizado no : Insomnia/Browser
         http://localhost:3333/users/1

    OBS.: para acessar os dados solicitados pelo método GET,
          é preciso utilizar o /:id para identificar um id único
          pelo método GET


Request Body: Corpo da requisição, utilizado para criar ou 
alterar recursos

        No Insomnia utilizar o metodo POST enviando um JSON
            {
	            "name": "Henrique Barbosa",
                "idade":28
            }
        
        app.post('/users', (request, response)=>{
            const body = request.body;

            console.log(body);

            return response.json({
                evento:'Semana OmniStack 11.0',
                aluno:'Henrique Barbosa'
            });
        });

        OBS.: para acessar os dados solicitados pelo método POST,

*/



/*
SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
NoSQL: MongoDB, CouchDB, ect

vamos utilizar o SQLite:
    utilizamos o knexjs  (http://knexjs.org) e instalamos na aplicação:
        npm install knex
        npm install sqlite3

    após utilizamos o comando: npx knex init
        ele cria o arquivo na raiz do nosso projeto chamado knexfile.js
        e é nele que ficam as configurações de acesso ao banco de dados
        para vários ambientes (desenvolvimento, produção, produção para o 
        time de desenvolvimento)

    

*/



/* Utilizado para consultar - não será utilizado na aplicação front-end */
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.post('/session', SessionController.create);

routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);

routes.delete('/incidents/:id',IncidentController.delete);

module.exports = routes;