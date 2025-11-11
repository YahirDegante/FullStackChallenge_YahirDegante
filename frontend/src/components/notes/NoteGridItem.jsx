import PropTypes from 'prop-types';

function NoteGridItem({ note, onOpenEditModal }) {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('es-ES', {
            month: 'short',
            day: 'numeric'
        });
    };

    const truncateContent = (content, maxLength = 100) => {
        if (content.length <= maxLength) return content;
        return content.substring(0, maxLength) + '...';
    };

    return (
        <div className="card h-100">
            <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between align-items-start mb-2">
                    <h6 className="card-title text-primary mb-0 flex-grow-1">
                        {truncateContent(note.title, 50)}
                    </h6>
                    <button
                        className="btn btn-link text-primary p-0 ms-2"
                        onClick={() => onOpenEditModal(note)}
                        title="Editar nota"
                    >
                        <i className="bi bi-pencil"></i>
                    </button>
                </div>

                <p className="card-text text-muted small flex-grow-1">
                    {truncateContent(note.content)}
                </p>

                <div className="mt-auto">
                    <small className="text-muted">
                        {formatDate(note.createdAt)}
                    </small>
                </div>
            </div>
        </div>
    );
}

NoteGridItem.propTypes = {
    note: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired
    }).isRequired,
    onOpenEditModal: PropTypes.func.isRequired
};

export default NoteGridItem;