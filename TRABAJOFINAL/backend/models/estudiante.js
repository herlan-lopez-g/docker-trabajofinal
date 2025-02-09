module.exports = (sequelize, DataTypes) => {
    const Estudiante = sequelize.define('Estudiante', {
      id_estudiante: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nombre: { type: DataTypes.STRING(100), allowNull: false },
      apellido: { type: DataTypes.STRING(100), allowNull: false },
      email: { type: DataTypes.STRING(100), unique: true, allowNull: false },
      fecha_nacimiento: { type: DataTypes.DATE, allowNull: false },
      telefono: { type: DataTypes.STRING(15) },
      direccion: { type: DataTypes.STRING(255) },
    }, { timestamps: false });
    return Estudiante;
  };