
const { Estudiante } = require('../models');

const estudiantes = [
  {
    nombre: 'Herlan Alan',
    apellido: 'Lopez Gonzales',
    email: 'halael.rey@gmail.com',
    fecha_nacimiento: '2000-03-12',
    telefono: '67155712',
    direccion: 'Calle C entre 5 y 6',
  },
  {
    nombre: 'Gianella Ariadna',
    apellido: 'Velez Zambrana',
    email: 'ariadnaz@gmail.com',
    fecha_nacimiento: '1998-02-20',
    telefono: '76543216',
    direccion: 'Avenida Siempre Viva 742',
  },
  {
    nombre: 'Gonzalo',
    apellido: 'Moreno Dolz',
    email: 'gonzalom@gmal.com',
    fecha_nacimiento: '1994-07-10',
    telefono: '75545433',
    direccion: 'Calle Real 456',
  },
  {
    nombre: 'Javier Jose',
    apellido: 'Choque Quispe',
    email: 'javierj@gmal.com',
    fecha_nacimiento: '1994-03-16',
    telefono: '71567433',
    direccion: 'Calle Sucre y Lima 456',
  },
  {
    nombre: 'Marcelo Erik',
    apellido: 'Guzman Morales',
    email: 'marceloe@gmail.com',
    fecha_nacimiento: '1997-09-13',
    telefono: '71565432',
    direccion: 'Calle Villarroel y Suarez',
  },
  {
    nombre: 'Cesar ',
    apellido: 'Calvimontes',
    email: 'cesarc@gmail.com',
    fecha_nacimiento: '1993-02-03',
    telefono: '79797897',
    direccion: 'Calle Velasco y Tejerina',
  }
];

async function cargarEstudiantes() {
  try {  
    const count = await Estudiante.count();
    if (count === 0) {
      await Estudiante.bulkCreate(estudiantes);
    } 
  } catch (error) {
    console.error('Error al cargar estudiantes:', error);
  }
}

module.exports = cargarEstudiantes;
