const Note = require('../models/Note');

//Create a new note
exports.createNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        // Validation required fields
        if (!title || !content) {
            return res.status(400).json({
                message: 'Title and content are required.'
            });
        }
        // Additional length validation (backup for frontend)
        if (title.length < 3 || title.length > 100) {
            return res.status(400).json({
                message: 'Title must be between 3 and 100 characters.'
            });
        }
        if (content.length < 5 || content.length > 5000) {
            return res.status(400).json({
                message: 'Content must be between 5 and 5000 characters.'
            });
        }
        const newNote = new Note({ title, content });
        const savedNote = await newNote.save();
        res.status(201).json({
            id: savedNote._id,
            message: 'Note created successfully.'
        });

    } catch (error) {
        // Catch Mongoose validation errors
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                message: 'Validation error',
                errors: errors
            });
        }

        res.status(500).json({
            error: 'Error to create a note: ' + error.message
        });
    }
};

//Get all notes
exports.getAllNotes = async (req, res) => {
    try {
        //Basic pagination
        const notes = await Note.find().sort({ createdAt: -1 });

        //Format response
        const formattedNotes = notes.map(note => ({
            id: note._id,
            title: note.title,
            content: note.content,
            createdAt: note.createdAt
        }));
        res.status(200).json(formattedNotes);
    } catch (error) {
        res.status(500).json({
            error: 'Error to get notes ' + error.message
        });
    }
};

//Get note by ID
exports.getNoteById = async (req, res) => {
    try {
        const { id } = req.params;
        const note = await Note.findById(id);
        if (!note) {
            return res.status(404).json({ message: 'Note not found.' });
        }
        res.status(200).json({
            id: note._id,
            title: note.title,
            content: note.content,
            createdAt: note.createdAt
        });
    } catch (error) {
        res.status(500).json({
            error: 'Error to get note ' + error.message
        });
    }
};

//Update note by ID
exports.updateNoteById = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        //Validate fields if they are provided
        if (title && (title.length < 3 || title.length > 100)) {
            return res.status(400).json({
                message: 'Title must be between 3 and 100 characters.'
            });
        }
        if (content && (content.length < 5 || content.length > 5000)) {
            return res.status(400).json({
                message: 'Content must be between 5 and 5000 characters.'
            });
        }
        // Search and update note
        const updatedNote = await Note.findByIdAndUpdate(
            id,
            { title, content },
            {
                new: true,
                runValidators: true
            }
        );
        if (!updatedNote) {
            return res.status(404).json({ message: 'Note not found.' });
        }
        res.status(200).json({
            id: updatedNote._id,
            title: updatedNote.title,
            content: updatedNote.content,
            createdAt: updatedNote.createdAt
        });

    } catch (error) {
        //Catch Mongoose validation errors
        if (error.name === 'ValidationError') {
            const errors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                message: 'Validation error',
                errors: errors
            });
        }
        if (error.name === 'CastError') {
            return res.status(400).json({
                message: 'Invalid note ID format.'
            });
        }
        res.status(500).json({
            error: 'Error to update note: ' + error.message
        });
    }
}