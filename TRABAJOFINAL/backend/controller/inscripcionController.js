const { Inscripcion } = require('../models');

exports.getAllInscripciones = async (req, res) => {
  try {
    const inscripciones = await Inscripcion.findAll();
    res.json(inscripciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener inscripciones' });
  }
};

exports.createInscripcion = async (req, res) => {
  try {
    const inscripcion = await Inscripcion.create(req.body);
    res.status(201).json(inscripcion);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear inscripción' });
  }
};

exports.updateInscripcion = async (req, res) => {
  try {
    await Inscripcion.update(req.body, { where: { id_inscripcion: req.params.id } });
    res.json({ message: 'Inscripción actualizada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar inscripción' });
  }
};

exports.deleteInscripcion = async (req, res) => {
  try {
    await Inscripcion.destroy({ where: { id_inscripcion: req.params.id } });
    res.json({ message: 'Inscripción eliminada' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar inscripción' });
  }
};