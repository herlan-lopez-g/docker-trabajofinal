const express = require('express');
const router = express.Router();
const { getAllEstudiantes, createEstudiante, updateEstudiante, deleteEstudiante } = require('../controller/estudianteController');


router.get('/', getAllEstudiantes);
router.post('/', createEstudiante);
router.put('/:id', updateEstudiante);
router.delete('/:id', deleteEstudiante);

module.exports = router;