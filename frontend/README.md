# Notes Management Frontend

A modern React application for managing notes with a clean, responsive interface that communicates with a RESTful API backend.

## Project Structure

```
frontend/
├── public/
│   └── index.html              # HTML template
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── Header.jsx      # App header with controls
│   │   ├── notes/
│   │   │   ├── NoteFormModal.jsx    # Create/edit note modal
│   │   │   ├── NoteItem.jsx         # Individual note (list view)
│   │   │   ├── NoteGridItem.jsx     # Individual note (grid view)
│   │   │   └── NoteList.jsx         # Notes list container
│   │   └── ui/
│   │       ├── Modal.jsx            # Reusable modal component
│   │       ├── Loading.jsx          # Loading spinner
│   │       └── ErrorMessage.jsx     # Error display component
│   ├── hooks/
│   │   └── useModal.js         # Custom modal hook
│   ├── services/
│   │   └── api.js              # API service layer
│   ├── App.js                  # Main application component
│   └── index.js                # Application entry point
├── package.json
└── README.md
```

## Technologies Used

- **Frontend Framework**: React 18+
- **UI Library**: Bootstrap 5.3+
- **Icons**: Bootstrap Icons
- **HTTP Client**: Axios
- **Notifications**: React Hot Toast
- **Development**: React Scripts

## Prerequisites

- Node.js 18 or higher
- npm or yarn
- Backend API running (see backend README)

## Installation and Execution

### 1. Navigate to frontend directory
```bash
cd frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

### 4. Build for production
```bash
npm run build
```

## ⚙️ Configuration

Ensure your backend API is running at `http://localhost:4000` or update the API base URL in `src/services/api.js`:

```javascript
const API_BASE_URL = 'http://localhost:4000/api';
```

## Features

### User Interface
- **Dual View Modes**: List and grid layout toggle
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Clean Bootstrap-based interface
- **Real-time Validation**: Form validation with immediate feedback

### Note Management
- **Create Notes**: Modal form with validation
- **View Notes**: Display all notes with pagination
- **Edit Notes**: In-place editing with change detection

### User Experience
- **Loading States**: Visual feedback during operations
- **Error Handling**: User-friendly error messages
- **Success Feedback**: Toast notifications for actions
- **Accessible**: Keyboard navigation and ARIA labels

## Component Overview

### Main Components
- **App**: Root component managing application state
- **Header**: Application header with view controls and note counter
- **NoteList**: Container for displaying notes in list/grid view
- **NoteItem**: Individual note display for list view
- **NoteGridItem**: Individual note display for grid view
- **NoteFormModal**: Modal for creating and editing notes

### UI Components
- **Modal**: Reusable modal dialog component
- **Loading**: Loading spinner with customizable messages
- **ErrorMessage**: Consistent error display component

### Custom Hooks
- **useModal**: Manage modal state (open/close/data)

## API Integration

The frontend communicates with the following backend endpoints:

| Method | Endpoint | Purpose |
|--------|----------|---------|
| `GET` | `/api/notes` | Fetch all notes |
| `GET` | `/api/note/:id` | Fetch specific note |
| `POST` | `/api/notes` | Create new note |
| `PATCH` | `/api/note/:id` | Update existing note |

## Styling & Theming

- **Bootstrap 5**: Responsive grid system and components
- **Custom CSS**: Minimal additional styling
- **Bootstrap Icons**: Consistent iconography
- **Color Scheme**: Professional purple accent color

## Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App (not recommended)

## Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Development

### Adding New Features
1. Create components in appropriate directories
2. Update API service for new endpoints
3. Add PropTypes for component validation
4. Test across different viewports

### State Management
- Local state with React hooks
- Prop drilling for component communication
- Ready for state management library integration

## Deployment

### Build for Production
```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deployment Options
- **Netlify**: Drag and drop `build` folder
- **Vercel**: Connect GitHub repository
- **AWS S3**: Upload `build` contents
- **Shared Hosting**: Upload via FTP

## Notes

- Ensure backend is running before starting frontend
- CORS is configured in backend for `http://localhost:3000`
- Environment variables can be added for different configurations
- The application is PWA-ready (can be enhanced with service worker)

## Troubleshooting

**Connection Errors:**
- Verify backend is running on port 3000
- Check CORS configuration in backend
- Confirm API base URL in `src/services/api.js`

**Build Errors:**
- Clear node_modules and reinstall dependencies
- Ensure Node.js version is 18 or higher
- Check for syntax errors in components

**Styling Issues:**
- Verify Bootstrap CSS is imported in `index.js`
- Check Bootstrap Icons are loaded in `index.html`

---