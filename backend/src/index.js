const express = require('express'); //Importando o express para a constante express
const routes = require('./routes'); //Importando as rotas do arquivo routes
const cors = require('cors'); //Importando o módulo de segurança cors
const app = express(); //Criando varíavel para receber a aplicação

app.use(cors()); //Usando o módulo de segurança cors
app.use(express.json()); //Especificando que nossa app vai receber requisições Json
app.use(routes); //Dizendo para que o app use o arquivo de rotas

app.listen(3333); //Setendando a porta "3333" para a aplicação
