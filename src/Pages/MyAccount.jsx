import React, { useContext, useState } from 'react';
import { ShoppingCartContext } from '../Context';

const MyAccount = () => {
  const { user, setUser } = useContext(ShoppingCartContext);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    setEditMode(false);
  };

  return (
    <div className="container mx-auto mt-20 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Mi Cuenta</h1>
      {editMode ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">Correo</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-lg font-medium text-gray-700 mb-2">Dirección</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-150">
            Guardar
          </button>
        </form>
      ) : (
        <div className="space-y-4">
          <p className="text-lg font-medium text-gray-700"><strong>ID:</strong> {user.id}</p>
          <p className="text-lg font-medium text-gray-700"><strong>Nombre:</strong> {user.name}</p>
          <p className="text-lg font-medium text-gray-700"><strong>Correo:</strong> {user.email}</p>
          <p className="text-lg font-medium text-gray-700"><strong>Dirección:</strong> {user.address}</p>
          <button
            onClick={() => setEditMode(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-150"
          >
            Editar
          </button>
        </div>
      )}
    </div>
  );
};

export default MyAccount;