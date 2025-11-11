import { useState, useEffect, useCallback } from 'react';
import { notesAPI } from '../../services/api';
import NoteItem from './NoteItem';
import NoteGridItem from './NoteGridItem';
import Loading from '../ui/Loading';
import ErrorMessage from '../ui/ErrorMessage';
import PropTypes from 'prop-types';

function NoteList({ onOpenEditModal, viewMode, onNotesLoaded, refreshTrigger }) {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchNotes = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await notesAPI.getAllNotes();
            if (!response || !Array.isArray(response.data)) {
                throw new Error('Respuesta del servidor inválida');
            }
            setNotes(response.data);

            if (onNotesLoaded) onNotesLoaded(response.data.length);
        } catch (err) {
            console.error('Error fetching notes:', err);
            if (err.response) {
                setError('Error al obtener las notas del servidor. Inténtalo más tarde.');
            } else {
                setError('No se pudo conectar con el servidor. Verifica tu conexión.');
            }
            if (onNotesLoaded) onNotesLoaded(0);
        } finally {
            setLoading(false);
        }
    }, [onNotesLoaded]);

    useEffect(() => {
        fetchNotes();
    }, [fetchNotes, refreshTrigger]);

    const renderContent = () => {
        if (notes.length === 0) {
            return (
                <div className="card text-center py-5">
                    <div className="card-body">
                        <h5 className="card-title text-muted">No hay notas creadas</h5>
                        <p className="card-text text-muted">
                            Comienza creando tu primera nota usando el botón "Nueva Nota"
                        </p>
                    </div>
                </div>
            );
        }

        if (viewMode === 'list') {
            return notes.map(note => (
                <NoteItem
                    key={note.id}
                    note={note}
                    onOpenEditModal={onOpenEditModal}
                />
            ));
        }

        return (
            <div className="row">
                {notes.map(note => (
                    <div key={note.id} className="col-md-6 col-lg-4 mb-3">
                        <NoteGridItem
                            note={note}
                            onOpenEditModal={onOpenEditModal}
                        />
                    </div>
                ))}
            </div>
        );
    };
    if (loading) return <Loading message="Cargando notas..." />;
    if (error) return <ErrorMessage error={error} />;

    return <div>{renderContent()}</div>;
}

NoteList.propTypes = {
    onOpenEditModal: PropTypes.func.isRequired,
    viewMode: PropTypes.oneOf(['list', 'grid']).isRequired,
    onNotesLoaded: PropTypes.func,
    refreshTrigger: PropTypes.number
};

export default NoteList;
