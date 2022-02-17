const express = require('express');
const cursoControlador = require('../controllers/cursos.controller');

const md_autentificacion = require('../middlewares/autenticacion');

const api = express.Router();
api.post('/agregarCurso', md_autentificacion.Auth, cursoControlador.AgregarCurso);
api.get('/cursos', cursoControlador.ObtenerCursos);
api.put('/editarCurso/:idCursos', md_autentificacion.Auth, cursoControlador.EditarCurso);
api.delete('/eliminarCurso/:idCursos', md_autentificacion.Auth, cursoControlador.EliminarCurso);

module.exports = api;