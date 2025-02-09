
const { Instructor } = require('../models');

const instructors = [
  {
    nombre_instructor: 'Marco Antonio',
    apellido_instructor: 'Avendaño Ajata',
    email_instructor: 'marco.ave@gmail.com',
    telefono_instructor: '76434343',
    direccion_instructor: 'Calle Lima y Soruco',
    especialidad:'DESARROLLO WEB'
  },
  {
    nombre_instructor: 'Carlos Ariel',
    apellido_instructor: 'Trigo Vargas',
    email_instructor: 'carlosmaria.tri@gmail.com',
    telefono_instructor: '65455335',
    direccion_instructor: 'Avenida Linarez y Oruro',
    especialidad:'DESARROLLO MOVIL'
  },
  {
    nombre_instructor: 'Sergio Mijail',
    apellido_instructor: 'Daza Mendoza',
    email_instructor: 'sergio.mij@gmail.com',
    telefono_instructor: '74537555',
    direccion_instructor: 'Calle Caro y Cochabamba',
    especialidad:'SEGURIDAD INFORMATICA'
  }
  ,
  {
    nombre_instructor: 'Diego Adrian',
    apellido_instructor: 'Barra Paredes',
    email_instructor: 'diego.adri@gmail.com',
    telefono_instructor: '68768678',
    direccion_instructor: 'Av. 6 de agosto',
    especialidad:'REDES Y SERVIDORES'
  }
];

async function cargarInstructor() {
  try {
  
    const count = await Instructor.count();
    if (count === 0) { 
      await Instructor.bulkCreate(instructors);
    } 
  } catch (error) {
    console.error('Error al cargar instructores:', error);
  }
}

module.exports = cargarInstructor;
