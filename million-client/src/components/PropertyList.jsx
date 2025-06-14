import { useEffect, useState } from 'react';
import { fetchProperties } from '../services/owner.service';
import PropertyCard from './PropertyCard';
import PropertyDetailModal from './PropertyDetailModal';
import PropertyFilters from './PropertyFilters';
import PaginationControls from './PaginationControls';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const loadProperties = () => {
    setIsLoading(true);
    fetchProperties({
      name: search,
      minPrice: priceRange.min,
      maxPrice: priceRange.max,
      page,
      pageSize
    })
      .then(({ items, totalCount }) => {
        setProperties(items);
        setTotalCount(totalCount);
      })
      .catch(err => console.error(err.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    loadProperties();
  }, [search, priceRange, page, pageSize]);

  return (
    <div>
      <h1>Listado de Propiedades</h1>

      <PropertyFilters
        search={search}
        setSearch={setSearch}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        setPage={setPage}
      />

      {isLoading ? (
        <p>Cargando propiedades...</p>
      ) : (
        <div className="property-grid">
          {Array.isArray(properties) && properties.length > 0 ? (
            properties.map(prop => (
              <PropertyCard
                key={prop.propertyId}
                property={prop}
                onClick={setSelectedProperty}
              />
            ))
          ) : (
            <p>No se encontraron propiedades.</p>
          )}
        </div>
      )}

      <PaginationControls
        page={page}
        pageSize={pageSize}
        totalCount={totalCount}
        setPage={setPage}
        setPageSize={setPageSize}
      />

      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </div>
  );
};

export default PropertyList;