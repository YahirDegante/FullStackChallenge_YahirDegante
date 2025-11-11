const express = require('express');
const router = express.Router();
const noteController = require('../controllers/notesController');

//POST /notes - Create a new note
router.post('/notes', noteController.createNote);

//GET /note/:id - Get note by ID
router.get('/note/:id', noteController.getNoteById);

//GET /notes - Gat all notes
router.get('/notes', noteController.getAllNotes);

//PATCH /note/:id - Update note by ID
router.patch('/note/:id', noteController.updateNoteById);

module.exports = router;