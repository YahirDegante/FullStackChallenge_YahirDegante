import PropTypes from 'prop-types';

function Header({ 
    onOpenCreateModal, 
    noteCount, 
    viewMode, 
    onViewModeChange 
}) {
    return (
        <div className="card shadow-sm mb-4">
            <div className="card-body py-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-none d-md-block">
                        <h1 className="h2 mb-1">Mis Notas</h1>
                        <p className="text-muted mb-0">
                            {noteCount} elemento{noteCount === 1 ? '' : 's'}
                        </p>
                    </div>
                    <div className="d-md-none text-center">
                        <p className="text-muted mb-0 small">
                            {noteCount} elemento{noteCount === 1 ? '' : 's'}
                        </p>
                    </div>
                    
                    <div className="d-flex align-items-center gap-2 gap-md-3">
                        <div className="d-flex border rounded" style={{ height: '48px' }}>
                            <button
                                type="button"
                                className={`btn d-flex align-items-center px-3 ${viewMode === 'list' ? 'btn-primary' : 'btn-light'}`}
                                onClick={() => onViewModeChange('list')}
                                title="Vista de lista"
                            >
                                <i className="bi bi-list-ul" />
                            </button>
                            <div className="border-start my-1" />
                            <button
                                type="button"
                                className={`btn d-flex align-items-center px-3 ${viewMode === 'grid' ? 'btn-primary' : 'btn-light'}`}
                                onClick={() => onViewModeChange('grid')}
                                title="Vista de cuadrícula"
                            >
                                <i className="bi bi-grid-3x3-gap" />
                            </button>
                        </div>
                        <button
                            className="btn btn-primary btn-lg d-flex align-items-center gap-2 px-3 px-md-4"
                            onClick={onOpenCreateModal}
                            style={{ height: '48px' }}
                        >
                            <i className="bi bi-plus-lg" />
                            <span className="d-none d-md-inline">Nueva Nota</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Header.propTypes = {
    onOpenCreateModal: PropTypes.func.isRequired,
    noteCount: PropTypes.number.isRequired,
    viewMode: PropTypes.oneOf(['list', 'grid']).isRequired,
    onViewModeChange: PropTypes.func.isRequired
};

export default Header;