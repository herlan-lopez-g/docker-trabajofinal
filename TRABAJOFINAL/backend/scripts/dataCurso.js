const { Curso } = require('../models');

const cursos = [
  {
    nombre_curso: 'Java',
    descripcion: 'Curso inicial de Java para principiantes',
    fecha_inicio: '2025-03-01', 
    fecha_fin: '2025-03-02',
    precio: 150,
    estado_curso: 'activo',
    id_instructor: 1
  },
  {
    nombre_curso: 'Spring Boot',
    descripcion: 'Curso Avanzado Web',
    fecha_inicio: '2025-05-02', 
    fecha_fin: '2025-05-03',
    precio: 350,
    estado_curso: 'activo',
    id_instructor: 1
  },
  {
    nombre_curso: 'Kotlin',
    descripcion: 'Curso Avanzado Movil',
    fecha_inicio: '2025-03-03', 
    fecha_fin: '2025-03-04',
    precio: 550,
    estado_curso: 'activo',
    id_instructor: 2
  }
  ,
  {
    nombre_curso: 'Seguridad Web',
    descripcion: 'Proteccion a Sistemas Web',
    fecha_inicio: '2025-03-03', 
    fecha_fin: '2025-03-04',
    precio: 650,
    estado_curso: 'inactivo',
    id_instructor: 3
  }
  ,
  {
    nombre_curso: 'Servidores en la Nube',
    descripcion: 'Todo en la Nube',
    fecha_inicio: '2025-02-03', 
    fecha_fin: '2025-02-04',
    precio: 400,
    estado_curso: 'inactivo',
    id_instructor: 4
  }
];

async function cargarCursos() {
  try {
    const count = await Curso.count();
    if (count === 0) {
      await Curso.bulkCreate(cursos);
    } else {
    }
  } catch (error) {
    console.error('Error al cargar cursos:', error);
  }
}

module.exports = cargarCursos;
