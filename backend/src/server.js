const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');
require('dotenv').config();

const noteRoutes = require('./routes/notesRoutes');

//Create express app
const app = express();
const PORT = process.env.PORT || 3000;

//Connect to database
connectDB();

//Middleware basic
app.use(cors()); //Allow all origins
app.use(express.json());

//Routes
app.use('/api', noteRoutes);

//Route to verify API is running
app.get('/health', (req, res) => {
    const mongoose = require('mongoose');
    res.status(200).json({
        status: 'OK',
        message: 'API Notes is running',
        database: mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected'
    });
});

//Start server
app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
});

module.exports = app;