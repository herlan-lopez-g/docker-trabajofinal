const express = require('express');

const cursoRouter = express.Router();
const { getAllCursos, createCurso, updateCurso, deleteCurso } = require('../controller/cursoController');

cursoRouter.get('/', getAllCursos);
cursoRouter.post('/', createCurso);
cursoRouter.put('/:id', updateCurso);
cursoRouter.delete('/:id', deleteCurso);

module.exports = cursoRouter;