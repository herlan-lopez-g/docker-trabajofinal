const express = require('express');

const instructorRouter = express.Router();
const { getAllInstructores, createInstructor, updateInstructor, deleteInstructor } = require('../controller/instructorController');

instructorRouter.get('/', getAllInstructores);
instructorRouter.post('/', createInstructor);
instructorRouter.put('/:id', updateInstructor);
instructorRouter.delete('/:id', deleteInstructor);

module.exports = instructorRouter;