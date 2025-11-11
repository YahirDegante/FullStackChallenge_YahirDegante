import Modal from '../ui/Modal';
import PropTypes from 'prop-types';
import { useNoteForm } from './hooks/useNoteForm';
import NoteForm from './NoteForm';

function NoteFormModal({ isOpen, onClose, note, onNoteSaved, mode = 'create' }) {
    const {
        formData,
        loading,
        errors,
        handleSubmit,
        handleInputChange,
        isSaveButtonEnabled,
        getButtonText,
        hasChanges,
        titleCharCount,
        contentCharCount
    } = useNoteForm(mode, note, onNoteSaved, onClose);

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={mode === 'create' ? 'Crear Nueva Nota' : 'Editar Nota'}
            size="md"
        >
            <NoteForm
                mode={mode}
                loading={loading}
                errors={errors}
                formData={formData}
                handleSubmit={handleSubmit}
                handleInputChange={handleInputChange}
                isSaveButtonEnabled={isSaveButtonEnabled}
                getButtonText={getButtonText}
                hasChanges={hasChanges}
                titleCharCount={titleCharCount}
                contentCharCount={contentCharCount}
                onClose={onClose}
            />
        </Modal>
    );
}

NoteFormModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    note: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
        createdAt: PropTypes.string
    }),
    onNoteSaved: PropTypes.func.isRequired,
    mode: PropTypes.oneOf(['create', 'edit'])
};

NoteFormModal.defaultProps = {
    mode: 'create',
    note: null
};

export default NoteFormModal;