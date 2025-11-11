import { useState, useCallback } from 'react';
import { Toaster } from 'react-hot-toast';
import useModal from './hooks/useModal';
import Header from './components/layout/Header';
import NoteFormModal from './components/notes/NoteFormModal';
import NoteList from './components/notes/NoteList';

function App() {
  const createModal = useModal();
  const editModal = useModal();
  const [viewMode, setViewMode] = useState('list');
  const [noteCount, setNoteCount] = useState(0);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleNoteSaved = useCallback(() => {
    setRefreshTrigger(prev => prev + 1);
  
    createModal.closeModal();
    editModal.closeModal();
  }, [createModal, editModal]);

  const handleOpenEditModal = (note) => {
    editModal.openModal(note);
  };

  const handleNotesLoaded = useCallback((count) => {
    setNoteCount(count);
  }, []);

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 5000,
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          },
        }}
      />

      <div className="container-fluid py-4 bg-light min-vh-100">
        <div className="container">
          <Header 
            onOpenCreateModal={createModal.openModal}
            noteCount={noteCount}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />
          <NoteList
            onOpenEditModal={handleOpenEditModal}
            viewMode={viewMode}
            onNotesLoaded={handleNotesLoaded}
            refreshTrigger={refreshTrigger}
          />
          <NoteFormModal
            isOpen={createModal.isOpen}
            onClose={createModal.closeModal}
            onNoteSaved={handleNoteSaved}
            mode="create"
          />
          <NoteFormModal
            isOpen={editModal.isOpen}
            onClose={editModal.closeModal}
            note={editModal.modalData}
            onNoteSaved={handleNoteSaved}
            mode="edit"
          />
        </div>
      </div>
    </>
  );
}

export default App;