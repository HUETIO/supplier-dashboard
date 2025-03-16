// src/components/TransactionQueryTable/TransactionQueryTable.jsx
import React, { useState, useEffect } from 'react';
import * as recargaServices from '../../services/recargaServices'; // Importa el servicio de recargas
import styles from './TransactionQueryTable.module.css';

const TransactionQueryTable = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await recargaServices.obtenerTransacciones();
        setTransactions(data);
      } catch (err) {
        console.error("Error al cargar transacciones:", err);
        setError(err.message || 'Error al cargar transacciones');
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Cargando transacciones...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Historial de Transacciones</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Proveedor</th>
            <th>Monto</th>
            <th>Teléfono</th>
            <th>Fecha de Recarga</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.proveedor}</td>
              <td>{transaction.monto}</td>
              <td>{transaction.telefono}</td>
              <td>{transaction.fechaRecarga}</td> {/* Formatear la fecha si es necesario */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionQueryTable;