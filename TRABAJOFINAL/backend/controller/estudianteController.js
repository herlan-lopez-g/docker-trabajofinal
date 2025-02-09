
const { Estudiante } = require('../models');

exports.getAllEstudiantes = async (req, res) => {
  try {
    const estudiantes = await Estudiante.findAll();
    res.json(estudiantes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener estudiantes' });
  }
};

exports.createEstudiante = async (req, res) => {
  try {
    const estudiante = await Estudiante.create(req.body);
    res.status(201).json(estudiante);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear estudiante' });
  }
};

exports.updateEstudiante = async (req, res) => {
  try {
    await Estudiante.update(req.body, { where: { id_estudiante: req.params.id } });
    res.json({ message: 'Estudiante actualizado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar estudiante' });
  }
};

exports.deleteEstudiante = async (req, res) => {
  try {
    await Estudiante.destroy({ where: { id_estudiante: req.params.id } });
    res.json({ message: 'Estudiante eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar estudiante' });
  }
};