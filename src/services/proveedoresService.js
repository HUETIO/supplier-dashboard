// proveedoresService.js
const API_BASE_URL = 'http://localhost:8080/api';
const USERNAME = 'user';      // Usuario definido en application.properties
const PASSWORD = 'mipasswordseguro'; // Contraseña definida en application.properties

export const obtenerProveedores = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/suppliers", {
      method: "GET",
      credentials: "include", // Envía cookies y auth headers
      headers: {
        "Authorization": "Basic " + btoa("user:mipasswordseguro"),
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Acceso no autorizado. Verifica tus credenciales');
      }
      throw new Error(`Error HTTP! estado: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error obteniendo proveedores:", error);
    throw error;
  }
};