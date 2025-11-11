const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/server');

describe('Notes API', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.DB_MONGO);
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    test('POST /api/notes - should create a new note', async () => {
        const response = await request(app)
            .post('/api/notes')
            .send({
                title: 'Test Note',
                content: 'Test content'
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    });
});