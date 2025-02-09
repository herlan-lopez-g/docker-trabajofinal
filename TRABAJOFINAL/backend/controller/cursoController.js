const { Curso } = require('../models');

exports.getAllCursos = async (req, res) => {
  try {
    const cursos = await Curso.findAll();
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener cursos' });
  }
};

exports.createCurso = async (req, res) => {
  try {
    const curso = await Curso.create(req.body);
    res.status(201).json(curso);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear curso' });
  }
};

exports.updateCurso = async (req, res) => {
  try {
    await Curso.update(req.body, { where: { id_curso: req.params.id } });
    res.json({ message: 'Curso actualizado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar curso' });
  }
};

exports.deleteCurso = async (req, res) => {
  try {
    await Curso.destroy({ where: { id_curso: req.params.id } });
    res.json({ message: 'Curso eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar curso' });
  }
};