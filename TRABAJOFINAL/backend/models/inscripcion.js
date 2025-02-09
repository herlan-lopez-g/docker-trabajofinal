module.exports = (sequelize, DataTypes) => {
    const Inscripcion = sequelize.define('Inscripcion', {
      id_inscripcion: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      id_estudiante: { type: DataTypes.INTEGER, allowNull: false },
      id_curso: { type: DataTypes.INTEGER, allowNull: false },
      fecha_inscripcion: { type: DataTypes.DATE, allowNull: false },
      estado: { type: DataTypes.ENUM('pendiente', 'completado', 'cancelado'), allowNull: false },
    }, { timestamps: false });
    return Inscripcion;
  };
  