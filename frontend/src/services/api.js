import axios from 'axios';

const API_BASE_URL = 'http://localhost:4000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const notesAPI = {
    // Get all notes
    getAllNotes: () => api.get('/notes'),
    // Get note by ID
    getNoteById: (id) => api.get(`/note/${id}`),
    // Create new note
    createNote: (noteData) => api.post('/notes', noteData),
    // Update note
    updateNote: (id, noteData) => api.patch(`/note/${id}`, noteData),
};

export default api;