const PropertyFilters = ({ search, setSearch, priceRange, setPriceRange, setPage }) => {
  return (
    <div
      className="filters"
      style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '1.5rem',
        flexWrap: 'wrap',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        padding: '1rem',
        borderRadius: '8px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ marginBottom: '0.25rem', fontWeight: 'bold' }}>Buscar</label>
        <input
          type="text"
          placeholder="Nombre o dirección"
          value={search}
          onChange={e => {
            setPage(1);
            setSearch(e.target.value);
          }}
          style={{
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            minWidth: '200px',
          }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ marginBottom: '0.25rem', fontWeight: 'bold' }}>Precio mínimo</label>
        <input
          type="number"
          placeholder="Mínimo"
          value={priceRange.min}
          onChange={e => {
            setPage(1);
            setPriceRange({ ...priceRange, min: Number(e.target.value) });
          }}
          style={{
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            minWidth: '120px',
          }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ marginBottom: '0.25rem', fontWeight: 'bold' }}>Precio máximo</label>
        <input
          type="number"
          placeholder="Máximo"
          value={priceRange.max}
          onChange={e => {
            setPage(1);
            setPriceRange({ ...priceRange, max: Number(e.target.value) });
          }}
          style={{
            padding: '0.5rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            minWidth: '120px',
          }}
        />
      </div>
    </div>
  );
};

export default PropertyFilters;