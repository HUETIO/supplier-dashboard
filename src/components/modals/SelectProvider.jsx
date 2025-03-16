import React from 'react';

const SelectProvider = ({ providers, selectedProvider, setSelectedProvider }) => {
  return (
    <div>
      <label className="block mb-2">Proveedor</label>
      <select
        value={selectedProvider}
        onChange={(e) => setSelectedProvider(e.target.value)}
        className="w-full p-2 border rounded"
        required
      >
        <option value="">Selecciona un proveedor</option>
        {providers.map((provider) => (
          <option key={provider.id} value={provider.name}>
            {provider.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectProvider;