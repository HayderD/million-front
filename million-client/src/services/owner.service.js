import axios from 'axios';
import config from '../config';

export async function fetchProperties(filters = {}) {
  const {
    name,
    address,
    minPrice,
    maxPrice,
    page = 1,
    pageSize = 5
  } = filters;

  const payload = {
    page,
    pageSize,
    ...(name ? { name } : {}),
    ...(address ? { address } : {}),
    ...(minPrice !== undefined ? { minPrice } : {}),
    ...(maxPrice !== undefined ? { maxPrice } : {})
  };

  try {
    const response = await axios.post(`${config.API_BASE_URL}/owners/filter`, payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Asegurarse de que el backend retorna el formato esperado
    if (response.data && Array.isArray(response.data.items)) {
      return {
        items: response.data.items,
        totalCount: response.data.totalCount || 0
      };
    }

    // Si el formato no es válido, lanzar error
    throw new Error('Formato de respuesta inesperado.');
  } catch (error) {
    console.error('Error al cargar propiedades:', error);
    throw new Error('No se pudieron obtener las propiedades.');
  }
}
