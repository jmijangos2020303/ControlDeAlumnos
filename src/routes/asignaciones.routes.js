const express = require('express');
const asignacionControlador = require('../controllers/asignaciones.controller');

const md_autentificacion = require('../middlewares/autenticacion');

const api = express.Router();
api.get('/asignatura', asignacionControlador.ObtenerAsignatura);
api.post('/RegistrarAsignatura', asignacionControlador.RegistrarAsignatura);


module.exports = api;