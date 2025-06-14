import React from 'react';

const PropertyFilters = ({ search, setSearch, priceRange, setPriceRange, setPage }) => {
  const handleSearchChange = (e) => {
    setPage(1);
    setSearch(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    const newMin = parseInt(e.target.value, 10) || 0;
    setPage(1);
    setPriceRange({ ...priceRange, min: newMin });
  };

  const handleMaxPriceChange = (e) => {
    const newMax = parseInt(e.target.value, 10) || 0;
    setPage(1);
    setPriceRange({ ...priceRange, max: newMax });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Nombre o dirección"
        value={search}
        onChange={handleSearchChange}
      />

      <input
        type="number"
        placeholder="Mínimo"
        value={priceRange.min}
        onChange={handleMinPriceChange}
      />

      <input
        type="number"
        placeholder="Máximo"
        value={priceRange.max}
        onChange={handleMaxPriceChange}
      />
    </div>
  );
};

export default PropertyFilters;