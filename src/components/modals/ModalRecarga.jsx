import React, { useState, useEffect } from "react";
import SelectProvider from "./SelectProvider";
import * as proveedoresService from "../../services/proveedoresService";
import * as recargaServices from "../../services/recargaServices";
import TransactionQueryTable from "../transaction/TransactionQueryTable"; // Importar el historial de transacciones

const ModalRecarga = ({ isOpen, onClose, modalType }) => {
  const [providers, setProviders] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState("");
  const [telefono, setTelefono] = useState("");
  const [monto, setMonto] = useState("");

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const data = await proveedoresService.obtenerProveedores();
        setProviders(data);
      } catch (error) {
        console.error("Error al cargar proveedores", error);
      }
    };

    fetchProviders();
  }, []);

  // 🛠️ Función para manejar la recarga
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedProvider || !telefono || !monto) {
      alert("Por favor completa todos los campos");
      return;
    }

    const recargaData = {
      proveedor: selectedProvider,
      telefono,
      monto: parseFloat(monto),
    };

    try {
      const response = await fetch("http://localhost:8080/api/recargas/guardar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recargaData),
      });

      if (response.ok) {
        alert("Recarga guardada con éxito ✅");
        setTelefono(""); // Limpiar inputs
        setMonto("");
        onClose(); // Cerrar modal después de confirmar la recarga
      } else {
        alert("Error al guardar la recarga ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Ocurrió un error, intenta de nuevo.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="modal-close">
          &times;
        </button>

        {modalType === "recarga" ? (
          // 🟢 Modal de Recarga
          <>
            <h2 className="text-xl font-bold mb-4">Recarga de Saldo</h2>
            <SelectProvider
              providers={providers}
              selectedProvider={selectedProvider}
              setSelectedProvider={setSelectedProvider}
            />
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div>
                <label className="block mb-2">Número de teléfono</label>
                <input
                  type="tel"
                  className="w-full p-2 border rounded"
                  placeholder="300 123 4567"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-2">Monto</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded"
                  placeholder="$10,000"
                  value={monto}
                  onChange={(e) => setMonto(e.target.value)}
                />
              </div>
              <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
                Confirmar Recarga
              </button>
            </form>
          </>
        ) : (
          // 🔵 Modal de Historial de Recargas
          <>
            <h2 className="text-xl font-bold mb-4">Historial de Recargas</h2>
            <TransactionQueryTable />
          </>
        )}
      </div>
    </div>
  );
};

export default ModalRecarga;