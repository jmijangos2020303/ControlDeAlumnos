const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var AsignacionSchema = Schema({
    idAlumno: String,
    idCursos: Array
})

module.exports = mongoose.model('Asignaciones', AsignacionSchema);