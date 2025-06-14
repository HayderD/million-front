const PaginationControls = ({ page, pageSize, totalCount, setPage, setPageSize }) => {
  return (
    <div
      style={{
        backgroundColor: '#f8f9fa', // Fondo claro
        padding: '1rem',
        borderTop: '1px solid #ddd',
        marginTop: '2rem',
        boxShadow: '0 -2px 6px rgba(0,0,0,0.05)'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          flexWrap: 'wrap'
        }}
      >
        <button
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          disabled={page === 1}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            cursor: page === 1 ? 'not-allowed' : 'pointer',
            opacity: page === 1 ? 0.5 : 1
          }}
        >
          ◀ Anterior
        </button>

        <span style={{ fontWeight: 'bold' }}>Página {page}</span>

        <button
          onClick={() => setPage(prev => (page * pageSize < totalCount ? prev + 1 : prev))}
          disabled={page * pageSize >= totalCount}
          style={{
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            cursor: page * pageSize >= totalCount ? 'not-allowed' : 'pointer',
            opacity: page * pageSize >= totalCount ? 0.5 : 1
          }}
        >
          Siguiente ▶
        </button>

        <label style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '0.5rem' }}>Registros por página:</span>
          <input
            type="number"
            min={1}
            value={pageSize}
            onChange={(e) => {
              const newSize = Number(e.target.value);
              if (newSize > 0) {
                setPage(1);
                setPageSize(newSize);
              }
            }}
            style={{
              padding: '0.3rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
              width: '60px'
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default PaginationControls;