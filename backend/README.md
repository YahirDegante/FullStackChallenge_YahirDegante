# Notes Management API

This project consists of a RESTful API for notes management, allowing CRUD operations (Create, Read, Update) through well-defined endpoints.

## Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.js          # Database configuration
│   ├── controllers/
│   │   └── notesController.js   # Business logic
│   ├── models/
│   │   └── Note.js              # MongoDB schema
│   ├── routes/
│   │   └── notesRoutes.js       # API routes
│   └── server.js                # Application entry point
├── tests/
│   └── notes.test.js            # Test suite
├── docs/
│   └── postman/                 # Postman collection
├── .env                         # Environment variables
└── package.json
```

## Technologies Used

- **Backend**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Testing**: Jest + Supertest
- **Environment Variables**: dotenv

## Prerequisites

- Node.js 18 or higher
- MongoDB (local or cloud)
- npm or yarn

## Database Configuration

### Option 1: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Database will be created automatically

### Option 2: MongoDB Atlas (Recommended)
1. Create account on MongoDB Atlas
2. Create a cluster
3. Obtain connection string

## Installation and Execution

### 1. Clone the repository
```bash
git clone [repository-url]
cd backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file in the project root with:
```env
DB_MONGO=mongodb://127.0.0.1:27017/notes-app
```

### 4. Run the application

**Development mode (with auto-reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

**Main file**: `src/server.js`

**Port**: `3000`

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Main Endpoints

The main endpoints are located in `notesController.js`:

- `POST /api/notes` - Create a new note
- `GET /api/notes` - Get all notes
- `GET /api/note/:id` - Get note by ID
- `PATCH /api/note/:id` - Update existing note

### Usage Examples

**Create a note:**
```bash
curl -X POST http://localhost:3000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title": "My note", "content": "My note content"}'
```

**Get all notes:**
```bash
curl http://localhost:3000/api/notes
```

**Get specific note:**
```bash
curl http://localhost:3000/api/note/[NOTE_ID]
```

**Update note:**
```bash
curl -X PATCH http://localhost:3000/api/note/[NOTE_ID] \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated title", "content": "Updated content"}'
```

## Features

- **Note creation**: With data validation (title 3-100 characters, content 5-5000 characters)
- **Note retrieval**: Individual and complete listing
- **Note updates**: Modification of titles and contents
- **Data validation**: Integrity verification in all operations
- **Error handling**: Appropriate HTTP responses for different scenarios

## API Documentation

Once the backend is running, endpoints will be available at:
```
http://localhost:3000/api
```

For comprehensive testing, import the Postman collection from the `docs/postman/` folder.

## Code Structure

### Backend
- **Controllers**: REST API controllers
- **Models**: Data models and MongoDB schemas
- **Routes**: Route and endpoint definitions
- **Config**: Database and application configuration
- **Tests**: Unit and integration tests

## Notes

- Docker is not required for execution
- Database is created automatically on first connection
- Ensure MongoDB is running before starting the backend
- Tests use the same database but clean data between each test

## Troubleshooting

**MongoDB connection error:**
- Verify MongoDB service is running
- Confirm connection string in `.env` is correct
- Check that port 27017 is available

**Port already in use error:**
- Change port in `.env` file
- Verify no other server instance is running