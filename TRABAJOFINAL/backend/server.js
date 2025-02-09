require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models'); 
const cargarEstudiantes = require('./scripts/dataEstudiante');
const cargarCursos = require('./scripts/dataCurso');
const cargarInstructores = require('./scripts/dataInstructor');
const cargarInscripciones = require('./scripts/dataInscripcion');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const estudianteRoutes = require('./routes/estudianteRoutes');
const cursoRoutes = require('./routes/cursoRoutes');
const instructorRoutes = require('./routes/instructorRoutes');
const inscripcionRoutes = require('./routes/inscripcionRoutes');

app.use('/api/estudiantes', estudianteRoutes);
app.use('/api/cursos', cursoRoutes);
app.use('/api/instructores', instructorRoutes);
app.use('/api/inscripciones', inscripcionRoutes);

const PORT = process.env.PORT || 8080;
  sequelize.sync().then(async () => {
await cargarEstudiantes(); 
await cargarInstructores(); 
await cargarCursos(); 
await cargarInscripciones();

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch(error => console.log('Error al sincronizar la base de datos:', error));
