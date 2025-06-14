import React from 'react';

const PropertyCard = ({ property, onClick }) => (
  <div className="property-card" >
    <img src={property.imageUrl} alt={property.ownerName} onClick={() => onClick(property)}/>
    <h3>{property.ownerName}</h3>
    <p>{property.propertyAddress}</p>
    <p>Precio: ${property.price.toLocaleString()}</p>
  </div>
);

export default PropertyCard;