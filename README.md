# Notes Management Application

A full-stack web application for managing notes with a modern React frontend and Node.js/Express backend.

## Project Structure

```
project/
├── backend/          # REST API with Node.js/Express
├── frontend/         # React application
└── README.md
```

## Technologies Used

**Backend:**
- Node.js with Express.js
- MongoDB with Mongoose ODM
- Jest + Supertest for testing
- dotenv for environment variables
- CORS enabled
- Helmet for security

**Frontend:**
- React 18+ with Hooks
- Bootstrap 5.3+ for UI components
- Axios for HTTP requests
- React Hot Toast for notifications
- Bootstrap Icons
- Responsive design

## Prerequisites

- Node.js 18 or higher
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## Quick Setup

### 1. Clone and Setup Backend

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env
# Edit .env with your MongoDB configuration
```

### 2. Setup Frontend

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install
```

### 3. Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# Server running on http://localhost:4000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
# Application running on http://localhost:3000
```

## Database Configuration

### Option 1: Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Database created automatically on first connection

### Option 2: MongoDB Atlas (Recommended)
1. Create account on MongoDB Atlas
2. Create a cluster
3. Get connection string
4. Update `.env` file with connection string

## Environment Variables

**Backend (.env):**
```env
DB_MONGO=mongodb://127.0.0.1:27017/notes-app
PORT=4000
NODE_ENV=development
```

## Main Features

### Backend Features
- ✅ RESTful API with CRUD operations
- ✅ Data validation and sanitization
- ✅ Error handling with appropriate HTTP status codes
- ✅ CORS enabled for frontend communication
- ✅ Security headers with Helmet
- ✅ Automated testing suite
- ✅ Environment-based configuration
- ✅ MongoDB integration with Mongoose
- ✅ Pagination support
- ✅ Search and filtering capabilities

### Frontend Features
- ✅ Modern, responsive UI
- ✅ Dual view modes (List and Grid)
- ✅ Real-time note creation and editing
- ✅ Form validation with user feedback
- ✅ Loading states and error handling
- ✅ Toast notifications for user actions
- ✅ Mobile-friendly design
- ✅ Accessibility support
- ✅ PropTypes validation
- ✅ Custom hooks for state management

## API Endpoints

| Method | Endpoint | Purpose |
|--------|----------|---------|
| `GET` | `/api/notes` | Fetch all notes |
| `GET` | `/api/note/:id` | Fetch specific note |
| `POST` | `/api/notes` | Create new note |
| `PATCH` | `/api/note/:id` | Update existing note |

## Available Scripts

### Backend Scripts
```bash
npm run dev      # Development with auto-reload
npm start        # Production mode
npm test         # Run test suite
npm run test:watch  # Run tests in watch mode
```

### Frontend Scripts
```bash
npm start        # Development server
npm run build    # Production build
npm test         # Run test suite
npm run eject    # Eject from Create React App
```

## Component Architecture

### Frontend Structure
```
frontend/
├── components/
│   ├── layout/           # Header, navigation
│   ├── notes/            # Note-related components
│   └── ui/               # Reusable UI components
├── hooks/                # Custom React hooks
├── services/             # API service layer
└── utils/                # Utility functions
```

### Backend Structure
```
backend/
├── src/
│   ├── controllers/      # Business logic
│   ├── models/           # Database schemas
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── config/           # Database configuration
│   └── utils/            # Utility functions
├── tests/                # Test suites
└── docs/                 # API documentation
```

## Testing

### Backend Testing
```bash
cd backend
npm test           # Run all tests
npm run test:watch # Watch mode for development
```

### Frontend Testing
```bash
cd frontend
npm test           # Run test suite
npm test -- --coverage  # Test with coverage report
```

## Deployment

### Backend Deployment
1. Set `NODE_ENV=production`
2. Build and start with `npm start`
3. Ensure MongoDB connection is configured

### Frontend Deployment
```bash
cd frontend
npm run build
# Deploy build/ folder to your preferred hosting service
```

### Recommended Hosting
- **Backend**: Heroku, Railway, or DigitalOcean
- **Frontend**: Netlify, Vercel, or GitHub Pages
- **Database**: MongoDB Atlas

## Troubleshooting

### Common Issues

**MongoDB Connection Error:**
- Verify MongoDB service is running
- Check connection string in `.env`
- Ensure network access in MongoDB Atlas

**Port Already in Use:**
- Change port in environment variables
- Check for other running instances

**CORS Errors:**
- Backend configured for `http://localhost:3000`
- Verify frontend URL matches CORS settings

**Build Errors:**
- Clear `node_modules` and reinstall dependencies
- Check Node.js version compatibility
- Verify all environment variables are set


**Ready to use!** The application will be available at `http://localhost:3000` once both services are running. The backend API is accessible at `http://localhost:4000/api`.