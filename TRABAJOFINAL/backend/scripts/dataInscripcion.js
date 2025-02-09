const { Inscripcion } = require('../models');


const inscripcions = [
  {

id_estudiante: 1,
id_curso: 1,
fecha_inscripcion: '2025-02-01', 
estado: 'completado'
  },
  {

    id_estudiante: 2,
    id_curso: 2,
    fecha_inscripcion: '2025-02-05', 
    estado: 'completado'
      },
      {

        id_estudiante: 3,
        id_curso: 3,
        fecha_inscripcion: '2025-02-16', 
        estado: 'pendiente'
          },
          {

            id_estudiante: 4,
            id_curso:4,
            fecha_inscripcion: '2025-03-01', 
            estado: 'cancelado'
              }
];

async function cargarInscripciones() {
  try {
    const count = await Inscripcion.count();
    if (count === 0) {
      await Inscripcion.bulkCreate(inscripcions);
      console.log('Cursos cargados con éxito');
    } else {
      console.log('Ya existen cursos en la base de datos');
    }
  } catch (error) {
    console.error('Error al cargar cursos:', error);
  }
}

module.exports = cargarInscripciones;
