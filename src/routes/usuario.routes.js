const express = require('express');
const controladorUsuario = require('../controllers/usuario.controller');

const md_autenticacion = require('../middlewares/autenticacion');


const api = express.Router();

api.post('/login', controladorUsuario.Login);

//api.post('/maestroExistente', md_autenticacion.Auth, controladorUsuario.maestroExistente);
api.post('/registrarAlumno', controladorUsuario.RegistrarAlumno);
api.post('/registrarPorDefecto', controladorUsuario.usuarioPorDefecto);
api.post('/registrarMaestro', controladorUsuario.RegistrarMaestro)
api.get('/usuarios', controladorUsuario.obtenerAlumnos);
api.put('/editarUsuario/:idUsuario', md_autenticacion.Auth, controladorUsuario.EditarUsuarios);
api.delete('/eliminarUsuario/:idUsuario', md_autenticacion.Auth, controladorUsuario.EliminarUsuarios);




module.exports = api;