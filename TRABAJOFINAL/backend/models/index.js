const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_DATABASE,    
  process.env.DB_USER,        
  process.env.DB_PASSWORD,    
  {
    host: process.env.DB_HOST,  
    dialect: process.env.DB_DIALECT, 
    port: process.env.DB_PORT,  
  }
);

const Estudiante = require('./estudiante')(sequelize, DataTypes);
const Curso = require('./curso')(sequelize, DataTypes);
const Instructor = require('./instructor')(sequelize, DataTypes);
const Inscripcion = require('./inscripcion')(sequelize, DataTypes);

Instructor.hasMany(Curso, { foreignKey: 'id_instructor' });
Curso.belongsTo(Instructor, { foreignKey: 'id_instructor' });

Estudiante.belongsToMany(Curso, { 
  through: Inscripcion, 
  foreignKey: 'id_estudiante',
  otherKey: 'id_curso'
});
Curso.belongsToMany(Estudiante, { 
  through: Inscripcion, 
  foreignKey: 'id_curso',
  otherKey: 'id_estudiante'
});


Inscripcion.belongsTo(Estudiante, { foreignKey: 'id_estudiante' });
Inscripcion.belongsTo(Curso, { foreignKey: 'id_curso' });

module.exports = { sequelize, Estudiante, Curso, Instructor, Inscripcion };
