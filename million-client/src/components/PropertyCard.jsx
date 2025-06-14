import React from 'react';

const PropertyCard = ({ property, onClick }) => (
  <div className="property-card" onClick={() => onClick(property)}>
    <img src={property.imageUrl} alt={property.propertyName} />
    <h3>{property.propertyName}</h3>
    <p>{property.propertyAddress}</p>
    <p>Precio: ${property.price.toLocaleString()}</p>
  </div>
);

export default PropertyCard;