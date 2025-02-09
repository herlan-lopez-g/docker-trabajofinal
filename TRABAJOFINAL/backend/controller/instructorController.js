const { Instructor } = require('../models');

exports.getAllInstructores = async (req, res) => {
  try {
    const instructores = await Instructor.findAll();
    res.json(instructores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener instructores' });
  }
};

exports.createInstructor = async (req, res) => {
  try {
    const instructor = await Instructor.create(req.body);
    res.status(201).json(instructor);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear instructor' });
  }
};

exports.updateInstructor = async (req, res) => {
  try {
    await Instructor.update(req.body, { where: { id_instructor: req.params.id } });
    res.json({ message: 'Instructor actualizado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar instructor' });
  }
};

exports.deleteInstructor = async (req, res) => {
  try {
    await Instructor.destroy({ where: { id_instructor: req.params.id } });
    res.json({ message: 'Instructor eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar instructor' });
  }
};