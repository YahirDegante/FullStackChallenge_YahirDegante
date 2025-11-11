import PropTypes from "prop-types";

function ErrorMessage({ error }) {
    return (
        <div
            className="alert alert-danger d-flex align-items-center justify-content-center py-3"
            role="alert"
        >
            {/* Ícono de advertencia (si usas Bootstrap Icons) */}
            <i className="bi bi-exclamation-triangle-fill me-2"></i>

            <div>
                <strong>Error del servidor:</strong> {error}
            </div>
        </div>
    );
}

ErrorMessage.propTypes = {
    error: PropTypes.string.isRequired,
};

export default ErrorMessage;
