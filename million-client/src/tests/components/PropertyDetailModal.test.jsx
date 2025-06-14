import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PropertyDetailModal from './PropertyDetailModal'; // Ajusta la ruta si es necesario

describe('PropertyDetailModal component', () => {
  const mockProperty = {
    propertyName: 'Casa del Lago',
    imageUrl: 'https://example.com/lake-house.jpg',
    propertyAddress: 'Lago Azul 456',
    price: 450000,
    ownerName: 'Juan Pérez',
  };

  const mockOnClose = jest.fn();

  it('should not render if property is null', () => {
    const { container } = render(<PropertyDetailModal property={null} onClose={mockOnClose} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders property details correctly', () => {
    render(<PropertyDetailModal property={mockProperty} onClose={mockOnClose} />);

    expect(screen.getByText('Casa del Lago')).toBeInTheDocument();
    expect(screen.getByAltText('Casa del Lago')).toHaveAttribute('src', mockProperty.imageUrl);
    expect(screen.getByText(/Dirección:/)).toHaveTextContent('Dirección: Lago Azul 456');
    expect(screen.getByText(/Precio:/)).toHaveTextContent('Precio: $450,000');
    expect(screen.getByText(/Propietario:/)).toHaveTextContent('Propietario: Juan Pérez');
    expect(screen.getByRole('button', { name: 'Cerrar' })).toBeInTheDocument();
  });

  it('calls onClose when clicking the close button', () => {
    render(<PropertyDetailModal property={mockProperty} onClose={mockOnClose} />);
    const closeButton = screen.getByRole('button', { name: 'Cerrar' });

    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});