const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();

// IMPORTACION RUTAS
//const productosRoutes = require('./src/routers/productos.routes');
//const usuariosRoutes = require('./src/routers/usuarios.routes')
const usuarioRoutes = require('./src/routes/usuario.routes');
const cursoRoutes = require('./src/routes/cursos.routes')
const asignaturaRoutes = require('./src/routes/asignaciones.routes')


//body parser


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// MIDDLEWARES
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// CABECERAS
app.use(cors());

// CARGA DE RUTAS localhost:3000/api/productos
app.use('/api', usuarioRoutes, cursoRoutes, asignaturaRoutes);


module.exports = app;