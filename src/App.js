import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import ProveedoresTable from "./components/ProveedoresTable";
import ModalRecarga from "./components/modals/ModalRecarga";
import TransactionQueryTable from './components/transaction/TransactionQueryTable'; // Importa el nuevo componente
import Header from './components/headers/header';
import LoginForm from './components/headers/login/loginForm';
import LoginFormRegister from './components/headers/login/loginFormRegister';



const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("recarga"); // Estado para controlar el tipo de modal

  return (

    <div className="App">
      <Header />
      <header className="App-header">





        <div className="main-content">
          <h1 className="text-3xl font-bold mb-4">Sistema de Recargas Puntored</h1>

          {/* Botón para abrir el modal de recarga */}
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => {
              setModalType("recarga"); // Establece el tipo de modal como "recarga"
              setModalOpen(true); // Abre el modal
            }}
          >
            Realizar Recarga
          </button>

          {/* Botón para abrir el modal de historial de recargas */}
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => {
              setModalType("historial"); // Establece el tipo de modal como "historial"
              setModalOpen(true); // Abre el modal
            }}
          >
            Historial de Recargas
          </button>

          {/* Modal de Recarga o Historial */}
          <ModalRecarga
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            modalType={modalType} // Pasa el tipo de modal como prop
          >
            {modalType === "recarga" ? (
              // Contenido para realizar recarga
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Recarga de Saldo</h2>
                <form className="space-y-4">
                  <div>
                    <label className="block mb-2">Número de teléfono</label>
                    <input
                      type="tel"
                      className="w-full p-2 border rounded"
                      placeholder="300 123 4567"
                    />
                  </div>
                  <div>
                    <label className="block mb-2">Monto</label>
                    <input
                      type="number"
                      className="w-full p-2 border rounded"
                      placeholder="$10,000"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Confirmar Recarga
                  </button>
                </form>
              </div>
            ) : (
              // Contenido para el historial de recargas
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Historial de Recargas</h2>
                <TransactionQueryTable /> {/* Renderiza el componente TransactionQueryTable */}
              </div>
            )}
          </ModalRecarga>

          {/* Tabla de Proveedores */}
          <ProveedoresTable />
        </div>
      </header>
    </div>
  );
};

export default App;