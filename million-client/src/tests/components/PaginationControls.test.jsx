import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PaginationControls from '..//../components/PaginationControls';

describe('PaginationControls', () => {
  const setup = ({ page = 1, pageSize = 10, totalCount = 100 } = {}) => {
    const setPage = jest.fn();
    const setPageSize = jest.fn();

    render(
      <PaginationControls
        page={page}
        pageSize={pageSize}
        totalCount={totalCount}
        setPage={setPage}
        setPageSize={setPageSize}
      />
    );

    return { setPage, setPageSize };
  };

  test('renderiza número de página', () => {
    setup({ page: 2 });
    expect(screen.getByText(/Página 2/i)).toBeInTheDocument();
  });

  test('botón "Anterior" está deshabilitado en la primera página', () => {
    setup({ page: 1 });
    expect(screen.getByText(/Anterior/i)).toBeDisabled();
  });

  test('botón "Siguiente" está deshabilitado cuando no hay más páginas', () => {
    setup({ page: 10, pageSize: 10, totalCount: 100 });
    expect(screen.getByText(/Siguiente/i)).toBeDisabled();
  });

  test('hace clic en "Anterior" y llama a setPage', () => {
    const { setPage } = setup({ page: 2 });
    const button = screen.getByText(/Anterior/i);
    fireEvent.click(button);
    expect(setPage).toHaveBeenCalled();
  });

  test('hace clic en "Siguiente" y llama a setPage', () => {
    const { setPage } = setup({ page: 1 });
    const button = screen.getByText(/Siguiente/i);
    fireEvent.click(button);
    expect(setPage).toHaveBeenCalled();
  });

  test('cambia registros por página y llama a setPageSize y setPage(1)', () => {
    const { setPage, setPageSize } = setup({ page: 3, pageSize: 10 });
    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '20' } });
    expect(setPage).toHaveBeenCalledWith(1);
    expect(setPageSize).toHaveBeenCalledWith(20);
  });
});
