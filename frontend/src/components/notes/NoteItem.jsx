import PropTypes from 'prop-types';

function NoteItem({ note, onOpenEditModal }) {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('es-ES', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="row align-items-center">
                    <div className="col-md-10">
                        <h6 className="card-title text-primary mb-1">
                            {note.title}
                        </h6>
                        <p className="card-text text-muted small mb-2">
                            {note.content}
                        </p>
                        <small className="text-muted">
                            {formatDate(note.createdAt)}
                        </small>
                    </div>

                    <div className="col-md-2 text-end">
                        <button
                            className="btn btn-outline-primary btn-sm"
                            onClick={() => onOpenEditModal(note)}
                            title="Editar nota"
                        >
                            <i className="bi bi-pencil"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

NoteItem.propTypes = {
    note: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired
    }).isRequired,
    onOpenEditModal: PropTypes.func.isRequired
};

export default NoteItem;