module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define('Curso', {
      id_curso: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nombre_curso: { type: DataTypes.STRING(100), allowNull: false },
      descripcion: { type: DataTypes.TEXT },
      fecha_inicio: { type: DataTypes.DATE, allowNull: false },
      fecha_fin: { type: DataTypes.DATE, allowNull: false },
      precio: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
      estado_curso: { type: DataTypes.ENUM('activo', 'inactivo'), allowNull: false },
      id_instructor: { type: DataTypes.INTEGER, allowNull: false }
    }, { timestamps: false });

 
    return Curso;
  };