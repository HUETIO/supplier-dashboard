// src/services/recargaServices.js
const API_BASE_URL = 'http://localhost:8080'; // Reemplaza si es diferente

export const guardarRecarga = async (recargaData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/recargas/guardar`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recargaData),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error al guardar recarga:", error);
    throw error;
  }
};

export const obtenerTransacciones = async () => { // Nueva función para obtener transacciones
  try {
    const response = await fetch(`${API_BASE_URL}/api/recargas/transacciones`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error al obtener transacciones:", error);
    throw error;
  }
};