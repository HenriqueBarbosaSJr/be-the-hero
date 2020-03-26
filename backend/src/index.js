const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json()); // para que a aplicação entenda que vamos trabalar com json nas requisições
app.use(routes);
app.listen(3333);