const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cursosSchema = new Schema({
    nombre: String,
    idMaestro: String
})

module.exports = mongoose.model('Cursos', cursosSchema);