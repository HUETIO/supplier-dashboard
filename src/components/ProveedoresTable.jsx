

import React, { useState, useEffect } from 'react';
import * as proveedoresService from '../services/proveedoresService'; // Importa el servicio
import styles from './ProveedoresTable.module.css'; // Importa los estilos CSS Modules

const ProveedoresTable = () => {
  const [providers, setProveedores] = useState([]); // Estado para los datos de proveedores
  const [loading, setLoading] = useState(true);    // Estado para indicar si se están cargando datos
  const [error, setError] = useState(null);        // Estado para manejar errores

  useEffect(() => {
    const cargarProveedores = async () => {
      setLoading(true); // Inicia la carga
      setError(null);   // Limpia cualquier error previo
      try {
        const data = await proveedoresService.obtenerProveedores();
        setProveedores(data); // Actualiza el estado con los datos recibidos
      } catch (err) {
        console.error("Error al cargar proveedores:", err);
        setError(err.message || 'Error al cargar proveedores'); // Establece el estado de error
      } finally {
        setLoading(false); // Finaliza la carga (éxito o error)
      }
    };


    cargarProveedores(); // Llama a la función para cargar proveedores al montar el componente
  }, []); // El array vacío [] asegura que useEffect se ejecute solo una vez al montar el componente

  if (loading) {
    return <div className={styles.loading}>Cargando proveedores...</div>;
  }

  if (error) {
    return <div className={`${styles.error} ${styles.error}`}>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Log base de datos Proveedores Disponibles</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Proveedor</th>
            <th>Código</th> {/* Si la API devuelve el código del proveedor */}
          </tr>
        </thead>

        <tbody>
          {providers && providers.length > 0 ? (
            providers.map((provider) => (
              <tr key={provider.id}>
                <td>{provider.name}</td>
                <td>{provider.code}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2">No hay proveedores disponibles</td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
};

export default ProveedoresTable;