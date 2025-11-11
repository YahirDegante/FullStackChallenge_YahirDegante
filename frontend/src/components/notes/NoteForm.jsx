import PropTypes from 'prop-types';

function NoteForm({
    mode,
    loading,
    errors,
    formData,
    handleSubmit,
    handleInputChange,
    isSaveButtonEnabled,
    getButtonText,
    hasChanges,
    titleCharCount,
    contentCharCount,
    onClose
}) {
    const handleFormClose = () => {
        if (!loading) {
            onClose();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Título *
                </label>
                <input
                    type="text"
                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="Ingresa el título de la nota"
                    disabled={loading}
                />
                <div className="d-flex justify-content-between">
                    <div className="form-text">
                        {titleCharCount}/100 caracteres
                    </div>
                    {titleCharCount < 3 && (
                        <div className="form-text text-warning">
                            Mínimo 3 caracteres
                        </div>
                    )}
                </div>
                {errors.title && (
                    <div className="invalid-feedback d-block">
                        {errors.title}
                    </div>
                )}
            </div>

            <div className="mb-4">
                <label htmlFor="content" className="form-label">
                    Contenido *
                </label>
                <textarea
                    className={`form-control ${errors.content ? 'is-invalid' : ''}`}
                    id="content"
                    rows="6"
                    value={formData.content}
                    onChange={(e) => handleInputChange('content', e.target.value)}
                    placeholder="Escribe el contenido de tu nota..."
                    disabled={loading}
                />
                <div className="d-flex justify-content-between">
                    <div className="form-text">
                        {contentCharCount}/2000 caracteres
                    </div>
                    {contentCharCount < 5 && (
                        <div className="form-text text-warning">
                            Mínimo 5 caracteres
                        </div>
                    )}
                </div>
                {errors.content && (
                    <div className="invalid-feedback d-block">
                        {errors.content}
                    </div>
                )}
            </div>

            <div className="d-flex gap-2 justify-content-end">
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleFormClose}
                    disabled={loading}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className={`btn ${mode === 'create' ? 'btn-success' : 'btn-primary'}`}
                    disabled={!isSaveButtonEnabled()}
                >
                    {loading ? (
                        <>
                            <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                            {getButtonText()}
                        </>
                    ) : (
                        getButtonText()
                    )}
                </button>
            </div>
            {mode === 'edit' && !hasChanges() && (
                <div className="mt-3">
                    <small className="text-muted">
                        Realiza cambios en los campos para habilitar el guardado
                    </small>
                </div>
            )}
        </form>
    );
}

NoteForm.propTypes = {
    mode: PropTypes.oneOf(['create', 'edit']).isRequired,
    loading: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    formData: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    isSaveButtonEnabled: PropTypes.func.isRequired,
    getButtonText: PropTypes.func.isRequired,
    hasChanges: PropTypes.func.isRequired,
    titleCharCount: PropTypes.number.isRequired,
    contentCharCount: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired
};

export default NoteForm;