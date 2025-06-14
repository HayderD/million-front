// src/components/PropertyDetailModal.jsx
import React from 'react';

const PropertyDetailModal = ({ property, onClose }) => {
  if (!property) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{property.propertyName}</h2>
       <img
  src={property.imageUrl}
  alt={property.propertyName}
  width="100%"
  height="300"
/>       
        <p><strong>Dirección:</strong> {property.propertyAddress}</p>
        <p><strong>Precio:</strong> ${property.price.toLocaleString()}</p>
        <p><strong>Propietario:</strong> {property.ownerName}</p>
        <button onClick={onClose} style={{
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none'
          }}>Cerrar</button>
      </div>
    </div>
  );
};

export default PropertyDetailModal;
