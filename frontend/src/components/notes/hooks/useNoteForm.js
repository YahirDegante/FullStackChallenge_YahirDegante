import { useState, useEffect } from 'react';
import { notesAPI } from '../../../services/api';
import toast from 'react-hot-toast';

export const useNoteForm = (mode, note, onNoteSaved, onClose) => {
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    });
    const [originalData, setOriginalData] = useState({
        title: '',
        content: ''
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        title: '',
        content: ''
    });

    const validateField = (field, value) => {
        const newErrors = { ...errors };

        switch (field) {
            case 'title':
                if (!value.trim()) {
                    newErrors.title = 'El título es requerido';
                } else if (value.length < 3) {
                    newErrors.title = 'El título debe tener al menos 3 caracteres';
                } else if (value.length > 100) {
                    newErrors.title = 'El título no puede exceder 100 caracteres';
                } else {
                    newErrors.title = '';
                }
                break;

            case 'content':
                if (!value.trim()) {
                    newErrors.content = 'El contenido es requerido';
                } else if (value.length < 5) {
                    newErrors.content = 'El contenido debe tener al menos 5 caracteres';
                } else if (value.length > 2000) {
                    newErrors.content = 'El contenido no puede exceder 2000 caracteres';
                } else {
                    newErrors.content = '';
                }
                break;

            default:
                break;
        }

        setErrors(newErrors);
    };

    const isFormValid = () => {
        return formData.title.trim().length >= 3 &&
            formData.title.trim().length <= 100 &&
            formData.content.trim().length >= 5 &&
            formData.content.trim().length <= 2000 &&
            Object.values(errors).every(error => error === '');
    };
    const hasChanges = () => {
        if (mode === 'create') return true;
        return formData.title !== originalData.title || formData.content !== originalData.content;
    };
    const isSaveButtonEnabled = () => {
        return isFormValid() && hasChanges() && !loading;
    };

    useEffect(() => {
        if (mode === 'edit' && note) {
            const newData = {
                title: note.title || '',
                content: note.content || ''
            };
            setFormData(newData);
            setOriginalData(newData);
        } else {
            const emptyData = { title: '', content: '' };
            setFormData(emptyData);
            setOriginalData(emptyData);
        }
        setErrors({ title: '', content: '' });
    }, [mode, note]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isFormValid()) {
            toast.error('Por favor corrige los errores en el formulario');
            return;
        }

        setLoading(true);

        try {
            if (mode === 'create') {
                await notesAPI.createNote({
                    title: formData.title.trim(),
                    content: formData.content.trim()
                });
                toast.success('Nota creada exitosamente');
                setFormData({ title: '', content: '' });
                setOriginalData({ title: '', content: '' });
            } else {
                await notesAPI.updateNote(note.id, {
                    title: formData.title.trim(),
                    content: formData.content.trim()
                });
                toast.success('Nota actualizada exitosamente');
            }

            onNoteSaved();
            onClose();
        } catch (error) {
            console.error('Error saving note:', error);
            toast.error(`Error al ${mode === 'create' ? 'crear' : 'actualizar'} nota: ${error.response?.data?.message || error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        validateField(field, value);
    };

    const getButtonText = () => {
        if (loading) {
            return mode === 'create' ? 'Creando...' : 'Guardando...';
        }
        return mode === 'create' ? 'Crear Nota' : 'Guardar Cambios';
    };

    return {
        formData,
        loading,
        errors,
        handleSubmit,
        handleInputChange,
        isSaveButtonEnabled,
        getButtonText,
        hasChanges,
        titleCharCount: formData.title.length,
        contentCharCount: formData.content.length,
        setFormData,
        setOriginalData
    };
};