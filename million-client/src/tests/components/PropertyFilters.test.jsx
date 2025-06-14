import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PropertyFilters from './PropertyFilters'; // ajusta la ruta si es necesario

describe('PropertyFilters component', () => {
  let setSearchMock;
  let setPriceRangeMock;
  let setPageMock;

  const setup = () => {
    setSearchMock = jest.fn();
    setPriceRangeMock = jest.fn();
    setPageMock = jest.fn();

    render(
      <PropertyFilters
        search="Casa"
        setSearch={setSearchMock}
        priceRange={{ min: 100000, max: 500000 }}
        setPriceRange={setPriceRangeMock}
        setPage={setPageMock}
      />
    );
  };

  it('renders all inputs with initial values', () => {
    setup();

    expect(screen.getByPlaceholderText('Nombre o dirección')).toHaveValue('Casa');
    expect(screen.getByPlaceholderText('Mínimo')).toHaveValue(100000);
    expect(screen.getByPlaceholderText('Máximo')).toHaveValue(500000);
  });

  it('calls setSearch and setPage when search input changes', () => {
    setup();

    const input = screen.getByPlaceholderText('Nombre o dirección');
    fireEvent.change(input, { target: { value: 'Departamento' } });

    expect(setPageMock).toHaveBeenCalledWith(1);
    expect(setSearchMock).toHaveBeenCalledWith('Departamento');
  });

  it('calls setPriceRange and setPage when min price changes', () => {
    setup();

    const minInput = screen.getByPlaceholderText('Mínimo');
    fireEvent.change(minInput, { target: { value: '200000' } });

    expect(setPageMock).toHaveBeenCalledWith(1);
    expect(setPriceRangeMock).toHaveBeenCalledWith({ min: 200000, max: 500000 });
  });

  it('calls setPriceRange and setPage when max price changes', () => {
    setup();

    const maxInput = screen.getByPlaceholderText('Máximo');
    fireEvent.change(maxInput, { target: { value: '600000' } });

    expect(setPageMock).toHaveBeenCalledWith(1);
    expect(setPriceRangeMock).toHaveBeenCalledWith({ min: 100000, max: 600000 });
  });
});
