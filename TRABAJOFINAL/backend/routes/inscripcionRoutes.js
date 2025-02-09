const express = require('express');

const inscripcionRouter = express.Router();
const { getAllInscripciones, createInscripcion, updateInscripcion, deleteInscripcion } = require('../controller/inscripcionController');

inscripcionRouter.get('/', getAllInscripciones);
inscripcionRouter.post('/', createInscripcion);
inscripcionRouter.put('/:id', updateInscripcion);
inscripcionRouter.delete('/:id', deleteInscripcion);

module.exports = inscripcionRouter;