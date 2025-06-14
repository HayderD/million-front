import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PropertyCard from './PropertyCard'; // Ajusta la ruta si es necesario

describe('PropertyCard component', () => {
  const mockProperty = {
    imageUrl: 'https://example.com/image.jpg',
    propertyName: 'Casa Moderna',
    propertyAddress: 'Calle 123, Ciudad',
    price: 250000,
  };

  const mockOnClick = jest.fn();

  beforeEach(() => {
    render(<PropertyCard property={mockProperty} onClick={mockOnClick} />);
  });

  it('renders property information', () => {
    expect(screen.getByText('Casa Moderna')).toBeInTheDocument();
    expect(screen.getByText('Calle 123, Ciudad')).toBeInTheDocument();
    expect(screen.getByText('Precio: $250,000')).toBeInTheDocument();

    const image = screen.getByAltText('Casa Moderna');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  it('calls onClick when clicked', () => {
    const card = screen.getByRole('img').closest('div'); // div contenedor
    fireEvent.click(card);

    expect(mockOnClick).toHaveBeenCalledWith(mockProperty);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});