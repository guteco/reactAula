const express = require('express');

//importando controllers
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const Profilecontroller = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//Criando variável para receber rotas
const routes = express.Router();

//Fazer Login no sistema
routes.post('/sessions', SessionController.create);

//Listando todos registros rota ongs
routes.get('/ongs', OngController.index);
//Salvando dados dB rota ongs
routes.post('/ongs', OngController.create);

//Listando todos casos de uma ong
routes.get('/profile', Profilecontroller.index);

//Listando todos casos
routes.get('/incidents', IncidentsController.index);
//Salvando dados dB rota ongs
routes.post('/incidents', IncidentsController.create);
//Exclusão de casos
routes.delete('/incidents/:id', IncidentsController.delete);

//Exportando váriável routes
module.exports = routes; 