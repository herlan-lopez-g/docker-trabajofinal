module.exports = (sequelize, DataTypes) => {
    const Instructor = sequelize.define('Instructor', {
      id_instructor: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      nombre_instructor: { type: DataTypes.STRING(100), allowNull: false },
      apellido_instructor: { type: DataTypes.STRING(100), allowNull: false },
      email_instructor: { type: DataTypes.STRING(100), unique: true, allowNull: false },
      telefono_instructor: { type: DataTypes.STRING(15) },
      direccion_instructor: { type: DataTypes.STRING(255) },
      especialidad: { type: DataTypes.STRING(100), allowNull: false },
    }, { timestamps: false });
    return Instructor;
  };